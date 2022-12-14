import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    return (
        <div className="navbar p-10 fixed w-full bg-[#191820]">
            <div className="navbar-box flex justify-between items-center">
                <a href="https://facebook.com" className="navbar-logo text-[4rem] font-medium uppercase text-[#fff]">
                    Xuannam
                </a>
                <input type="checkbox" id="active" className="navbar_menu-icon hidden " />

                <div className="navbar__menu-list flex justify-center items-center text-[3rem]">
                    <label for="active" className="navbar__menu-close">
                        <FontAwesomeIcon icon={faXmark} className="text-[#fff] text-[4rem] hidden show-on-mobile" />
                    </label>
                    <div className="navbar__menu-box flex">
                        <div className="navbar__menu-item ml-12 uppercase text-[#fff] font-medium cursor-pointer">
                            <a href="/">Home</a>
                        </div>
                        <div className="navbar__menu-item ml-12 uppercase text-[#fff] font-medium cursor-pointer">
                            <a href="#about">About me</a>
                        </div>
                        <div className="navbar__menu-item ml-12 uppercase text-[#fff] font-medium cursor-pointer">
                            <a href="#skills">Skills</a>
                        </div>
                        <div className="navbar__menu-item ml-12 uppercase text-[#fff] font-medium cursor-pointer">
                            Projects
                        </div>
                    </div>
                </div>

                <label for="active" className="p-5 cursor-pointer hidden show-on-mobile">
                    <i className="fa fa-bars text-[#fff] text-[3rem]"></i>
                </label>
            </div>
        </div>
    );
}
