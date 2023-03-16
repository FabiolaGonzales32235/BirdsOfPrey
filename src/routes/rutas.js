const {Router} = require('express');
const router = Router();

const data = require('./data.json');
console.log(data);

router.get('/',(req,res) => {
    res.json(data);
});

router.get('/:miembros',(req,res) => {
    const {miembros}= req.params;
    data.forEach(data => {
        if(data.miembros == miembros){
            res.json(data);
        }
    })
});

router.post('/', (req,res) => {
    const {años, identidad, poderes} = req.body;
    if(años && identidad && poderes){
        const miembros = data.length +1;
        const newData = {...req.body, miembros};
        data.push(newData);
        //console.log(newData);
        res.status(200).json(data);
}else{
    res.status(500).json({error: 'no data'});
}

})

module.exports = router;