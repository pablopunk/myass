type AssertionType = {
  // assert module
  fail: Function
  AssertionError: Function
  ok: Function
  equal: Function
  notEqual: Function
  deepEqual: Function
  notDeepEqual: Function
  deepStrictEqual: Function
  notDeepStrictEqual: Function
  strictEqual: Function
  notStrictEqual: Function
  throws: Function
  rejects: Function
  doesNotThrow: Function
  doesNotReject: Function
  ifError: Function
  strict: Function
  // custom methods
  is: (value1: any, value2: any) => void
  true: (value1: any) => void
  false: (value1: any) => void
  regex: (value1: RegExp | string, value2: RegExp | string) => void
}

declare function MyAss(
  name: string,
  fn: (t: AssertionType) => Promise<void>
): any

export = MyAss
