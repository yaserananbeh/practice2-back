const express = require('express')
const app = express()
const cors = require('cors');
// const axios = require('axios');
const mongoose = require("mongoose");
app.use(cors())
app.use(express.json())
require('dotenv').config();
const PORT = process.env.PORT;
const getApi =require('./controllers/getApi.controller')
const {
    createFavorite,getFavorite,deleteFavorite,updateFavorite
}=require('./controllers/crud.controller')
mongoose.connect(`${process.env.MONGO_ATLAS_URL}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// a server endpoint 
app.get('/',(req,res)=>res.send('proof of live'))
app.get('/getapi',getApi)

//crud operations
app.post('/favorite',createFavorite)
app.get('/favorite',getFavorite)
app.delete('/favorite/:name',deleteFavorite)
app.put('/favorite/:name',updateFavorite)

app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})