
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Rendez-nous PHP !')
})


app.use(express.static('public'))
app.use(express.static('node_modules'))

app.set("view engine", "pug");
///////
app.get('/promo/:id', function(req , res){
    res.render('fiche' + req.params.id);
});
/////
app.get("/promo",function (req, res) {
    res.render("apprenants",{});
});
app.get("/accueil",function (req, res) {
    res.render("index",{});
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})