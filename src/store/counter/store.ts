import { createStore } from 'react-rxjs-flux';
import { Observable } from 'rxjs';
import { reducer } from './reducer';
import { CounterStore } from './types';

const initialState: CounterStore = { count: 0 };

const store: Observable<CounterStore> = createStore("example", reducer, initialState);

export default store;