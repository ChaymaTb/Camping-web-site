const express = require('express');
const articleRouter  = express.Router();
const Article = require('../models/aricleModel');

// Create article and save it
articleRouter.post('/addarticle', async(req, res) =>  {
    try{ 
        const newArticle = new Article(req.body);
        let result = await newArticle.save();
        res.send(result);
    }
    catch (error){
        console.log(error);
    }
});

// Get article
articleRouter.get('/', async(req, res) => {
    
})

// Upate article
articleRouter.put('/:id', async(req, res) =>{
    try {
        let result = await Article.findOneAndUpdate({
            id: req.params.id,
            $set: { ...req.body },
        });
        res.send(result)
    }
    catch(error){
        console.log(error)
    }
});

// Delete article
articleRouter.delete("/:id",async(req,res)=>{
    try{
        let result = await Article.findOneAndRemove({
            id: req.params.id,
        });
        res.send({msg:"person is deleted"})
    } catch(error) {
        console.log(error)
    }
});

module.exports = articleRouter;