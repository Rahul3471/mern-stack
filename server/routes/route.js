

import express from  'express';
import { UserSignup,userLogIn } from '../controller/user-controller.js';
import { getProducts,getProductById } from '../controller/product-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', UserSignup);
router.post('/login',userLogIn);

router.get('/products',getProducts)
router.get('/product/:id',getProductById)


export default router;