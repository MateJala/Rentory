import { useEffect,useState } from "react";
import { instruments } from "../../data/Instrument" 
import Payment from "./Payment";

const InstrumentModal = ({ instrumentId, onClose }) => {
    const [showPayment, setShowPayment] = useState(false);
    const instrument = instruments.find((c) => c.id === instrumentId)
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    if (!instrument) return null
    const { image, alt, model, price } = instrument

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto maxime quod deserunt quasi commodi non consequatur expedita doloribus. Nesciunt officiis adipisci pariatur, dolor ea incidunt magni ex hic. Cupiditate voluptatum unde perspiciatis vero tempora natus tenetur. Et enim, nihil voluptatem excepturi impedit, alias quos expedita officia architecto suscipit, ullam ex debitis! Perferendis veritatis voluptatem quasi molestias expedita deserunt eos earum iste suscipit facere praesentium, tenetur laboriosam a totam unde modi sint repellendus amet, animi, quia laudantium saepe debitis consectetur? Minus commodi veniam pariatur nobis nesciunt! Odit, cumque reprehenderit totam aliquid dolore, ratione illum aspernatur dicta sapiente porro eum aperiam omnis nihil, veniam odio hic natus ipsa necessitatibus dignissimos sequi est animi nostrum? Nulla ad, hic est in quas voluptatibus quae quaerat explicabo magnam aliquid dolorum commodi veritatis corrupti facilis perferendis labore et nisi illum vero ratione error velit praesentium distinctio? At accusamus nihil sequi et molestias ipsam sint facere. Dolor reiciendis minima sint enim tempore fuga modi molestiae illo tenetur nostrum recusandae, eum temporibus possimus perspiciatis. Ex doloribus nulla ducimus eum et, aliquam esse sunt eveniet in quibusdam repudiandae deserunt voluptas veniam quas corporis natus dolor saepe. Veritatis eveniet quos sit. Perspiciatis earum id similique? In nobis doloribus maxime? Ab fuga minima dolorem necessitatibus excepturi quas dignissimos, et a esse voluptates eveniet quae iure libero aut neque, eum eos nulla perspiciatis aspernatur aliquam tenetur possimus totam nam quia. Laborum, necessitatibus! Placeat possimus enim hic adipisci. Mollitia ad nisi ex laboriosam deserunt ullam incidunt necessitatibus fugiat? Praesentium quae pariatur obcaecati quasi.
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="space-y-1 mb-4">
                            <p className="text-gray-700">Name: <span className="font-bold">{model}</span></p>
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

export default InstrumentModal