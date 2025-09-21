import { useEffect,useState } from "react";
import { cars } from "../../data/Cars"
import Payment from "./Payment";

const CarModal = ({ carId, onClose }) => {
    const [showPayment, setShowPayment] = useState(false);
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta temporibus quam culpa provident vel voluptatem similique corrupti nihil aspernatur consequuntur facilis consectetur necessitatibus non, architecto deleniti veniam, tenetur sed quis. Similique ut eos earum, omnis ea modi dolorum beatae possimus ad perferendis officia dicta distinctio at amet obcaecati sapiente rem nesciunt error quia aut quaerat? Reiciendis, quaerat quam? Delectus sint labore odit, beatae dolorem, in repellendus, id veniam possimus doloremque impedit consequuntur! Explicabo, eligendi! Earum iure tempora excepturi iusto quia possimus adipisci facere quam delectus voluptates autem repellat, distinctio officiis officia sint architecto assumenda? Quos nisi pariatur repudiandae ea optio itaque maxime aspernatur et, dicta quis qui harum nostrum nam voluptas enim error mollitia non. Quasi nulla accusantium totam distinctio officiis ut perferendis architecto. Consectetur, voluptates corporis veniam explicabo impedit ducimus repellendus neque doloremque. Cupiditate rerum aliquid nihil molestias laborum harum modi repellat eveniet, ipsa repellendus tempora, expedita fugiat doloremque esse tempore id debitis ad impedit at quos. Veritatis sunt pariatur quia fuga accusamus odio impedit facere explicabo, maxime laudantium est sint deserunt ex nihil neque officiis excepturi quod, voluptate quibusdam voluptatum possimus blanditiis labore aut ratione. Est facere quia ea, voluptas iure cumque, fugit nulla quaerat et repudiandae, quibusdam natus! Delectus, dolores veritatis. Deleniti tenetur quidem sapiente odit aperiam enim vel error! Maiores, cumque! Architecto dignissimos quam beatae eum! Cupiditate unde vero odio et sequi consequuntur adipisci consequatur? Doloremque enim illo dicta praesentium fugit officiis quia amet reprehenderit voluptatibus assumenda? Ea ratione, similique modi veniam eaque iure minus?
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="space-y-1 mb-4 mr-5">
                            <p className="text-gray-700">Car Model: <span className="font-bold">{model}</span></p>
                            <p className="text-gray-700">Type: <span className="font-bold">{type}</span></p>
                            <p className="text-gray-700">Brand: <span className="font-bold">{brand}</span></p>
                            <p className="text-gray-700">Year: <span className="font-bold">{year}</span> </p>
                            <p className="text-gray-700">Color: <span className="font-bold">{color}</span></p>
                            <p className="text-gray-700">Condition: <span className="font-bold">{status}</span></p> 
                            <p className="text-gray-700">Transmission: <span className="font-bold">{transmission}</span></p>
                            <p className="text-gray-700">Engine: <span className="font-bold">{engine}</span></p>
                            <p className="text-gray-700">Drivetrain: <span className="font-bold">{drivetrain}</span></p>
                            <p className="text-gray-700">Fuel Type: <span className="font-bold">{fuelType}</span></p>
                            <p className="text-gray-700">Horsepower: <span className="font-bold">{horsepower}</span></p>
                            <p className="text-gray-700">Top Speed: <span className="font-bold">{topSpeed} MPG</span></p>
                            <p className="text-gray-700">Acceleration: <span className="font-bold">{acceleration} sec</span></p>
                        </div>
                        <div className="space-y-1 mb-4" >
                            <h3 className="text-xl font-semibold mb-2">Renters contact info for further questions:</h3>
                            <div className="flex flex-row">
                                <p className="text-gray-700">Name: </p><div className="font-bold pl-1"> Lorem.</div>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-gray-700">Email: </p><div className="font-bold pl-1"> Lorem, ipsum.</div>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-gray-700">Phone: </p><div className="font-bold pl-1"> Lorem, ipsum.</div>
                            </div>


                            
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button  onClick={() => setShowPayment(true)} className="border border-white rounded h-[40px] w-[200px] text-2xl font-bold text-white bg-emerald-500 hover:border-black cursor-pointer hover:bg-emerald-400">Rent It</button>
                    </div>
                    
                    <div className="text-right text-emerald-500 font-bold text-lg">${price}/day</div>
                </div>
            </div>
            {showPayment && (
                <Payment onClose={() => setShowPayment(false) } model={model} />
            )}
        </div>
    )
}

export default CarModal