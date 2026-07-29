import { signIn, signOut, signUp } from '#controllers/auth.controllers.js';
import express from 'express';

const router = express();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/sign-out', signOut);

export default router;
