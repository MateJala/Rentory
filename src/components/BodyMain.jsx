import CarsCard from "./CarsCard"
import { cars } from "../data/Cars"
import { useState } from "react"
import CarModal from './Modal/CarModal'

const Body = () => {
    const [selectedCarId, setSelectedCarId] = useState(null)
    const openModal = (id) => setSelectedCarId(id)
    const closeModal = () => setSelectedCarId(null)

    return ( 
    <div className="flex flex-row">
        <div className="w-[10%] flex flex-col items-center">
            <div className="text-white text-xl py-3">Categories</div>
            <div className="border-l border-stone-700">
                <div className="text-white text-sm p-3">Automobile</div>
                <div className="text-white text-sm p-3">Residence</div>
                <div className="text-white text-sm p-3">Instruments</div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-10 p-6 border-l border-stone-700">
            {cars.map((car) => { return <CarsCard id={car.id} image={car.image} alt={car.alt} model={car.model} year={car.year} status={car.status} price={car.price} onClick={() => openModal(car.id)}/> })}
        </div>
        {selectedCarId && (<CarModal carId={selectedCarId} onClose={closeModal} />)}
    </div> )}

export default Body