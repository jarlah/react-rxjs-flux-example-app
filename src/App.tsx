import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-rxjs-flux';
import store, { inc$, dec$, CounterStore } from './store/counter';

interface AppProps {
  number: number;
  inc: () => void;
  dec: () => void;
}

function App(props: AppProps) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.number}</p>
        <p><button onClick={props.inc}>Increase</button><button onClick={props.dec}>Decrease</button></p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


const props = (storeState: CounterStore): AppProps => ({
  number: storeState.count,
  inc: () => inc$.next(),
  dec: () => dec$.next()
});

export default connect(store, props)(App);