const express = require('express')
const app = express()
const handlebars = require('express-handlebars');

const products = require('./products.json');

const PORT = process.env.PORT || 7777;

app.use(express.static('public'));

//регестрируем движок хандлебарс
app.set('view engine', 'hbs');
//передаем настройки и указуем разширение для viev engine
app.engine('hbs',handlebars({
    extname:'hbs'
}))


app.get('/', (req, res)=> {
    res.render('home',{pageTitle:'home'});

})
app.get('/about', (req, res)=> {
    res.render('about',{pageTitle:'about'})

})
app.get('/products', (req, res)=> {
    res.render('products',{products:products,cssFileName:'products'})

})

app.get('/product/:productId', (req, res) => {
    console.log(req.params);
  
    const product = products.find(p => p.id === req.params.productId);
  
    res.render('product', { product });
  });


app.listen(PORT, () => {
    console.log("server is ranning")
});
//