
const ResidenceCard = ({image = "", alt = "", location = "", wifi = "", pets = "", parking = "", price = 0, onClick = () => {},}) => {
    return (
        <div onClick={onClick} className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-[80%] lg:w-[40%]">
            <img src={image} alt={alt} className="h-[300px] w-full object-cover rounded" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Description:</h3>  
                <div className="space-y-1 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum qui optio eaque, excepturi minus architecto fugiat aut modi iusto, quae eligendi nesciunt, laborum doloremque cum ad delectus numquam voluptatibus?</div>
                <div className="space-y-1 mb-4">
                    <p className="text-gray-700">Location: <span className="font-bold">{location}</span></p>
                    <p className="text-gray-700">Free Wifi: <span className="font-bold">{wifi}</span></p>
                    <p className="text-gray-700">Pets Allowed: <span className="font-bold">{pets}</span></p>
                    <p className="text-gray-700">Parking Spot: <span className="font-bold">{parking}</span></p>
                </div>
                <div className="text-right text-emerald-500 font-bold text-lg">${price}/month</div>
            </div>
        </div>
    )}


export default ResidenceCard
