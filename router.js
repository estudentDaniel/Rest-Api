const express = require('express');
//const { validationResult, matchedData } = require('express-validator');
const User = require("../model/shema");
const router =  express.Router();

//get todos
router.get('/user', async (req, res) => {
    let user = await User.find();
    res.json({ user});
});
// get por id
router.get('/:id', async (req, res) => {
    let user = await User.findById(req.params.id);
    res.json({ user});
});
//Criação
router.post('/user', async(req, res) => {
    let {name , idade } = req.query;
        const user = new User();
        if (name) {
            user.name = name;
            user.idade = idade;
        }
        const info = await user.save();
        res.json({ info });
 
});
// edicao
router.put( '/:id', async (req, res)=>{
    let id =  req.params.id
    const user = {
        name,
        idade,
    }
    try{
        const update = await user.updateOne({_id: id}, user)
        res.json({update});
    }catch(err){   res.json({ err: "Deu pau" });  }
    
    const info = await user.save();
    res.json({ info });
    
});
//delete
router.delete('/:id', async (req, res) => {
        let id = req.body;
        console.log(req.body);
        let data = await User.deleteOne(id);
        res.send(data)
})

module.exports = router;