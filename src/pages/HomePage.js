import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <>
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                  to="/">Home</Link>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/portfolios">Portfolio</Link>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/about">About</Link>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">

                <img class="masthead-avatar mb-5" src="assets/img/avataar.png" alt="" />

                <h1 class="masthead-heading text-uppercase mb-0">Theodor Abi-Mansour</h1>

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>

                <p class="masthead-subheading font-weight-light mb-0">Web Developer</p>
            </div>
        </header>
    </>
);

export default HomePage;