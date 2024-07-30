const { Router } = require('express');
const { getPortfolioItems, createPortfolioItem, editPortfolioItem, deletePortfolioItem } = require('../controllers/PostController');
const { getPhoto, createPhoto } = require('../controllers/Photo');

const userController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");
const CommentController = require("../controllers/CommentController");
const CategoryController = require("../controllers/CategoryController");
const TagController = require("../controllers/TagController");

const router = Router();

// Portfolio routes
router.get('/portfolio', getPortfolioItems);
router.post('/portfolio', createPortfolioItem);
router.put('/portfolio/:id', editPortfolioItem);
router.put('/portfolio/delete/:id', deletePortfolioItem);

// Photo routes
router.get('/photo', getPhoto);
router.post('/upload', createPhoto);

// User routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUserById);
router.delete('/users/:id', userController.deleteUserById);

// Post routes
router.get('/posts', PostController.getAllPosts);
router.post('/posts', PostController.createPost);
router.get('/posts/:id', PostController.getPostById);
router.put('/posts/:id', PostController.updatePostById);
router.delete('/posts/:id', PostController.deletePostById);

// Comment routes
router.get('/comments', CommentController.getAllComments);
router.post('/comments', CommentController.createComment);
router.get('/comments/:id', CommentController.getCommentById);
router.put('/comments/:id', CommentController.updateCommentById);
router.delete('/comments/:id', CommentController.deleteCommentById);

// Category routes
router.get('/categories', CategoryController.getAllCategories);
router.post('/categories', CategoryController.createCategory);
router.get('/categories/:id', CategoryController.getCategoryById);
router.put('/categories/:id', CategoryController.updateCategoryById);
router.delete('/categories/:id', CategoryController.deleteCategoryById);

// Tag routes
router.get('/tags', TagController.getAllTags);
router.post('/tags', TagController.createTag);
router.get('/tags/:id', TagController.getTagById);
router.put('/tags/:id', TagController.updateTagById);
router.delete('/tags/:id', TagController.deleteTagById);

module.exports = router;
