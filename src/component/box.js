import React, { Component } from 'react'
import Toolbar from './toolbar'

class Box extends Component {
    state = {
        color: ''
    }

    storeColor = (col) => {
        this.setState({
            color: col.hex
        })

    }
    render() {
        return (
            <div className="main">
                <div className="text-area">
                    <div className="orange" style={{ backgroundColor: this.state.color }}>

                        <h3>Make ma orange <span>selected</span></h3>


                    </div>
                    <div className="brown" style={{ backgroundColor: this.state.color }}>
                        <h3 >I wanna be brown</h3>
                    </div>
                    <div className="red" style={{ backgroundColor: this.state.color }}>
                        <h3>As red</h3>
                    </div>
                    <div className="purple">
                        <h3 >I wanna be Purple</h3>
                    </div>
                    <div className="blue">
                        <h3>Make me blue</h3>
                    </div>
                    <div className="boxes">
                        <div className="box1" >
                            <p>box1</p>
                        </div>
                        <div className="box2">

                        </div>
                        <div className="box3">

                        </div>
                    </div>



                </div>
                <div className="color-picker">
                    <Toolbar storeColor={this.storeColor} />
                </div>

            </div>
        )
    }
}
export default Box
