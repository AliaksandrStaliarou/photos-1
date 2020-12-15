import React, { Component } from 'react';
import './App.css';
import photos from './photosData/photos'
import { PhotoItemSmall } from './components/PhotoItemSmall';



class App extends Component {
    state = {
        class: '',
        previewData: null,
    };

    onPreviewClick_overlaySwitcher = (data) => {
        this.setState({
            previewData: data,
            class: 'overlay',
        })
    };

    closePreview() {
        this.setState({previewData: null});
    }

    render() {
        let photosList = photos.map(item =>
            <PhotoItemSmall data={item}
                            key={item.id}
                            onPreviewClick_overlaySwitcher={this.onPreviewClick_overlaySwitcher.bind(this, item)}/>);

        return (
            <React.Fragment>
                {this.state.previewData && <Preview
                    data={this.state.previewData}
                    onClose={this.closePreview.bind(this)}/>}
                <div className="wrapper">
                    {photosList}
                    {/*{this.state.previewData && <Preview
                        data={this.state.previewData}
                        onClose={this.closePreview.bind(this)}/>}*/}
                </div>
            </React.Fragment>
        );
    }

}


const Preview = (props) => {
    let item = props.data;
    return <div className="overlay">
        <figure>
            <img src={item.bigImage} alt="" onClick={props.onClose}/>
        </figure>
    </div>;
};


export default App;
