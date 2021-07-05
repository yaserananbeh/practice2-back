const PracticeModel =require('../models/mongoos.model')

const createFavorite=(req,res)=>{
    const {name,img,level}=req.body;
    PracticeModel.find({name:name},(error,data)=>{
        if(data.length>0){
            res.send('already exist')
        }else{
            const newPracticeModel=new PracticeModel({
                name:name,
                img:img,
                level:level
            });
            newPracticeModel.save()
            res.send(newPracticeModel)
        }
    })
}
const getFavorite=(req,res)=>{
    PracticeModel.find({},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            res.send(data)
        }
    })

}
const deleteFavorite=(req,res)=>{
    const name=req.params.name;
    PracticeModel.deleteOne({name:name},(error,data)=>{
        if(error){
            res.send(error.message)
        }
        else{
            res.send(data)
        }
    })

}
const updateFavorite=(req,res)=>{
    const choosenName=req.params.name;
    const {name,img,level}=req.body;
    PracticeModel.findOne({name:choosenName},(error,data)=>{
        if(error){
            res.send(error.message)
        }else{
            data.name=name,
            data.img=img,
            data.level=level
            data.save()
            res.send(data)
        }
    })

}
module.exports={
    createFavorite,getFavorite,deleteFavorite,updateFavorite
}