const axios = require('axios');
require('dotenv').config();


const getApi=(req,res)=>{
    axios.get(`${process.env.API_URL}`).then(response=>{
        res.send(response.data)
    }).catch(error=>console.log(error.message))
}
module.exports=getApi