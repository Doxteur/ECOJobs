import { Router as router } from 'express';

// Routes
import JobOfferRoute from './JobOfferRoute.js';
import AuthRoutes from './AuthRoutes.js';

// Middleware
import auth from '../middlewares/auth.js';

export default router()
    .get('/', (req, res) => {
        res.json({
            message: 'Welcome to the API'
        });
    })
    .use('/auth', AuthRoutes)
    .use('/job-offer', JobOfferRoute);
    
