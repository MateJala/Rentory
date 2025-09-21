import CarsCard from "./Cards/CarsCard"
import ResidenceCard from "./Cards/ResidenceCard"
import InstrumentsCard from "./Cards/InstrumentCard"
import { cars } from "../data/Cars"
import { residences } from "../data/Residence"
import { instruments } from "../data/Instrument"
import { useState } from "react"
import CarModal from './Modal/CarModal'
import ResidenceModal from "./Modal/ResidenceModal"
import InstrumentModal from "./Modal/InstrumentModal"


const Body = () => {
    const [selectedCategory, setSelectedCategory] = useState("Automobile")
    const [selectedCarId, setSelectedCarId] = useState(null)
    const [selectedResidenceId, setSelectedResidenceId] = useState(null)
    const [selectedInstrumentId, setSelectedInstrumentId] = useState(null)
    const openCarModal = (id) => setSelectedCarId(id)
    const closeCarModal = () => setSelectedCarId(null)
    const openResidenceModal = (id) => setSelectedResidenceId(id)
    const closeResidenceModal = () => setSelectedResidenceId(null)
    const openInstrumentModal = (id) => setSelectedInstrumentId(id)
    const closeInstrumentModal = () => setSelectedInstrumentId(null)

    return (
    <div className="flex flex-col xl:flex-row">
        <div className="w-full flex flex-row justify-between items-center border-b border-stone-700 xl:flex-col xl:w-[10%] xl:border-b-0 xl:justify-normal">
            <div className="text-white text-xl py-3 px-3 ">Categories</div>
            <div className="flex flex-row  border-stone-700 xl:border-l xl:flex-col">
                <div className={`text-white text-sm p-3 cursor-pointer hover:border hover:border-stone-700 hover:rounded ${
                    selectedCategory === "Automobile" ? "border border-stone-700 rounded" : ""}`} 
                    onClick={() => setSelectedCategory("Automobile")}>Automobile</div>
                <div className={`text-white text-sm p-3 cursor-pointer hover:border hover:border-stone-700 hover:rounded ${
                    selectedCategory === "Residence" ? "border border-stone-700 rounded" : ""}`} 
                    onClick={() => setSelectedCategory("Residence")}>Residence</div>
                <div className={`text-white text-sm p-3 cursor-pointer hover:border hover:border-stone-700 hover:rounded ${
                    selectedCategory === "Instruments" ? "border border-stone-700 rounded" : ""}`} 
                    onClick={() => setSelectedCategory("Instruments")}>Instruments</div>
            </div> 
        </div>
        <div className="flex flex-wrap justify-center w-full gap-10 p-6 xl:border-l border-stone-700">
            {selectedCategory === "Automobile" && (cars.map((car) => ( <CarsCard id={car.id} image={car.image} alt={car.alt} model={car.model} year={car.year} status={car.status} price={car.price} onClick={() => openCarModal(car.id)}/> )))}
            {selectedCategory === "Residence" && (residences.map((residence) => ( <ResidenceCard id={residence.id} image={residence.image} alt={residence.alt} location={residence.location} wifi={residence.wifi} pets={residence.pets} parking={residence.parking} price={residence.price} onClick={() => openResidenceModal(residence.id)}/> )))}
            {selectedCategory === "Instruments" && (instruments.map((instrument) => ( <InstrumentsCard id={instrument.id} image={instrument.image} alt={instrument.alt} model={instrument.model} price={instrument.price} onClick={() => openInstrumentModal(instrument.id)}/>)))}
        </div>
        {selectedCarId && (<CarModal carId={selectedCarId} onClose={closeCarModal} />)}
        {selectedResidenceId && (<ResidenceModal residenceId={selectedResidenceId} onClose={closeResidenceModal} />)}
        {selectedInstrumentId && (<InstrumentModal instrumentId={selectedInstrumentId} onClose={closeInstrumentModal} />)}

    </div> )}

export default Body