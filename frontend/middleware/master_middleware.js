import { applyMiddleware } from 'redux';
import choreMiddleware from './chore_middleware';

export default applyMiddleware(choreMiddleware);
