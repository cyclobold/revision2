import React from 'react'

class Greeting extends React.Component{

    constructor(props){
        super(props)

        this.props = props
    }


    render(){
        return <div>{this.props.greeting}</div>

    }


}

export default Greeting