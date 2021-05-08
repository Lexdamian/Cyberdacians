import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class Banner extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <React.Fragment>
            <div className="main-banner software-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1>Advanced Persistent Protection - Adversary Emulation & Red Teaming tool</h1>
                                        <p>We simulate that find weaknesses in organizations  to become secure in front of complex cyberattacks by strengthening their weak spots.</p>
                                        <Link href="#">
                                            <a className="btn btn-primary">Schedule Demo</a>
                                        </Link>
                                        {/* <Link href="#">
                                            <a
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="video-btn popup-youtube"
                                            >
                                                Product Video
                                                <i className="icofont-play-alt-3"></i>
                                            </a>
                                        </Link> */}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="signup-download ml-5">
                                        <form>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control" placeholder="Enter your name" />
                                            </div>

                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                            </div>

                                            <div className="form-group">
                                                <label>Organisation</label>
                                                <input type="password" className="form-control" placeholder="Enter your organisation" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Send a request</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape"><img src='/images/bg5.png' alt="bg" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>

                <div className="bubble-animate">
                    <div className="circle small square1"></div>
                    <div className="circle small square2"></div>
                    <div className="circle small square3"></div>
                    <div className="circle small square4"></div>
                    <div className="circle small square5"></div>
                    <div className="circle medium square1"></div>
                    <div className="circle medium square2"></div>
                    <div className="circle medium square3"></div>
                    <div className="circle medium square4"></div>
                    <div className="circle medium square5"></div>
                    <div className="circle large square1"></div>
                    <div className="circle large square2"></div>
                    <div className="circle large square3"></div>
                    <div className="circle large square4"></div>
                </div>
            </div>
            <ModalVideo
                channel='youtube'
                isOpen={this.state.isOpen}
                videoId='szuchBiLrEM'
                onClose={() => this.setState({isOpen: false})}
            />
            </React.Fragment>
        );
    }
}

export default Banner;
