import { Router } from 'express';
import sendJson from 'utils/sendJson';

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  sendJson({ res, message: 'Pong', data: process.env.TEST_ENV });
});

export default router;
