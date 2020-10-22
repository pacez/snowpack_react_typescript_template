import React, { PureComponent, ReactNode} from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Header from './components/Header/';
import Footer from './components/Footer/';
import HomePage from './page/Homepage/';
import About from './page/About/';
import styles from  './assets/style/style.module.scss';

interface Props {}
interface State {}

class App extends PureComponent<Props, State> {

  render(): ReactNode {

    return (
      <div className={styles.main}>
        <Header />
        <BrowserRouter>
          <div className={'main'}>
            <div className="menu">
              <Link to="/">Homepage</Link>
              <Link to="/about">About</Link>
            </div>
            <div className="content">
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>  
    )
  } 
}

export default App


