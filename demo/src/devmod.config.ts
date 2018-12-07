import { enableDebugMode } from '@devmod/core';
import { environment } from './environments/environment';

if (!environment.production) {
  enableDebugMode(); // Ensures all the decorators do what they should
}
