declare module "lodash" {
  function head<T>(array: T[]): T | undefined;
  function hasIn(object: {}, key: string): boolean;
  function isBoolean(value: any): boolean;
  function toString(value: any): string;
  function split(
    string: string,
    separator: RegExp | string,
    limit?: number
  ): string[];
  function hasPath(object: object, path: any[] | string): boolean;
  function filter<T>(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): T[];
  function every<T>(
    array: T[],
    predicate: (value: T, index: number, array: T[]) => boolean
  ): boolean;
  function map<T, U>(
    array: T[],
    iteratee: (value: T, index: number, array: T[]) => U
  ): U[];
}
