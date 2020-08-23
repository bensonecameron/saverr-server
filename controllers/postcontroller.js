const router = require('express').Router();
const Post = require('../db').import('../models/post')
const validateSession = require('../middleware/validate-session');

//! PRACTICE ROUTE
router.get('/practice', function(req, res)
{
  res.send('Hey!! This is a practice route!')
})

//! GET ALL Post
router.get('/', validateSession, (req, res) => {
    Post.findAll()
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json({ error: err }))
})

//! Create Post 
router.post('/new',  (req, res) => {
    const newPost = {

        titleOfPost: req.body.titleOfPost,
        descriptionOfPost: req.body.descriptionOfPost,
        url: req.body.url,
        imgOfPost: req.body.imgOfPost,
        tagsOfPost: req.body.tagsOfPost,
        impPost: req.body.impPost

    }

    Post.create(newPost)
        .then(post => res.status(200).json(post))
        .catch(err => res.status(500).json({ error: err }))    
})

//! GET by Name
router.get('/:name', (req, res) => {  
    Post.findOne({ where: { titleOfPost: req.params.name }})  
      .then(post => res.status(200).json(post))
      .catch(err => res.status(500).json({ error: err }))
  })
  
//! UPDATE by ID
router.put('/:id', (req, res) => {
    Post.update(req.body, { where: { id: req.params.id }})  
      .then(post => res.status(200).json(post))
      .catch(err => res.status(500).json({error: err})) 
  })

//! DELETE
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: { id: req.params.id }
    })
    .then(post => res.status(200).json(post))
    .catch(err => res.status(500).json({ error: err }))
})   

module.exports = router;