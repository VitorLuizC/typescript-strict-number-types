/** A brand type that represents the `NaN` value. */
type NaN = number & {
  readonly _id: unique symbol;
  readonly _name: 'NaN';
};

export default NaN;
