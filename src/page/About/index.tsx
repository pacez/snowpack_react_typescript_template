import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {

    componentDidMount () {
        console.log('about mounted')
    }

    render(): ReactNode {
        return <div>
            About
        </div>
    }
}

export default About
