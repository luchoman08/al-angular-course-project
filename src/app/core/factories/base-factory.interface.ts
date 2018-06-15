export interface BaseFactory<T, T2> {
    defaultValuesObject: T2;
    make(from: T2): T;
}