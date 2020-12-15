import React from "react";

class Label extends React.Component {
    state = {
        defaultColor: '#767273',
        colors: ['red', 'green', 'yellow'],
        selectedColors: {
            red: false,
            green: false,
            yellow: false
        }
    };

    toggleColor(color, event) {
        event.stopPropagation();
        const selectedColors = Object.assign({}, this.state.selectedColors); // create a new copy of selected colors
        selectedColors[color] = !selectedColors[color]; // toggle

        this.setState({
            selectedColors: selectedColors
        });
    }

    render() {
        const colorItems = this.state.colors.map(color =>
            <span
                style={
                    { backgroundColor: this.state.selectedColors[color] ? color : this.state.defaultColor }
                }
                onClick={this.toggleColor.bind(this, color)}
            ></span>
        );

        return (
            <div className="labels">
                { colorItems }
            </div>)
    }
};

export { Label }