import React, { PureComponent, ReactNode } from 'react'
import styles from './style.module.scss';

interface Props { }
interface State { }

class Footer extends PureComponent<Props, State> {

    render(): ReactNode {
        return <div className={styles.footer}>
           copyright © 2020 | pace_zhong@foxmail.com
        </div>
    }
}

export default Footer
