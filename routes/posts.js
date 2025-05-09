import { Router } from 'express';
const router = Router();

let posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'},
    {id:3, title: 'Post Three'},
];

// Get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit)

    if(!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
        res.status(200).json(posts);
});
 
//get a single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res
        .status(404)
        .json({msg: `A post with the id of ${id} was not found`})
    }
        res.status(200).json(post);
});

// Create new Post
router.post('/', (req, res) => {
    console.log(req.body);
});

export default router;