import React from 'react';
import Link from 'next/link';
import ModalImage from 'react-modal-image';

class SaasTools extends React.Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="saas-tools ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Improving the resilience of security ecosystems with real world simulation</h2>
                        <div className="bar"></div>
                        <h3>StageOne is a framework composed of two structures:</h3>
                        <p>An implant designed to be infiltrated in the infrastructure</p>
                        <p>The Command & Control Center which controls the implant</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="tab">
                                <ul className="tabs active">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        <Link href="#">
                                            <a onClick={(e) => e.preventDefault()}>
                                                <i className="icofont-dashboard-web"></i>
                                                <br />
                                                Dashboard
                                            </a>
                                        </Link>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        <Link href="#">
                                            <a onClick={(e) => e.preventDefault()}>
                                                <i className="icofont-inbox"></i>
                                                <br />
                                                Attack Panel
                                            </a>
                                        </Link>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        <Link href="#">
                                            <a onClick={(e) => e.preventDefault()}>
                                                <i className="icofont-ui-calendar"></i>
                                                <br />
                                                Lateral Movement Panel
                                            </a>
                                        </Link>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        <Link href="#">
                                            <a onClick={(e) => e.preventDefault()}>
                                                <i className="icofont-copy-invert"></i>
                                                <br />
                                                Logs Panel
                                            </a>
                                        </Link>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab5')}
                                    >
                                        <Link href="#">
                                            <a onClick={(e) => e.preventDefault()}>
                                                <i className="icofont-wrench"></i>
                                                <br />
                                                Collected Data Panel
                                            </a>
                                        </Link>
                                    </li>

                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab6')}
                                    >
                                        <Link href="#">
                                            <a onClick={(e) => e.preventDefault()}>
                                                <i className="icofont-wrench"></i>
                                                <br />
                                                Campaing Management
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mt-0">
                                                    <h3>Dashboard</h3>
                                                    <p>Stageone dashboard offers a centralized place to see all the computers and the network map of them. The lateral movement procedure is done via this panel by “breaking into a device.”</p>
                                                    {/* <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul> */}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <ModalImage
                                                        small={'/images/dashboard-stageone.png' }
                                                        medium={'/images/dashboard-stageone.png'}
                                                        alt='dashboard-overview'
                                                        hideDownload={true}
                                                        hideZoom={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <ModalImage
                                                        small={'/images/attackpage-stageone.png' }
                                                        medium={'/images/attackpage-stageone.png'}
                                                        alt='attack-page'
                                                        hideDownload={true}
                                                        hideZoom={true}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mb-0">
                                                    <h3>Attack Panel</h3>
                                                    <p>This page offers a comprehensive view over an implant. It displays various general information and configurations and a main view over the recent executed tasks. The collected data panel is at the bottom and offers a great insight into the penetrated device.</p>
                                                    {/* <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mt-0">
                                                    <h3>Lateral Movement Panel - Dark mode</h3>
                                                    <p>The lateral movement popup allows us to move laterally through the network and displays a few options to choose from, such as Credentials and Exploits. After choosing one implant to carry the attack, the penetration is ready to go.</p>
                                                    {/* <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul> */}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <ModalImage
                                                        small={'/images/lateralpanel-stageone-dark.png' }
                                                        medium={'/images/lateralpanel-stageone-dark.png'}
                                                        alt='attack-page'
                                                        hideDownload={true}
                                                        hideZoom={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab4" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <ModalImage
                                                        small={'/images/logs-stageone.png' }
                                                        medium={'/images/logs-stageone.png'}
                                                        alt='logs'
                                                        hideDownload={true}
                                                        hideZoom={true}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mb-0">
                                                    <h3>Logs Panel</h3>
                                                    <p>Logs are always important. StageOne dashboard offers a comprehensive view of what’s going on into the system and keeps track of all the movements of the implant.</p>
                                                    {/* <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab5" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mt-0">
                                                    <h3>Collected Data Panel</h3>
                                                    <p>The collected data page centralizes all the credentials extracted and the keylogging from the systems they were active.</p>
                                                    {/* <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul> */}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <ModalImage
                                                        small={'/images/collected-data-stageone.png' }
                                                        medium={'/images/collected-data-stageone.png'}
                                                        alt='collected-data-overview'
                                                        hideDownload={true}
                                                        hideZoom={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab6" className="tabs_item">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_content mt-0">
                                                    <h3>Campaing Management</h3>
                                                    <p>This is a special page which allows the operator of stageone to configure campaigns and users.</p>
                                                    {/* <ul>
                                                        <li><i className="icofont-ui-check"></i> Creative Design</li>
                                                        <li><i className="icofont-ui-check"></i> Retina Ready</li>
                                                        <li><i className="icofont-ui-check"></i> Modern Design</li>
                                                        <li><i className="icofont-ui-check"></i> Digital Marketing & Branding</li>
                                                    </ul> */}
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <div className="tabs_item_img">
                                                    <ModalImage
                                                        small={'/images/campainmanagement-stageone.png' }
                                                        medium={'/images/campainmanagement-stageone.png'}
                                                        alt='campain management'
                                                        hideDownload={true}
                                                        hideZoom={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1">
                    <img src='/images/shape1.png' alt="img" />
                </div>
                <div className="shape2">
                    <img src='/images/shape2.png' alt="img" />
                </div>
                <div className="shape3">
                    <img src='/images/shape3.png' alt="img" />
                </div>
                <div className="shape6">
                    <img src='/images/shape6.png' alt="img" />
                </div>
                <div className="shape8 rotateme">
                    <img src='/images/shape8.svg' alt="shape" />
                </div>
            </section>
        );
    }
}

export default SaasTools;
