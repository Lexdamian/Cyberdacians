import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <section className="features-area software-features ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Why did we create StageOne?</h2>
                        <div className="bar"></div>
                        <p>Cyber attacks are growing extraordinarily complex and most companies are missing the tools to test if their security can stand up complex attacks.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-lock"></i>
                                </div>
                                <h3>Simulate Advanced Cyber Attacks</h3>
                                <p>Employ in a safe manner Advanced Persistent Threat (APT) techniques in infrastructures to test the response of the security controls.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-heart-eyes"></i>
                                </div>
                                <h3>Find and eliminate vulnerabilities</h3>
                                <p>Identifying breaches in infrastructure that can lead to a cyber attack and offer recommendations on fixing them.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-lock"></i>
                                </div>
                                <h3>Test the effectiveness of the security program</h3>
                                <p>Put to test the quality of your current cybersecurity investments and observe whether funds are well spent.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-camera"></i>
                                </div>
                                <h3>Constantly update the defenses</h3>
                                <p>Test the new cyber attack strategies employed by APTs to check if your infrastructure can be affected by an attack and constantly update configurations to sustain the attacks</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-responsive"></i>
                                </div>
                                <h3>Test the lateral movement in your network</h3>
                                <p>Find the ways attackers can move through your networks in order to be able to restrict and monitor the movements.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon">
                                    <i className="icofont-hand-drag1"></i>
                                </div>
                                <h3>Purple teaming</h3>
                                <p>Maximize the cyber capabilities through coordination between the red team and the blue team</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape7">
                    <img src='/images/shape7.png' alt="shape" />
                </div>
                <div className="shape3">
                    <img src='/images/shape3.png' alt="img" />
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6">
                    <img src='/images/shape6.png' alt="img" />
                </div>
                <div className="shape8 rotateme">
                    <img src='/images/shape8.svg' alt="shape" />
                </div>
                <div className="shape9">
                    <img src='/images/shape9.svg' alt="shape" />
                </div>
                <div className="shape10">
                    <img src='/images/shape10.svg' alt="shape" />
                </div>
                <div className="shape11 rotateme">
                    <img src='/images/shape11.svg' alt="shape" />
                </div>
            </section>
        );
    }
}

export default Features;
