/* eslint-disable @next/next/no-sync-scripts */

import Head from 'next/head'
import Script from 'next/script'
import React from 'react'
import CountUp from "react-countup";



const nextjsapp = () => {

    const onClick = () => {
        //get file content
        fetch("dummy.pdf").then((res) => {
            res.blob().then((blob) => {
                // Creating downloadable file object
                const fileURL = window.URL.createObjectURL(blob);
                let ele = document.createElement("a");
                ele.href = fileURL;
                ele.download = "dummy.pdf";
                ele.click();
            });
        });
    };


    const startNumber = 0;
    const endNumber = 10000;
    const duration = 2;
    const separator = ",";



    return (
        <div>

            <Head>
                {/* <!-- Required meta tags --> */}
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {/* <!-- Bootstrap CSS --> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
                    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
                <link rel="stylesheet" type="text/css" href="assets/css/index.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />

                <title>Kashmir Tour & Travel</title>
                {/* <!-- owl-carousel --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
                    integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
                    integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer" />

                <script src='assets/javascript/rk.js'></script>
                {/* <!-- owl.carousel --> */}
            </Head>
            <div>
                {/* <!-- begin rect modal --> */}
                {/* <!-- <div className="loading"> -->
                                        <!-- <div className="rect">
                                            <div className="rect1"></div>
                                            <div className="rect2"></div>
                                            <div className="rect3"></div>
                                            <div className="rect4"></div>
                                            <div className="rect5"></div>
                                        </div> -->
                                        <!-- </div> -->
                                    <!-- begin rect modal --> */}
                <header>
                    <nav className="navbar navbar-expand-lg bg-none px-5">
                        <a className="navbar-brand" href="#">
                            <div className="logo-wraper">
                                <img className="img-fluid" src="../Tripocio_Logo.png" alt="Image" />
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link px-4" href="#">Explore<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#">Destinations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#">Flights</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link px-4" href="#">Reviews</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="banner-left">
                                    <h1 className="banner-left-heading">Kashmir Tour Package</h1>
                                    <h3 className="Package-pricetag">Start INR 15,000</h3>
                                    <ul className="Package-planlist">
                                        <li>-Sightseeing included</li>
                                        <li>-Meal included</li>
                                        <li>-Driver Tips included</li>
                                        <li>-Professional & Knowledgeable Tour manager</li>
                                    </ul>
                                   <a href="tel:7905475322"><button className="btn callnow-btn">Call Now</button></a>
                                    <a href="https://wa.me"><button className="btn whatsapp-btn">Whatsapp Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Package">
                    <div className="container">
                        {/* <!-- ---------------------------------------Banner-bottom  --> */}
                        <div className="banner-bottom">
                            <button className="btn enqurybtn">Enquery Form</button>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="banner-bottom-inner">
                                        <div className="row no-gutters">
                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                <div className="enquiry-wraper">
                                                    <h6>Name</h6>
                                                    <h5 className="username">Anuv Gupta</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                <div className="enquiry-wraper">
                                                    <h6>Contact Number</h6>
                                                    <h5 className="usercontact">9876543210</h5>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                <div className="enquiry-wraper">
                                                    <h6>No.of passengers</h6>
                                                    <h5 className="pasenger-quentity">2 adults</h5>
                                                </div>
                                            </div>

                                            <div className="col-lg-2 col-md-6 col-sm-12">
                                                <div className="enquiry-wraper">
                                                    <h6>Date of Journey</h6>
                                                    <h5 className="jurney-date">May 8th,2021</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12">
                                                <div className="enquiry-wraper last-box">
                                                    <div>
                                                        <h6>Want to say Something ?</h6>
                                                        <h5 className="message">i really enjoyed your package</h5>
                                                    </div>
                                                    <div className="text-center">
                                                        <button className="btn Letsgo">{`Let's go!`}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ---------------------------------------Banner-bottom  --> */}
                        <div className="package-inner">
                            <h3 className="heading">Our Package</h3>
                            {/* <!-- <div className="package-main"> --> */}
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="package-card-wraper">
                                        <div className="package-card">
                                            <div className="package-card-img">
                                                <img src="../packagecard1.png" className="img-fluid" alt="Image" />
                                                <div className="image-overlay">
                                                    <div className="overlay-inner">
                                                        <h3>Fascinating Kashmir</h3>
                                                        <div>
                                                            <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                                                            <span>15,050</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ribben">
                                                    <svg className="Path_78000" viewBox="-4.178 1619.866 122 42.3">
                                                        <path id="Path_78000" d="M -4.037828922271729 1662.166015625 C -4.037828922271729 1662.166015625 -4.352708339691162 1617.378173828125 -4.037828922271729 1619.974609375 C -3.722949743270874 1622.570922851562 117.8222274780273 1619.974609375 117.8222274780273 1619.974609375 L 104.5971145629883 1642.692993164062 L 117.8222274780273 1662.166015625 L -4.037828922271729 1662.166015625 Z">
                                                        </path>
                                                    </svg>
                                                    <span>60%<small>Off</small></span>
                                                </div>

                                                <div className="card-heart-ico">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="offer-circle clipped">
                                                    <h3>Special offer</h3>
                                                </div>

                                            </div>
                                            <div className="package-card-body">
                                                <p>Gulmerg is very beautiful hill Station in Kashmir. In winter is covered by Snow. Gondola ride is
                                                    very exciting experience.</p>
                                                <ul>
                                                    <li className="icon-wraper">
                                                        <div className="icon-box">
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../hotel.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../airport.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../binocula.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="jurneydetail">
                                                            <span className="days">4 Nights</span><span className="days">5 Days</span>
                                                        </div>
                                                    </li>
                                                    <li className="card-btn-wraper">
                                                        <button type="button" className="btn enquirenow">Enquire Now</button>
                                                        <button type="button" className="btn itinerary" onClick={onClick}>Download Free Itinerary</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="package-card-wraper">
                                        <div className="package-card">
                                            <div className="package-card-img">
                                                <img src="../packagecard2.png" className="img-fluid" alt="Image" />
                                                <div className="image-overlay">
                                                    <div className="overlay-inner">
                                                        <h3>Heavenly Kashmir</h3>
                                                        <div>
                                                            <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                                                            <span>19,906</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ribben">
                                                    <svg className="Path_78000" viewBox="-4.178 1619.866 122 42.3">
                                                        <path id="Path_78000" d="M -4.037828922271729 1662.166015625 C -4.037828922271729 1662.166015625 -4.352708339691162 1617.378173828125 -4.037828922271729 1619.974609375 C -3.722949743270874 1622.570922851562 117.8222274780273 1619.974609375 117.8222274780273 1619.974609375 L 104.5971145629883 1642.692993164062 L 117.8222274780273 1662.166015625 L -4.037828922271729 1662.166015625 Z">
                                                        </path>
                                                    </svg>
                                                    <span>55%<small>Off</small></span>
                                                </div>

                                                <div className="card-heart-ico">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="offer-circle clipped">
                                                    <h3>Special Offer</h3>
                                                </div>

                                            </div>
                                            <div className="package-card-body">
                                                <p>Book Heavenly Kashmir With Pahalgam for extraordinary experience with our expert team.</p>
                                                <ul>
                                                    <li className="icon-wraper">
                                                        <div className="icon-box">
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../hotel.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../airport.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../binocula.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="jurneydetail">
                                                            <span className="days">4 Nights</span><span className="days">5 Days</span>
                                                        </div>
                                                    </li>
                                                    <li className="card-btn-wraper">
                                                        <button type="button" className="btn enquirenow">Enquire Now</button>
                                                        <button type="button" className="btn itinerary" onClick={onClick}>Download Free Itinerary</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="package-card-wraper">
                                        <div className="package-card">
                                            <div className="package-card-img">
                                                <img src="../packagecard3.png" className="img-fluid" alt="Image" />
                                                <div className="image-overlay">
                                                    <div className="overlay-inner">
                                                        <h3>Glimpses Of Kashmir Valley</h3>
                                                        <div>
                                                            <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                                                            <span>23,700</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ribben">
                                                    <svg className="Path_78000" viewBox="-4.178 1619.866 122 42.3">
                                                        <path id="Path_78000" d="M -4.037828922271729 1662.166015625 C -4.037828922271729 1662.166015625 -4.352708339691162 1617.378173828125 -4.037828922271729 1619.974609375 C -3.722949743270874 1622.570922851562 117.8222274780273 1619.974609375 117.8222274780273 1619.974609375 L 104.5971145629883 1642.692993164062 L 117.8222274780273 1662.166015625 L -4.037828922271729 1662.166015625 Z">
                                                        </path>
                                                    </svg>
                                                    <span>40%<small>Off</small></span>
                                                </div>

                                                <div className="card-heart-ico">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="offer-circle clipped">
                                                    <h3>Special offer</h3>
                                                </div>

                                            </div>
                                            <div className="package-card-body">
                                                <p>In this tour, you will be exploring the most beautiful places and valleys such as Srinagar, Pahalgam valley and many more.</p>
                                                <ul>
                                                    <li className="icon-wraper">
                                                        <div className="icon-box">
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../hotel.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../airport.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../binocula.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="jurneydetail">
                                                            <span className="days">6 Nights</span><span className="days">7 Days</span>
                                                        </div>
                                                    </li>
                                                    <li className="card-btn-wraper">
                                                        <button type="button" className="btn enquirenow">Enquire Now</button>
                                                        <button type="button" className="btn itinerary" onClick={onClick} >Download Free Itinerary</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="package-card-wraper">
                                        <div className="package-card">
                                            <div className="package-card-img">
                                                <img src="../packagecard4.png" className="img-fluid" alt="Image" />
                                                <div className="image-overlay">
                                                    <div className="overlay-inner">
                                                        <h3>Honeymoon in Kashmir</h3>
                                                        <div>
                                                            <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                                                            <span>19,800</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ribben">
                                                    <svg className="Path_78000" viewBox="-4.178 1619.866 122 42.3">
                                                        <path id="Path_78000" d="M -4.037828922271729 1662.166015625 C -4.037828922271729 1662.166015625 -4.352708339691162 1617.378173828125 -4.037828922271729 1619.974609375 C -3.722949743270874 1622.570922851562 117.8222274780273 1619.974609375 117.8222274780273 1619.974609375 L 104.5971145629883 1642.692993164062 L 117.8222274780273 1662.166015625 L -4.037828922271729 1662.166015625 Z">
                                                        </path>
                                                    </svg>
                                                    <span>27%<small>Off</small></span>
                                                </div>

                                                <div className="card-heart-ico">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="offer-circle clipped">
                                                    <h3>Special offer</h3>
                                                </div>

                                            </div>
                                            <div className="package-card-body">
                                                <p>Book Heavenly Kashmir With Pahalgam for extraordinary experience with our expert team.</p>
                                                <ul>
                                                    <li className="icon-wraper">
                                                        <div className="icon-box">
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../hotel.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../airport.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../binocula.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="jurneydetail">
                                                            <span className="days">6 Nights</span><span className="days">7 Days</span>
                                                        </div>
                                                    </li>
                                                    <li className="card-btn-wraper">
                                                        <button type="button" className="btn enquirenow">Enquire Now</button>
                                                        <button type="button" className="btn itinerary" onClick={onClick}>Download Free Itinerary</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="package-card-wraper">
                                        <div className="package-card">
                                            <div className="package-card-img">
                                                <img src="../packagecard5.png" className="img-fluid" alt="Image" />
                                                <div className="image-overlay">
                                                    <div className="overlay-inner">
                                                        <h3>Stunning Kashmir </h3>
                                                        <div>
                                                            <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                                                            <span>16,600</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ribben">
                                                    <svg className="Path_78000" viewBox="-4.178 1619.866 122 42.3">
                                                        <path id="Path_78000" d="M -4.037828922271729 1662.166015625 C -4.037828922271729 1662.166015625 -4.352708339691162 1617.378173828125 -4.037828922271729 1619.974609375 C -3.722949743270874 1622.570922851562 117.8222274780273 1619.974609375 117.8222274780273 1619.974609375 L 104.5971145629883 1642.692993164062 L 117.8222274780273 1662.166015625 L -4.037828922271729 1662.166015625 Z">
                                                        </path>
                                                    </svg>
                                                    <span>27%<small>Off</small></span>
                                                </div>

                                                <div className="card-heart-ico">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="offer-circle clipped">
                                                    <h3>Special offer</h3>
                                                </div>

                                            </div>
                                            <div className="package-card-body">
                                                <p>The top attractions to visit in Sonamarg are: Zojila Pass, Thajiwas Glacier, Gangabal Lake, Gadsar Lake, Vishansar Lake so on</p>
                                                <ul>
                                                    <li className="icon-wraper">
                                                        <div className="icon-box">
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../hotel.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../airport.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../binocula.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="jurneydetail">
                                                            <span className="days">6 Nights</span><span className="days">7 Days</span>
                                                        </div>
                                                    </li>
                                                    <li className="card-btn-wraper">
                                                        <button type="button" className="btn enquirenow">Enquire Now</button>
                                                        <button type="button" className="btn itinerary" onClick={onClick}>Download Free Itinerary</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="package-card-wraper">
                                        <div className="package-card">
                                            <div className="package-card-img">
                                                <img src="../packagecard5.png" className="img-fluid" alt="Image" />
                                                <div className="image-overlay">
                                                    <div className="overlay-inner">
                                                        <h3>Kashmir 6</h3>
                                                        <div>
                                                            <span><i className="fa fa-inr" aria-hidden="true"></i></span>
                                                            <span>38,800</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ribben">
                                                    <svg className="Path_78000" viewBox="-4.178 1619.866 122 42.3">
                                                        <path id="Path_78000" d="M -4.037828922271729 1662.166015625 C -4.037828922271729 1662.166015625 -4.352708339691162 1617.378173828125 -4.037828922271729 1619.974609375 C -3.722949743270874 1622.570922851562 117.8222274780273 1619.974609375 117.8222274780273 1619.974609375 L 104.5971145629883 1642.692993164062 L 117.8222274780273 1662.166015625 L -4.037828922271729 1662.166015625 Z">
                                                        </path>
                                                    </svg>
                                                    <span>15%<small>Off</small></span>
                                                </div>

                                                <div className="card-heart-ico">
                                                    <i className="fa fa-heart"></i>
                                                </div>
                                                <div className="offer-circle clipped">
                                                    <h3>Special offer</h3>
                                                </div>

                                            </div>
                                            <div className="package-card-body">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nemo? Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <ul>
                                                    <li className="icon-wraper">
                                                        <div className="icon-box">
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../hotel.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../airport.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../binocula.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                            <div className="package-ico">
                                                                <img className="img-fluid" src="../24hour.png" alt="Image" />
                                                            </div>
                                                        </div>
                                                        <div className="jurneydetail">
                                                            <span className="days">5 Nights</span><span className="days">6 Days</span>
                                                        </div>
                                                    </li>
                                                    <li className="card-btn-wraper">
                                                        <button type="button" className="btn enquirenow">Enquire Now</button>
                                                        <button type="button" className="btn itinerary" onClick={onClick}>Download Free Itinerary</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- </div> --> */}
                        </div>
                    </div>
                </section>
                <section className="visit">
                    <div className="container">
                        <div className="visit-inner py-5">
                            <h3 className="heading">Things To Know Before You</h3>
                            <h3 className="heading">Visit Kashmir</h3>
                            <div className="visit-card-container pt-5">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="visit-card">
                                            <div className="row">
                                                <div className="col-lg-7 col-md-10 col-sm-12">
                                                    <div className="visit-card-left">
                                                        <h3>Sightseeing</h3>
                                                        <p>The Kashmir region is beutiful end enthralling . Some of faous attractions hear are The Top
                                                            attractions to Visit in Kashmir are:</p>
                                                        <ul>
                                                            <li>Gulmarg</li>
                                                            <li>Shikara ride in Dal Lake</li>
                                                            <li>Pahalgam</li>
                                                            <li>Aru</li>
                                                            <li>Chandanwadi</li>
                                                            <li>Betab Valley</li>
                                                            <li>AWantipura Ruins</li>
                                                            <li>Mughal Gardens</li>
                                                            <li>Sonmarg</li>
                                                            <li>Pahalgam</li>
                                                            <li>Awantipura Ruins</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-10 col-sm-12">
                                                    <div className="visit-card-right">
                                                        <img className="img-fluid" src="../Rectangle_16.png" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="visit-card">
                                            <div className="row">
                                                <div className="col-lg-5 col-md-10 col-sm-12">
                                                    <div className="visit-card-right">
                                                        <img className="img-fluid" src="../Rectangle_16_fh.png" alt="Image" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-10 col-sm-12">
                                                    <div className="visit-card-left">
                                                        <h3>Best Hotels</h3>
                                                        <p>We have research and compiled a list of the top hotels in kashmir that offer excellent services
                                                            and amenities.popular luxury and budget hotels in kashmir include:</p>
                                                        <ul>
                                                            <li>Four Point Sheraton</li>
                                                            <li>City Grace</li>
                                                            <li>Royal Bahar</li>
                                                            <li>Grand Malaor</li>
                                                            <li>City Grace</li>
                                                            <li>Royal Bahar</li>
                                                            <li>{`Queen's Park`}</li>
                                                            <li>Chinar Resort and Spa</li>
                                                            <li>Royal Hilton</li>
                                                            <li>Royal Park</li>
                                                            <li>Rose Wood</li>
                                                            <li>Vintage</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-10 col-sm-12">
                                        <div className="visit-card">
                                            <div className="row">
                                                <div className="col-lg-7 col-md-6 col-sm-12">
                                                    <div className="visit-card-left py-5">
                                                        <h3>Shikara Houseboat</h3>
                                                        <p>Small,flat-bottomed wooden boats Called shikaras,also reffered to as kashmiri gondolas ,are
                                                            floating houses that are anchored along the blanks of some of the most beautiful lakes.The
                                                            Shikara is the most famous in kashmir .it is a unique boat ride in famous Dal lake and Nigeen
                                                            lake in srinagar. </p>
                                                        <ul>
                                                            <li>Young Shahzada Houseboat</li>
                                                            <li>Peacock Houseboats</li>
                                                            <li>Merlin Group of Houseboats</li>
                                                            <li>Golden Flower Heritage Houseboat</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-10 col-sm-12">
                                                    <div className="visit-card-right">
                                                        <img className="img-fluid" src="../Rectangle_16_fg.png" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="talk">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="talk-main">
                                    <div className="talk-box">
                                        <div className="talk-box-text">
                                            <h2>Talk to a Kashmir destination expert now!</h2>
                                            <button className="btn">Whatsapp Now</button>
                                            {/* <!-- <div id="Mask_Group">
                                                                    <img id="Rectangle_154" src="../Rectangle_154.png" srcset="../Rectangle_154.png 1x">
                                                                </div> --> */}
                                        </div>
                                    </div>
                                    <div className="talk-logo-round">
                                        <div className="talk-logo">
                                            <img src="../whattsapp.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                    {/* <!-- <div className="talk-left-obje">
                                                            <img src="../Rectangle_154.png" className="img-fluid" alt="Image">
                                                        </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recent">
                    <div className="container">
                        <div className="recent-inner">
                            <h3 className="heading">Our Recent Travellers</h3>
                            <div className="recent-card-container">
                                {/* <div className="owl-carousel owl-theme">
                                                        <div className="item">
                                                            <div className="recent-card-warper">
                                                                <div className="recent-card">
                                                                    <img className="img-fluid" src="../recent-traveler1.png" alt="Image"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="recent-card-warper">
                                                                <div className="recent-card">
                                                                    <img className="img-fluid" src="../recent-traveler2.png" alt="Image"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="recent-card-warper">
                                                                <div className="recent-card">
                                                                    <img className="img-fluid" src="../recent-traveler3.png" alt="Image"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="recent-card-warper">
                                                                <div className="recent-card">
                                                                    <img className="img-fluid" src="../recent-traveler4.png" alt="Image"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                <h1>
                                    <div className="row large">
                                        <div className="imagegroup" style={{ border: '2px solid white' }}>
                                            <img src="../recent-traveler1.png" />
                                            <img src="../recent-traveler2.png" />
                                            <img src="../recent-traveler3.png" />
                                            <img src="../recent-traveler4.png" />
                                        </div>
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ebook">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="ebook-inner">
                                    <div className="ebook-container">
                                        <div className="ebook-text">
                                            <h3 className="heading">Download free Kashmir Destinations E-Book</h3>
                                            {/* <!-- <h3 className="heading"></h3> --> */}
                                            <button className="btn">Download Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="awards">
                    <div className="container">
                        <h3 className="heading">Our Awards & Accolades</h3>
                        <div className="row">
                            <div className="col-12">
                                <div className="awards-inner">
                                    <div className="award-main">
                                        <div className="award-box-wraper">
                                            <div className="award-box">
                                                <img src="../Untitled-1-01.png" alt="Image" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="award-box-wraper">
                                            <div className="award-box">
                                                <img src="../Untitled-1-02.png" alt="Image" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="award-box-wraper">
                                            <div className="award-box">
                                                <img src="../Untitled-1-03.png" alt="Image" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="award-box-wraper">
                                            <div className="award-box">
                                                <img src="../Untitled-1-04.png" alt="Image" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="award-box-wraper">
                                            <div className="award-box">
                                                <img src="../Untitled-1-05.png" alt="Image" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="membership">
                    <div className="container">
                        <h3 className="heading">Our Membership</h3>
                        <div className="row">
                            <div className="col-12">
                                <div className="membership-inner">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="membership-box-wraper">
                                                <div className="membership-box">
                                                    <img src="../Untitled-2-01.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="membership-box-wraper">
                                                <div className="membership-box">
                                                    <img src="../Untitled-2-02.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="membership-box-wraper">
                                                <div className="membership-box">
                                                    <img src="../Untitled-2-03.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                            <div className="membership-box-wraper">
                                                <div className="membership-box">
                                                    <img src="../Untitled-2-04.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="choose-us">
                    <div className="container">
                        <h3 className="heading text-white">Why Choose Us</h3>
                        <div className="choose-us-main">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="choose-us-inner">
                                        <div className="choose-us-card">
                                            <div className="choose-us-card-ico">
                                                <div className="icon-box" style={{ backgroundColor: 'rgb(127 209 155)' }}>
                                                    <img src="../choose-img6.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="choose-us-card-text">
                                                <div className="chooseus-heading">
                                                    <h3>Unexplored destination</h3>
                                                </div>
                                                <p>We provide packages of unexplored destination so as to provide unique travel experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="choose-us-inner">
                                        <div className="choose-us-card">
                                            <div className="choose-us-card-ico">
                                                <div className="icon-box" style={{ backgroundColor: 'rgb(236 219 132)' }}>
                                                    <img src="../choose-img5.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="choose-us-card-text">
                                                <div className="chooseus-heading">
                                                    <h3>Value</h3>
                                                </div>
                                                <p>We maximise the value of your travel spend by providing the cost as per your need on both Domestic
                                                    and International tour packages.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="choose-us-inner">
                                        <div className="choose-us-card">
                                            <div className="choose-us-card-ico">
                                                <div className="icon-box" style={{ backgroundColor: 'rgb(242 144 117)' }}>
                                                    <img src="../choose-img4.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="choose-us-card-text">
                                                <div className="chooseus-heading">
                                                    <h3>Best Price Guarantee</h3>
                                                </div>
                                                <p>We provide packages of unexplored destination so as to provide unique travel experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="choose-us-inner">
                                        <div className="choose-us-card">
                                            <div className="choose-us-card-ico">
                                                <div className="icon-box" style={{ backgroundColor: 'rgba(125,160,221,1)' }}>
                                                    <img src="../choose-img3.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="choose-us-card-text">
                                                <div className="chooseus-heading">
                                                    <h3>24/7 Support</h3>
                                                </div>
                                                <p>Carnival team support is available round the clock while you are travelling in any part of the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="choose-us-inner">
                                        <div className="choose-us-card">
                                            <div className="choose-us-card-ico">
                                                <div className="icon-box " style={{ backgroundColor: 'rgba(241,117,196,1)' }}>
                                                    <img src="../choose-img1.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="choose-us-card-text">
                                                <div className="chooseus-heading">
                                                    <h3>Lighting Fast Response</h3>
                                                </div>
                                                <p>Our professional tour agents provides fast response to all your queries in no time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="choose-us-inner">
                                        <div className="choose-us-card">
                                            <div className="choose-us-card-ico">
                                                <div className="icon-box" style={{ backgroundColor: 'rgba(63,225,225,1);' }}>
                                                    <img src="../choose-img2.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="choose-us-card-text">
                                                <div className="chooseus-heading">
                                                    <h3>Happiness Guaranteed</h3>
                                                </div>
                                                <p>With TripOcio we guarantee that your travel memories will last longer.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="row">
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="choose-us-inner">
                                                            <div className="choose-us-card">
                                                                <div className="choose-us-card-ico">
                                                                    <div className="icon-box" style={{backgroundColor:'rgb(127 209 155);">'}}                                                                       <img src="../choose-img6.png" alt="Image" className="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div className="choose-us-card-text">
                                                                    <h3>Unexplored destination</h3>
                                                                    <p>We provide packages of unexplored destination so as to provide unique travel experience.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="choose-us-inner">
                                                            <div className="choose-us-card">
                                                                <div className="choose-us-card-ico">
                                                                    <div className="icon-box" style={{backgroundColor:'rgb(236 219 132)">'}}                                                                      <img src="../choose-img5.png" alt="Image" className="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div className="choose-us-card-text">
                                                                    <h3>Value</h3>
                                                                    <p>We maximise the value of your travel spend by providing the cost as per your need on both Domestic
                                                                        and International tour packages.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="choose-us-inner">
                                                            <div className="choose-us-card">
                                                                <div className="choose-us-card-ico">
                                                                    <div className="icon-box" style={{backgroundColor:' rgb(242 144 117);"'}}                                                                        <img src="../choose-img4.png" alt="Image" className="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div className="choose-us-card-text">
                                                                    <h3>Best Price Guarantee</h3>
                                                                    <p>We provide packages of unexplored destination so as to provide unique travel experience.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="choose-us-inner">
                                                            <div className="choose-us-card">
                                                                <div className="choose-us-card-ico">
                                                                    <div className="icon-box" style={{backgroundColor:'rgba(125,160,221,1)'}}>
                                                                        <img src="../choose-img3.png" alt="Image" className="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div className="choose-us-card-text">
                                                                    <h3>24/7 Support</h3>
                                                                    <p>Carnival team support is available round the clock while you are travelling in any part of the world.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="choose-us-inner">
                                                            <div className="choose-us-card">
                                                                <div className="choose-us-card-ico">
                                                                    <div className="icon-box " style={{backgroundColor:'rgba(241,117,196,1)'}}>
                                                                        <img src="../choose-img1.png" alt="Image" className="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div className="choose-us-card-text">
                                                                    <h3>Lighting Fast Response</h3>
                                                                    <p>Our professional tour agents provides fast response to all your queries in no time.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="choose-us-inner">
                                                            <div className="choose-us-card">
                                                                <div className="choose-us-card-ico">
                                                                    <div className="icon-box" style={{backgroundColor:'rgba(63,225,225,1);'}}
                                                                        <img src="../choose-img2.png" alt="Image" className="img-fluid">
                                                                    </div>
                                                                </div>
                                                                <div className="choose-us-card-text">
                                                                    <h3>Happiness Guaranteed</h3>
                                                                    <p>With TripOcio we guarantee that your travel memories will last longer.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> --> */}
                        </div>
                    </div>
                </section>
                <section className="testimonial">
                    <div className="container">
                        <h3 className="heading">Happy Customers</h3>
                        <div className="testimonial-main">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="testimonial-inner">
                                        <div className="testmonial-card">
                                            <div className="testmonial-card-text">
                                                <div>
                                                    <i className="fa fa-quote-right" style={{ color: 'red' }}></i>
                                                </div>
                                                <div>
                                                    <p>Very Well planned & executed trip to kashmir by team.Quite professions trip was exaxtly what we
                                                        dilscussed while planning .At Kashmir also Local Team was excellent and cooperative .Nice
                                                        Experience</p>
                                                    <div className="userdata">
                                                        <span className="userimg">
                                                            <img src="../Ellipse_24@2x.png" alt="image" />
                                                        </span>
                                                        <span className="userabout">
                                                            <h5>sara Sharma</h5>
                                                            <p>CEO</p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="testimonial-inner">
                                        <div className="testmonial-card">
                                            <div className="testmonial-card-text">
                                                <div>
                                                    <i className="fa fa-quote-right" style={{ color: 'red' }}></i>
                                                </div>
                                                <div>
                                                    <p>Very Well planned & executed trip to kashmir by team.Quite professions trip was exaxtly what we
                                                        dilscussed while planning .At Kashmir also Local Team was excellent and cooperative .Nice
                                                        Experience</p>
                                                    <div className="userdata">
                                                        <span className="userimg">
                                                            <img src="../Ellipse_24@2x.png" alt="image" />
                                                        </span>
                                                        <span className="userabout">
                                                            <h5>sara Sharma</h5>
                                                            <p>Director</p>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- start count stats --> */}
                <section id="counter-stats" className="wow fadeInRight counter" data-wow-duration="1.4s">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 stats">
                                <div className="counter-box py-3">
                                    <div className="counter-ico-wraper">
                                        <div className="counter-ico">
                                            <img src="../airplane_1.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="counter-text">
                                        <CountUp start={startNumber} end={endNumber} />
                                        <h5>Flight Booking</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 stats">
                                <div className="counter-box py-3">
                                    <div className="counter-ico-wraper">
                                        <div className="counter-ico">
                                            <img src="../tourism.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="counter-text">
                                        <CountUp start={10} end={200} decimal="," />
                                        <h5>Amazing Tour</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 stats">
                                <div className="counter-box py-3">
                                    <div className="counter-ico-wraper">
                                        <div className="counter-ico">
                                            <img src="../hotel.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="counter-text">
                                        <CountUp start={0} end={5000} decimal="," />
                                        <h5>Hotel Booking</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 stats">
                                <div className="counter-box py-3">
                                    <div className="counter-ico-wraper">
                                        <div className="counter-ico">
                                            <img src="../costumer.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="counter-text">
                                        <CountUp start={10} end={3000} decimal="," />
                                        <h5>Happy Clients</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </section>
                {/* <!-- end cont stats --> */}
                <section className="blog">
                    <div className="container">
                        <h3 className="heading">Blogs</h3>
                        <div className="blog-main py-3">
                            <div className="row">
                                <div className="col-lg-7 col-md-10 col-sm-12">
                                    <div className="blog-left">
                                        <div className="blog-card">
                                            <div className="blog-card-img">
                                                <img src="../blog1croped.png" className="img-fluid" alt="image" />
                                                <div className="blog-card-text">
                                                    <h5>The Ultimate Guide</h5>
                                                    <h5>to Climbing</h5>
                                                    <h5>Mount</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-10 col-sm-12">
                                    <div className="blog-right">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="blog-right-inner">
                                                    <div className="blog-card">
                                                        <div className="blog-card-img">
                                                            <img src="../blog2croped.png" className="img-fluid" alt="image" />
                                                            <div className="blog-card-text">
                                                                <h5>12 Things i wouldd Tell Any </h5>
                                                                <h5>New Traveler</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="blog-right-inner">
                                                    <div className="blog-card">
                                                        <div className="blog-card-img">
                                                            <img src="../blog3croped.png" className="img-fluid" alt="image" />
                                                            <div className="blog-card-text">
                                                                <h5>The Ultimate Packing List</h5>
                                                                <h5>for Travelers</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="about">
                    <div className="container">
                        <h3 className="heading">About Us</h3>
                        <div className="row">
                            <div className="col-lg-8 col-md-10 col-sm-12">
                                <div className="about-left">
                                    <div className="about-left-text">
                                        <p>Tripocio means leisure trip, Tripocio carnival Pvt. ltd. was founded by a team of Ex-manager of top travel brand in the world and a chartered accountant located in Indore, Madhya Pradesh. Our main purpose is to give the best in class experience to our travellers in a cost-effective way That’s why we offer both Domestic and International travel packages at affordable prices. We run Tripocio not just to meet the expectation but surpass the expectation of every traveller in the world that makes tripocio best travel agency in Indore among all .</p>
                                        <p>Meta Sky Tourism LLC - Dubai, was founded by the owners of tripocio carnival Pvt ltd, a Chartered Accountant and a former manager of a top travel brand. Meta Sky Tourism is a Dubai DMC (destination Management Company). We also have a branch in India in addition to a fully operational office in Dubai. Our team is here to organise your trip with great planning. We have a highly qualified team that can provide the best service to clients. Once a customer books a trip with us, our commitment to them does not end there only. We continue to communicate with them both before, during, and after their trip. Instead of treating clients like another commission check, we believe in establishing long-lasting connections with them. We strive to provide our visitors with a special travel experience by allowing them to leisurely explore new places. We have various new policies for our travellers like no cancellation fee*, etc. We served more than 1000+ travellers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-10 col-sm-12">
                                <div className="about-right">
                                    <div className="about-right-img">
                                        <img src="../aboutimg.png" alt="Image" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutus-bottom">
                            <div className="row offset-1 offset-1">
                                <div className="col-lg-6 col-md-10 col-sm-12">
                                    <div className="about-bottom-card">
                                        <div className="about-bottom-text">
                                            <h3>This Website is Powered By</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-12">
                                    <div className="about-bottom-card">
                                        <div className="about-bottom-logo">
                                            <img src="../Tripocio_Logo.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-5 col-sm-12">
                                    <div className="about-bottom-card">
                                        <div className="about-bottom-logo">
                                            <img src="../Meta_Sky_Logo-08.png" alt="Image" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bank-details">
                    <div className="container">
                        <h3 className="heading">Bank Details</h3>
                        <div className="row">
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div className="detail-wraper">
                                    <div className="detail-box">
                                        <ul>
                                            <li><span className="detail-heading">A/C Name:</span><span className='detail-value'>TripOcio Carnival Pvt.Ltd.</span></li>
                                            <li><span className="detail-heading">Bank Name:</span><span className='detail-value'>ICICI Bank</span></li>
                                            <li><span className="detail-heading">A/C Type:</span><span className='detail-value'>Current</span></li>
                                            <li><span className="detail-heading">A/C No:</span><span className='detail-value'>004105016701</span></li>
                                            <li><span className="detail-heading">IFSC:</span><span className='detail-value'>ICICI0000041</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 col-sm-12">
                                <div className="detail-wraper">
                                    <div className="detail-box">
                                        <ul>
                                            <li><span className="detail-heading">A/C Title:</span><span className='detail-value'>META SKY TOURISM LLC </span></li>
                                            <li><span className="detail-heading">IBAN:</span><span className='detail-value'>AE790030012583733920001</span></li>
                                            <li><span className="detail-heading">Account Number:</span><span className='detail-value'>12583733920001</span></li>
                                            <li><span className="detail-heading">Bic/SWIFT:</span><span className='detail-value'>ADCBAEAAXXX</span></li>
                                            <li><span className="detail-heading">Bank:</span><span className='detail-value'>ABU DHABICOMMERCIAL BANK</span></li>
                                            <li><span className="detail-heading">Branch Code / Branch Name</span><span className='detail-value'>252 / AL KARAMAH</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style></style>
                <footer className="footer-section">

                    <div className="container">


                    </div>
                </footer>
                {/* <!--CSS Spinner--> */}
                <div className="spinner-wrapper">
                    <div className="spinner"></div>
                </div>

                {/* <!-- Optional JavaScript; choose one of the two! --> */}
                <Script src="https://code.jquery.com/jquery-3.5.1.js"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
                {/* <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) --> */}
                <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossOrigin="anonymous"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
                    crossOrigin="anonymous"></Script>

                {/* <!-- Option 2: Separate Popper and Bootstrap JS -->
                                <!-- owl.carousel --> */}
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
                    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
                    integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
                    crossOrigin="anonymous" referrerpolicy="no-referrer"></Script>
                <Script src="assets/javaScript/rk.js" defer></Script>
                {/* <!--
                                <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></Script>
                                <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></Script>
                                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossOrigin="anonymous"></Script>
    --> */}
            </div>
        </div>
    )
}

export default nextjsapp