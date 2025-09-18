
const InstrumentsCard = ({image = "", alt = "", model = "", price = 0, onClick = () => {},}) => {
    return (
        <div onClick={onClick} className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-[48%] lg:w-[40%]">
            <img src={image} alt={alt} className="h-[300px] w-full object-cover rounded" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Description:</h3>  
                <div className="space-y-1 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum qui optio eaque, excepturi minus architecto fugiat aut modi iusto, quae eligendi nesciunt, laborum doloremque cum ad delectus numquam voluptatibus?</div>
                <div className="space-y-1 mb-4">
                    <p className="text-gray-700">Name: <span className="font-bold">{model}</span></p>
                </div>
                <div className="text-right text-emerald-500 font-bold text-lg">${price}/day</div>
            </div>
        </div>
    )}


export default InstrumentsCard
