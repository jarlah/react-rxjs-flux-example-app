import { Reducer } from "react-rxjs-flux";
import { merge, Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as actions from './actions';
import { CounterStore } from "./types";

export const reducer: Observable<Reducer<CounterStore>> = merge(
    actions.inc$.pipe(map(() => (state: CounterStore) => ({ ...state, count: state.count + 1 }))), 
    actions.dec$.pipe(map(() => (state: CounterStore) => ({ ...state, count: state.count - 1 })))
);
