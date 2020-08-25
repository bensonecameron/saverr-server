const router = require('express').Router();
const Collection = require('../db').import('../models/collection')
const validateSession = require('../middleware/validate-session');


//! PRACTICE ROUTE
router.get('/practice', function(req, res)
{
  res.send('Hey!! This is a practice route!')
})

//! GET ALL Collection
router.get('/', validateSession, (req, res) => {
    Collection.findAll()
        .then(collection => res.status(200).json(collection))
        .catch(err => res.status(500).json({ error: err }))
})

//! Create Collection 
router.post('/new', validateSession, (req, res) => {
    const newCollection = {

        nameOfCollection: req.body.nameOfCollection,
        descriptionOfCollection: req.body.descriptionOfCollection,
        tagsOfCollection: req.body.tagsOfCollection,
        impCollection: req.body.impCollection,
        userId: req.user.id
    }

    Collection.create(newCollection)
        .then(collection => res.status(200).json(collection))
        .catch(err => res.status(500).json({ error: err }))    
})

//! GET by Name
router.get('/:name', validateSession, (req, res) => {  
    Collection.findOne({ where: { nameOfCollection: req.params.title }})  
      .then(collection => res.status(200).json(collection))
      .catch(err => res.status(500).json({ error: err }))
  })

  //! GET by Tags
router.get('/:tags', validateSession, (req, res) => {  
  Collection.findOne({ where: { nameOfCollection: req.params.tags }})  
    .then(collection => res.status(200).json(collection))
    .catch(err => res.status(500).json({ error: err }))
})
  
//! UPDATE by ID
router.put('/:id', validateSession, (req, res) => {
    Collection.update(req.body, { where: { id: req.params.id }})  
      .then(collection => res.status(200).json(collection))
      .catch(err => res.status(500).json({error: err})) 
  })

//! DELETE
router.delete('/:id', validateSession, (req, res) => {
    Collection.destroy({
        where: { id: req.params.id }
    })
    .then(collection => res.status(200).json(collection))
    .catch(err => res.status(500).json({ error: err }))
})   

module.exports = router;