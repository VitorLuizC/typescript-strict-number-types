import type NaN from './types/NaN.js';

declare global {
  function isNaN(value: number): value is NaN;
}
