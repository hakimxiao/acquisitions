import { fetchAllUsers } from '#controllers/users.controllers.js';
import express from 'express';

const router = express.Router();

router.get('/', fetchAllUsers);
router.get('/:id', (req, res) => res.send('Get /users/:id'));
router.put('/:id', (req, res) => res.send('Put /users/:id'));
router.delete('/:id', (req, res) => res.send('Delete /users/:id'));

export default router;