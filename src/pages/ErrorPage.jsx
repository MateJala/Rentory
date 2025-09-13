import { useEffect } from "react";


const ErrorPage = () => {
    useEffect(() => {document.body.style.backgroundColor = "#ffffff"}, [])
    return (
    <div className='h-150 w-screen flex items-center justify-center text-2xl'>Error 404! Page not found!</div>
  )
}
export default ErrorPage