import {FindOperator} from "../FindOperator";

/**
 * Find Options Operator.
 * Example: { someField: Raw([...]) }
 */
<<<<<<< HEAD
export function Raw<T>(value: string|((columnAlias: string) => string)) {
=======
export function Raw<T>(value: string|((columnAlias?: string) => string)): FindOperator<any> {
>>>>>>> remotes/origin/next
    return new FindOperator("raw", value as any, false);
}