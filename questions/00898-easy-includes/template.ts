type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer TFirst, ...infer TRest]
  ? Equal<TFirst, U> extends true
    ? true
    : Includes<TRest, U>
  : false
