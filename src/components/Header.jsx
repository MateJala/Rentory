import { NavLink } from "react-router-dom"
import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/FAQ", label: "FAQ" },
    ];

    return (
        <header className="w-full border-y border-stone-700">
            <div className="flex items-center justify-between px-4 h-[60px]">
                <div className="flex items-center">
                    <img src="logo.png" alt="logo" className="h-[52px] object-contain mr-3" />
                    <h1 className="text-3xl md:text-4xl text-white font-bold">Rentory</h1>
                </div>
                <nav className="hidden md:flex items-center space-x-4">
                    {navLinks.map((link) => (
                        <NavLink key={link.to} to={link.to}
                            className={({ isActive }) =>
                                `px-5 text-lg text-white hover:text-stone-300 transition ${
                                isActive ? "border border-stone-500 rounded-lg" : ""
                                }`
                            }>{link.label}</NavLink>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 pb-4 border-t border-stone-700">
                    <ul className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink to={link.to} onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-3 py-2 rounded text-white text-base ${
                                isActive ? "border border-stone-500 rounded-lg" : ""
                                }`
                            }>{link.label}</NavLink>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );






    // return (
    //     <div className="flex flex-row justify-between border-y border-stone-700 w-full h-[60px]">
    //         <div className="flex flex-row items-center">
    //             <img src="logo.png" alt="logo" className="px-[20px] h-[52px] object-contain"/>
    //             <h1 className="text-4xl text-white font-bold">Rentory</h1>
    //         </div>
    //         <div className="">
    //             <ul className="flex flex-row items-center h-full">
    //                 <li>
    //                 <NavLink to="/" className={({ isActive }) =>
    //                         `px-5 mx-2 text-2xl text-white ${isActive ? 'border border-stone-500 rounded-lg' : ''}`
    //                 }>Home</NavLink>
    //                 </li>
    //                 <li>
    //                 <NavLink to="/about" className={({ isActive }) =>
    //                         `px-5 mx-2 text-2xl text-white ${isActive ? 'border border-stone-500 rounded-lg' : ''}`
    //                 }>About Us</NavLink>
    //                 </li>
    //                 <li>
    //                 <NavLink to="/FAQ" className={({ isActive }) =>
    //                         `px-5 mx-2 text-2xl text-white ${isActive ? 'border border-stone-500 rounded-lg' : ''}`
    //                 }>FAQ</NavLink>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // ) 
}
export default Header 