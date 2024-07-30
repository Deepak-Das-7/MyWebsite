const { Router } = require('express');
const { getPortfolioItems, createPortfolioItem, editPortfolioItem, deletePortfolioItem } = require('../controllers/portfolioController');
const { getPhoto, createPhoto } = require('../controllers/photo');

const router = Router();

router.get('/', getPortfolioItems);
router.post('/', createPortfolioItem);
router.put('/edit/:id', editPortfolioItem);
router.put('/delete/:id', deletePortfolioItem);

router.get('/photo', getPhoto);
router.post('/upload', createPhoto);

module.exports = router;
