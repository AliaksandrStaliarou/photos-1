import React from "react";
import {Rating} from './Rating'
import {Label} from './Label'

// <img src={require('./images/shirt1_sm.jpg')} alt=""/>
class PhotoItemSmall extends React.Component {

    render() {
        let item = this.props.data;
        return(
            <div className="wrapper_common">
                <figure className="wrapper_picture" onClick={this.props.onPreviewClick_overlaySwitcher}>
                    <img src={item.image} alt=""/>
                    <figcaption>{item.title}</figcaption>
                </figure>
                <div className="wrapper_rating_label">
                    <Label/>
                    <Rating/>
                </div>
            </div>
        )
    }
}

export { PhotoItemSmall }