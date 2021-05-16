import type Float from './types/Float.js';
import type Infinity from './types/Infinity.js';
import type NaN from './types/NaN.js';

declare global {
  function parseFloat(value: unknown, radix?: number): Float | NaN | Infinity;
}
