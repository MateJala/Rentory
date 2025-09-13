import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        // <div className="flex w-full justify-center items-center border-b border-gray-500" id="navBar">
        //     <ul className="flex gap-x-5 h-full py-3 text-[#e6b1ff] text-2xl">
        //         <li className="hover:text-[#f2d6ff] hover:[text-shadow:0_0_6px_#f2d6ff] transition duration-300">
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li className="hover:text-[#f2d6ff] hover:[text-shadow:0_0_6px_#f2d6ff] transition duration-300">
        //             <Link to="/about">About us</Link>
        //         </li>
        //     </ul>
        // </div>
        <div className="flex w-full justify-center items-center border-b border-gray-500" id="navBar">
            <ul className="flex gap-x-5 h-full py-3 text-[#e6b1ff] text-2xl">
                <li>
                <NavLink to="/" className={({ isActive }) =>
                    `hover:text-[#f2d6ff] hover:[text-shadow:0_0_6px_#f2d6ff] transition duration-300 pb-1
                    ${isActive ? "border-b-2 border-[#f2d6ff]" : ""}`
                    }>Home</NavLink>
                </li>
                <li>
                <NavLink to="/about" className={({ isActive }) =>
                    `hover:text-[#f2d6ff] hover:[text-shadow:0_0_6px_#f2d6ff] transition duration-300 pb-1
                    ${isActive ? "border-b-2 border-[#f2d6ff]" : ""}`
                    }>About us</NavLink>
                </li>
            </ul>
        </div>
  )
}
export default Nav