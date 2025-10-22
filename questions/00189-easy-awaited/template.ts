type MyAwaited<T> = T extends { then: (onfulfilled: (arg: infer R) => any) => any }
  ? MyAwaited<R>
  : T
