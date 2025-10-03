const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, postsController.createPost);
router.get('/', postsController.getAllPosts);
router.get('/:postId', postsController.getPost);
router.post('/:postId/replies', authMiddleware, postsController.createReply);

module.exports = router;