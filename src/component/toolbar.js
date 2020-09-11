import React from 'react';
import { SketchPicker } from 'react-color';

class Toolbar extends React.Component {
    // state = {
    //     background: '#fff',
    // };

    handleChangeComplete = (color) => {
        // this.setState({ background: color.hex });
        this.props.storeColor(color)
    };

    render() {
        return (
            <SketchPicker
                // color={this.state.background}
                onChangeComplete={this.handleChangeComplete}
            />
        );
    }
}
export default Toolbar
