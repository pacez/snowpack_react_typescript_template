import React, { PureComponent, ReactNode} from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Header from './components/Header/';
import Footer from './components/Footer/';
import Home from './page/Home';
import About from './page/About/';
import './assets/style/normalize.css';
import './assets/style/style.scss';

interface Props {}
interface State {}

class App extends PureComponent<Props, State> {

  render(): ReactNode {

    return (
      <div className='wrap'>
        <BrowserRouter>
          <Header />
          <div className='main'>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </div>
        </BrowserRouter>
        <Footer />
      </div>  
    )
  } 
}

export default App


