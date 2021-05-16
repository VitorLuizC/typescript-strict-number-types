/**
 * A higher order type that receives a structural type and a name to create a
 * brand type, an intersection of structural type and the type data.
 */
type Brand<Type, Name extends string> = Type & {
  readonly _id?: unique symbol;
  readonly _name?: Name;
};

export default Brand;
