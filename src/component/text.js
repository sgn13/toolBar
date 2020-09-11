import React, { useState, useEffect } from 'react';
import Toolbar from './toolbar'

function Text(props) {
    const [orange, setOrange] = useState({ color: "red", selected: false })
    const [brown, setBrown] = useState({ color: "blue" })
    const [red, setRed] = useState({ color: 'pink' })
    const [purple, setPurple] = useState({ color: 'red' })
    const [blue, setBlue] = useState()

    const storeColor = (color) => {

        setOrange({ color: color.hex })
        setBrown({ color: color.hex })
        setRed({ color: color.hex })
        setPurple({ color: color.hex })
        console.log(color.hex)

    }
    const selectDiv = () => {
        setOrange({ selected: !orange.selected })
    }
    console.log(orange.selected)



    return (
        <div className="main">
            <div className="text-area">
                <div className="orange">
                    {orange.selected ?
                        <h3 style={{ color: orange.color }} onClick={selectDiv}>Make ma orange <span>selected</span></h3>
                        : <h3 onClick={selectDiv}>Make me orange not selected</h3>}

                </div>
                <div className="brown">
                    <h3 style={{ color: brown.color }}>I wanna be brown</h3>
                </div>
                <div className="red">
                    <h3 style={{ color: red.color }}>As red</h3>
                </div>
                <div className="purple">
                    <h3 style={{ color: purple.color }}>I wanna be Purple</h3>
                </div>
                <div className="blue">
                    <h3>Make me blue</h3>
                </div>
                <div className="box1" >

                </div>
                <div className="box1">

                </div>
                <div className="box1">

                </div>

            </div>
            <div className="color-picker">
                <Toolbar storeColor={storeColor} />
            </div>

        </div>)

}

export default Text;