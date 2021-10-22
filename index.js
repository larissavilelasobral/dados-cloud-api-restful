const express = require('express');
const mongoose = require('mongoose');
const app = express();

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({ 
    extended: true,
  }),
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes');

app.use('./person', personRoutes)

// rotas inicial / endpoint
app.get('/', (req, res) => {
  // mostrar req
  res.json({message: 'Oi Express'})
})

// entregar uma porta
const DB_USER = 'larissaAPI';
const DB_PASSWORD = encodeURIComponent('aAxZ6hixIbSqqgc5');
const PORT = 5000;

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.7wd2i.mongodb.net/Cluster0?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectamos ao MongoDB Cloud')
    app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta: ${PORT}`)
    })
  })
  .catch((err) => 
    console.log(err)
  )



