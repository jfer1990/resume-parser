import { Router } from 'express';
import { getTodayRevision, putAssignments } from '../controllers/revisions.js';

const router = Router();

router.get('/assignation-of-today', getTodayRevision);

router.put('/update-revision-today', putAssignments);

export default router;
