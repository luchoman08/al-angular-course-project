export interface BaseFactory<Class, Interface> {
    defaultValuesObject: Interface;
    make(from: Interface): Class;
    makeMultiple(from: Interface[]): Class[];
}