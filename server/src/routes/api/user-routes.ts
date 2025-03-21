import express from 'express';
const router = express.Router();
import {
  createUser,
  saveDestination,
  deleteDestination,
  login,
} from '../../controllers/user-controller.js';

// import middleware
import { authenticateToken } from '../../utils/auth.js';

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authenticateToken, saveDestination);

router.route('/login').post(login);

//router.route('/me').get(authenticateToken, getSingleUser);

router.route('/destinations/:travelId').delete(authenticateToken, deleteDestination);

router.route('/destinations').post(authenticateToken, saveDestination);

export default router;