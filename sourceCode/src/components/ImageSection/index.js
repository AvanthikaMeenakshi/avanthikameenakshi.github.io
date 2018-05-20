import React, { Component } from 'react';

class ImageSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imgUrl = this.props.imageUrl || '/img/homeImg.jpg';
        console.log(imgUrl);
        const style = { backgroundImage: `url(${imgUrl})` }
        return (
            <header className="masthead" style={style}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>Code Radar</h1>
                            <span className="subheading">Coffee. Coding. Cats. And much more.</span>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default ImageSection;