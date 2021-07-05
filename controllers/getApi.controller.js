const axios = require('axios');


const getApi=(req,res)=>{
    axios.get(`https://digimon-api.vercel.app/api/digimon`).then(response=>{
        res.send(response.data)
    }).catch(error=>console.log(error.message))
}
module.exports=getApi