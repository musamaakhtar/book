
import express from 'express'
import { register, login } from '../controllers/authController.js';
import {createbook , getAllBooks , updateBookStatus} from "../controllers/bookController.js";
const router = express.Router();
// System settings 
router.post('/reg', register);
router.post('/log', login);
//trips
router.post('/addBook', createbook);
router.get('/getAllBooks', getAllBooks);
router.post('/updateBookStatus', updateBookStatus);
export default router;