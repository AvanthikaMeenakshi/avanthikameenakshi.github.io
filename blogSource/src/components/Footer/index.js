import React from 'react';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/avanthikameenu?lang=en">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/avanthika.meenakshi">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AvanthikaMeenakshi">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <p className="copyright text-muted">Copyright © Avanthika 2018</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;


