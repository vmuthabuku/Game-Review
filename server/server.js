const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const config = require('./config/config').get(process.env.NODE_ENV)

mongoose.Promise = global.Promise
mongoose.connect(config.DATABASE)

const { User } = require('./models/user')
const { Game } = require('./models/game')
const { auth } = require('./middleware/auth')

app.use(bodyParser.json())
app.use(cookieParser())

//GET ONE GAME
app.get("/api/getgame", (req, res) => {
    const id = req.query.id

    Game.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        return res.send(doc)
    })
})

// GET ALL WITH LIMIT
app.get("/api/getgames", (req, res) => {
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    Game.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

// POST A GAME
app.post("/api/game", (req, res) => {
    const game = new Game(req.body)

    game.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            success: true,
            gameId: doc._id,
            post:doc
        })

    })
})

// UPDATE A GAME
app.post("/api/game_update", (req, res) => {
    Game.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            game:doc
        })


    })
})

// DELETE A GAME
app.delete("/api/delete_game", (req, res) => {
    let id = req.query._id
    Game.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err)
        res.json({
            success: true
        })
    })
})

// REGISTER USER
app.post("/api/register", (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            success: true,
            user: doc
        })
    })
})

// LOGIN USER
app.post('/api/login',(req,res)=>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Auth failed, email not found'})

        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth:false,
                message:'Wrong password'
            });

            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).json({
                    isAuth:true,
                    id:user._id
                })
            })
        })
    })
})

// GET SPECIFIC USER
app.get('/api/getReviewer',(req,res)=>{
    let id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})

// GET ALL USERS
app.get('/api/users',(req,res)=>{
    User.find({},(err,users)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})

// GET USER POSTS
app.get('/api/user_posts',(req,res)=>{
    Game.find({ownerId:req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err);
        res.send(docs)
    })
})

// LOG OUT
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth:true,
        id:req.user._id,
        email:req.user.email,
        name:req.user.name,
        lastname:req.user.lastname
    })
});


app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server is active")
})