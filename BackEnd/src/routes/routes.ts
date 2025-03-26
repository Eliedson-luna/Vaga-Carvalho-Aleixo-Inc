import { Router } from 'express';
import { searchParam } from '../controllers/searchController';

export const router = Router();

router.get('/scrape', searchParam);
