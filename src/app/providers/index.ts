import compose from 'compose-function';
import { withMaterial } from './with-material';

// add other providers later
export const withProviders = compose(withMaterial);
