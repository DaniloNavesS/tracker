import express from 'express';
import sessionRoutes from './routes/sessionRoutes';

const app = express();

app.use(express.json());
app.use('/sessions', sessionRoutes);

export default app;
