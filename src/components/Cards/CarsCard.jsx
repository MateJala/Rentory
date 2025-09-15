
const CarsCard = ({image = "", alt = "", model = "", year = "", status = "", price = 0, onClick = () => {},}) => {
    return (
        <div onClick={onClick} className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[48%] lg:w-[40%]">
            <img src={image} alt={alt} className="h-[300px] w-full object-cover rounded" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Description:</h3>  
                <div className="space-y-1 mb-4 h-[20px] w-full bg-stone-500"></div>
                <div className="space-y-1 mb-4 h-[20px] w-full bg-stone-500"></div>
                <div className="space-y-1 mb-4 h-[20px] w-1/5 bg-stone-500"></div>
                <div className="space-y-1 mb-4">
                    <p className="text-gray-700">Car Model: <span className="font-bold">{model}</span></p>
                    <p className="text-gray-700">Year: <span className="font-bold">{year}</span></p>
                    <p className="text-gray-700">Condition: <span className="font-bold">{status}</span></p>
                </div>
                <div className="text-right text-emerald-500 font-bold text-lg">${price}/day</div>
            </div>
        </div>
    )}


export default CarsCard
