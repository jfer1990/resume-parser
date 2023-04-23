import { Router } from 'express';
import { check } from 'express-validator';
import { deleteCandidate, getAll, getCandidate, postCandidate, putCandidate } from '../controllers/candidates.js';
// import validarCampos from '../middlewares/validar-campos.js'
import { existCandidateEmail } from '../helpers/db-validators.js';

const router = Router();

router.get('/', getCandidate);

router.get('/getAll', getAll);

router.put('/:id', putCandidate);

router.post(
  '/',
  [
    check('email', 'not valid email format').isEmail(),
    check('name', 'name field is mandatory').not().isEmpty(),
    check('email').custom(existCandidateEmail),
  ],
  postCandidate
);

router.delete('/', deleteCandidate);

export default router;
