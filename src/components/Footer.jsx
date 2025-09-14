import twitterlogo from "../assets/twitter-logo.png"
import linkedinlogo from "../assets/linkedin-logo.png"
import instagramlogo from "../assets/instagram-logo.png"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className="w-full border-y border-stone-700">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col m-3 space-y-3">
                    <a href="https://www.twitter.com" aria-label="Twitter" className="flex items-center px-5 space-x-2 text-white">
                        <img src={twitterlogo} alt="Twitter logo" className="h-6 w-6 object-contain"/>
                        <span>@Rentory</span>
                    </a>
                    <a href="https://www.linkedin.com/" aria-label="Linkedin" className="flex items-center px-5 space-x-2 text-white">
                        <img src={linkedinlogo} alt="Linkedin logo" className="h-6 w-6 object-contain"/>
                        <span>Rentory</span>
                    </a>
                    <a href="https://www.instagram.com/" aria-label="Instagram" className="flex items-center px-5 space-x-2 text-white">
                        <img src={instagramlogo} alt="Instagram logo" className="h-6 w-6 object-contain"/>
                        <span>@Rentory</span>
                    </a>
                </div>
                <div className="flex flex-col m-3 space-y-3">
                    <span className="flex items-center space-x-2 px-5 text-white">Email: <span className="bg-stone-600 h-4 w-25 mx-2"></span></span>
                    <span className="flex items-center space-x-2 px-5 text-white">Hotline: <span className="bg-stone-600 h-4 w-25 mx-2"></span></span>
                    <span className="flex items-center space-x-2 px-5 text-white">Adress: <span className="bg-stone-600 h-4 w-25 mx-2"></span></span>
                </div>
                <div className="flex flex-col m-3 space-y-3">
                    <NavLink to="/" className="space-x-2 px-5 text-xl text-white">Home</NavLink>
                    <NavLink to="about" className="space-x-2 px-5 text-xl text-white">About</NavLink>
                </div>
            </div>

            <div className="text-center mt-3 text-sm text-white">
                © 2025 Rentory. All rights reserved (project for GeoLab).
            </div>
        </div>
    )
}
export default Footer