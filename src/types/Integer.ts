/** A brand type that represents float numbers. */
type Integer = number & {
  readonly _id: unique symbol;
  readonly _name: 'Integer';
};

export default Integer;
