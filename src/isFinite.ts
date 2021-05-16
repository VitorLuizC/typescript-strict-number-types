import type Infinity from './types/Infinity.js';
import type NaN from './types/NaN.js';

declare global {
  function isFinite<T extends number>(
    value: T,
  ): value is Exclude<T, Infinity | NaN>;
}
