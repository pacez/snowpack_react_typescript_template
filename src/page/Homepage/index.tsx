import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class Index extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return <div>Homepage</div>
    }
}

export default Index
