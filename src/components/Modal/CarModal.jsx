import { useEffect } from "react";
import { cars } from "../../data/Cars"

const CarModal = ({ carId, onClose }) => {
    const car = cars.find((c) => c.id === carId)
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    if (!car) return null
    const { image, alt, model, year, status, price, brand, type, color, transmission, engine, drivetrain,fuelType, horsepower, topSpeed, acceleration } = car

    return (
        <div onClick={onClose}
            className="bg-neutral-800/40 w-full h-screen fixed top-0 left-0 flex justify-center items-center z-50">
            <div onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-lg shadow-md overflow-hidden w-[80%] max-h-[90vh] overflow-y-auto">
                    <button onClick={() => {
                        document.body.style.overflow = "auto"
                        onClose()
                    }}
                    className="absolute top right-3 text-red-800 hover:text-red-600 text-2xl font-bold z-10">x</button>
                <img src={image} alt={alt} className="h-[600px] w-full object-cover rounded"/>
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Full Description:</h3>
                    <div className="space-y-2 mb-4">
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-full bg-stone-500 rounded"></div>
                        <div className="h-[20px] w-1/5 bg-stone-500 rounded"></div>
                    </div>
                    <div className="space-y-1 mb-4">
                        <p className="text-gray-700">Car Model: <span className="font-bold">{model}</span></p>
                        <p className="text-gray-700">Year: <span className="font-bold">{year}</span> </p>
                        <p className="text-gray-700">Condition: <span className="font-bold">{status}</span></p>
                        <p className="text-gray-700">Brand: <span className="font-bold">{brand}</span></p>
                        <p className="text-gray-700">Type: <span className="font-bold">{type}</span></p>
                        <p className="text-gray-700">Color: <span className="font-bold">{color}</span></p>
                        <p className="text-gray-700">Transmission: <span className="font-bold">{transmission}</span></p>
                        <p className="text-gray-700">Engine: <span className="font-bold">{engine}</span></p>
                        <p className="text-gray-700">Drivetrain: <span className="font-bold">{drivetrain}</span></p>
                        <p className="text-gray-700">Fuel Type: <span className="font-bold">{fuelType}</span></p>
                        <p className="text-gray-700">Horsepower: <span className="font-bold">{horsepower}</span></p>
                        <p className="text-gray-700">Top Speed: <span className="font-bold">{topSpeed} MPG</span></p>
                        <p className="text-gray-700">Acceleration: <span className="font-bold">{acceleration} sec</span></p>
                        <div className="text-right text-emerald-500 font-bold text-lg">${price}/day</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarModal