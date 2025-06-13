import { Value } from "./value";

export interface Loadable<T> extends Value<T> {
    loading : boolean;
}

export default Loadable;