import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex flex-row justify-between border-y border-stone-700 w-full h-[60px]">
            <div className="flex flex-row items-center">
                <img src="../public/logo.png" alt="logo" className="px-[20px] h-[52px] object-contain"/>
                <h1 className="text-4xl text-white">Rentory</h1>
            </div>
            <div className="">
                <ul className="flex flex-row items-center h-full">
                    <li>
                    <NavLink to="/" className={({ isActive }) =>
                            `px-5 mx-2 text-2xl text-white ${isActive ? 'border border-stone-500 rounded-lg' : ''}`
                    }>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className={({ isActive }) =>
                            `px-5 mx-2 text-2xl text-white ${isActive ? 'border border-stone-500 rounded-lg' : ''}`
                    }>About Us</NavLink>
                    </li>
                </ul>   
            </div>
        </div>
    ) 
}
export default Header 