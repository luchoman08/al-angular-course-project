import { BaseFactory } from "@app/core/factories/base-factory.interface";
import { ResultsInterface } from "@app/core/models";

export interface BaseResultsFactoryInterface<Interface, Class> {
    factory: BaseFactory<Interface, Class>;
    make(results: ResultsInterface<Interface>) : ResultsInterface<Class>;
}