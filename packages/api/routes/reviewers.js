import { Router } from 'express';
import {
  getReviewer,
  getAllAsigns,
  getCandidates,
  getAll,
  postReviewer,
  putReviewer,
  deleteReviewer,
  getTodayRevision,
} from '../controllers/reviewers.js';
import { check } from 'express-validator';
// import validarCampos from '../middlewares/validar-campos.js'
import { existCandidateEmail } from '../helpers/db-validators.js';

const router = Router();

router.get('/', getReviewer);

router.get('/getAllAsigns', getAllAsigns);

router.get('/getAllAsigns/:id', getCandidates);

router.get('/getTodayCandidates', getTodayRevision);

router.get('/getAll', getAll); // en lugar de all, getAll en todos | en los post agregar la palabra add/ | getTodayAssigns

router.put('/:id', putReviewer);

router.post(
  '/',
  [
    check('email', 'not valid email format').isEmail(),
    check('name', 'name field is mandatory').not().isEmpty(),
    check('email').custom(existCandidateEmail),
  ],
  postReviewer
);

router.delete('/', deleteReviewer);

export default router;
