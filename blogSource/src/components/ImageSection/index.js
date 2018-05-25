import React, { Component } from 'react';

class ImageSection extends Component {
    render() {
        const imgUrl = this.props.imageUrl || '/img/homeImg.jpg';
        const title = this.props.title || 'Code Radar';
        const desc = this.props.desc || 'Coffee. Coding. Cats. And much more.';
        const style = { backgroundImage: `url(${imgUrl})` }
        return (
            <header className="masthead" style={style}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>{title}</h1>
                            <span className="subheading">{desc}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default ImageSection;