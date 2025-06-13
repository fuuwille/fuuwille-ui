import Loadable from "./loadable";

export interface Verifiable<T> extends Loadable<T> {
    verified : boolean;
}