import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
        <Header />
        <Body />
    </Fragment>
  );
}

export default App;
