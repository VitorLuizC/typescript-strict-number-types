/** A brand type that represents float numbers. */
type Float = number & {
  readonly _id: unique symbol;
  readonly _name: 'Float';
};

export default Float;
