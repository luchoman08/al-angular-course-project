import { BaseFactory } from "@app/core/factories/base-factory.interface";
import { ResultsInterface } from "@app/core/models";
/** Define the base generic results factory */
export interface BaseResultsFactoryInterface<Interface, Class> {
    factory: BaseFactory<Interface, Class>;
    make(results: ResultsInterface<Interface>) : ResultsInterface<Class>;
}