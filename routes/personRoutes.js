const router = require('express').Router();
const Person = require('../models/Person');

// rotas da API
router.post('/', async (req, res) => {
  // req.body
  const { name, salary, approved } = req.body
  // validação deixando passar
  if(!name) {
    res.status(422).json({ error: 'Dados faltando!' })
  }
  
  // destructuring 
  const person = {
    name,
    salary,
    approved,
  }

  try {
    // criando dados
    await Person.create(person)

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (error) {
    res.status(500).json({ error: error })
    console.log('errorr')
  }
})

router.get('/', async (req,res) => {
  try {
    const people = await Person.find()

    res.status(200).json(people)
  } catch (error) {
    res.status(500).json({error: error})
  }
})

module.exports = router