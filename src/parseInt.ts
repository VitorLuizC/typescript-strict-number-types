import type Float from './types/Float.js';
import type Integer from './types/Integer.js';
import type NaN from './types/NaN.js';

declare global {
  function parseInt(value: Float, radix?: number): Integer;
  function parseInt(value: unknown, radix?: number): Integer | NaN;
}
