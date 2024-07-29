const { Router } = require('express');
const { getPortfolioItems, createPortfolioItem, editPortfolioItem, deletePortfolioItem } = require('../controllers/portfolioController');

const router = Router();

router.get('/', getPortfolioItems);
router.post('/', createPortfolioItem);
router.put('/edit/:id', editPortfolioItem);
router.put('/delete/:id', deletePortfolioItem);

module.exports = router;
