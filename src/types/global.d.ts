export {};
declare global {
  type Data = Record<string, unknown>;

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  type Recordable<T = any> = Record<string, T>;
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };

  type RequiredPick<T, K extends keyof T> = T & Required<Pick<T, K>>;

  type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };
}
