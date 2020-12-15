import React from "react";

class Rating extends React.Component {
    state = {
        value: 0,
        ratingItems: [1, 2, 3, 4, 5]
    };

    handleValueChange(value, event) {
        event.preventDefault();
        this.setState({value: value})
    }

    render() {
        const ratingItems = this.state.ratingItems.map(value =>
            <span
                className={this.state.value >= value ? 'active' : ''}
                onClick={this.handleValueChange.bind(this, value)}
            ></span>
        );

        return (
            <div className="rating">
                { ratingItems }
            </div>)
    }
};




export { Rating }