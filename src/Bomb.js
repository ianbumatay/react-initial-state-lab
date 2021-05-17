// your Bomb code here! 

import React, {Component} from 'react' 

export class Bomb extends Component { 


    constructor(props){
        super(props)

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        console.log(this.props.initialCount)
        console.log(this.state.secondsLeft)

        return(
            <div>
                {this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft  + ' seconds left before I go boom!' }
            </div>
        )
    }



} 

export default Bomb
