import { useEffect,useState } from "react";
import { residences } from "../../data/Residence"
import Payment from "./Payment";

const ResidenceModal = ({ residenceId, onClose }) => {
    const [showPayment, setShowPayment] = useState(false);
    const residence = residences.find((c) => c.id === residenceId)
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    if (!residence) return null
    const { image, alt, location, wifi, pets, parking, price } = residence

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
                        <div className="h-[20px] w-1/5 bg-stone-500 rounded"></div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="space-y-1 mb-4">
                            <p className="text-gray-700">Location: <span className="font-bold">{location}</span></p>
                            <p className="text-gray-700">Free Wifi: <span className="font-bold">{wifi}</span></p>
                            <p className="text-gray-700">Pets Allowed: <span className="font-bold">{pets}</span></p>
                            <p className="text-gray-700">Parking Spot: <span className="font-bold">{parking}</span> </p>
                        </div>
                        <div className="space-y-1 mb-4" >
                            <h3 className="text-xl font-semibold mb-2">Renters contact info for further questions:</h3>
                            <div className="flex flex-row">
                                <p className="text-gray-700">Name: </p><div className="h-[20px] w-[30%] bg-stone-500 rounded ml-3"></div>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-gray-700">Email: </p><div className="h-[20px] w-[50%] bg-stone-500 rounded ml-3"></div>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-gray-700">Phone: </p><div className="h-[20px] w-[40%] bg-stone-500 rounded ml-3"></div>
                            </div>                   
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button  onClick={() => setShowPayment(true)} className="border border-white rounded h-[40px] w-[200px] text-2xl font-bold text-white bg-emerald-500 hover:border-black cursor-pointer hover:bg-emerald-400">Rent It</button>
                    </div>
                    
                    <div className="text-right text-emerald-500 font-bold text-lg">${price}/month</div>
                </div>
            </div>
            {showPayment && (
                <Payment onClose={() => setShowPayment(false) } location={location} />
            )}
        </div>
    )
}

export default ResidenceModal