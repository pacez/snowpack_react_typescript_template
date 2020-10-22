import React, { PureComponent, ReactNode } from 'react'
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

interface Props { }
interface State { }

class Header extends PureComponent<Props, State> {

    render(): ReactNode {
        return <div className={styles.header}>
            <div className={styles.logo}><Link to="/">Logo</Link></div>
            <div className={styles.menus}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    }
}

export default Header
