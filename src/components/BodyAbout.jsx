import image1 from "../assets/about1.png"
import image2 from "../assets/about2.png"
import image3 from "../assets/about3.png"

const Body = () => {
    return (
        <div className="">
            <div className="w-full flex flex-row justify-around items-center gap-10 p-6">
                <div className="w-[40%] text-white">
                    <div className="text-5xl font-bold">About Us</div>
                    <div className="text-xl p-3">
                        <div className="p-3">At Rentory, we’re redefining what it means to rent. As a one-stop rental platform for automobiles, residences, and instruments, our goal is to make access more convenient than ownership. Whether you need a car for a weekend getaway, a cozy apartment for a month-long stay, or an instrument to fuel your creativity, Rentory offers a seamless way to find, book, and enjoy exactly what you need—without the burden of long-term commitments.</div>
                        <div className="p-3">We focus on quality, transparency, and flexibility. Our carefully curated listings, user-friendly platform, and dedicated support team ensure that every rental experience feels easy and reliable. We believe that life should be more about experiencing and less about accumulating—and we’re here to help you do just that.</div>
                    </div>
                </div>
                <div className="w-[40%]"><img src={image1} alt="team image" /></div>
            </div>
            <div className="w-full flex flex-row justify-around items-center gap-10 p-6">
                <div className="w-[40%]"><img src={image2} alt="team image" /></div>
                <div className="w-[40%] text-white">
                    <div className="text-5xl font-bold">Our Story</div>
                    <div className="text-xl p-3">
                        <div className="p-3">The idea for Rentory was born out of a shared frustration. Our founders noticed how fragmented the rental market had become—cars on one site, apartments on another, and instruments hidden behind local classifieds or inconsistent platforms. Renting was supposed to be simple, but it often felt complicated, unreliable, and time-consuming.</div>
                        <div className="p-3">
                            <div>So we asked: What if there was a better way?</div>
                            <div>What if there was one trusted place where you could rent all the essentials of modern living, with peace of mind?</div>
                        </div>
                        <div className="p-3">With that question, Rentory was created. From humble beginnings and a small network of local rentals, we grew into a platform that empowers individuals, travelers, artists, and professionals to access what they need—when and where they need it. We built Rentory for flexibility, for freedom, and for a new way of living that prioritizes access over ownership.</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-around items-center gap-10 p-6">
                <div className="w-[40%] text-white">
                    <div className="text-5xl font-bold">Our Mission</div>
                    <div className="text-xl p-3">
                        <div className="p-3">
                            <div>Our mission is simple:</div>
                            <div>To empower people through smarter access to the things they need—without the hassle of ownership.</div>
                        </div>
                        <div className="p-3">We believe that renting should be a modern, stress-free experience. That’s why we’re committed to building a platform that offers trust, variety, and convenience. Whether it's helping someone move to a new city, explore their musical talent, or travel freely without buying a car, we want to be the invisible partner that makes it all possible.</div>
                        <div className="p-3">At Rentory, we're not just about rentals—we're about unlocking possibilities, reducing waste, and supporting a lifestyle that values freedom, flexibility, and experience.</div>
                    </div>
                </div>
                <div className="w-[40%]"><img src={image3} alt="team image" /></div>
            </div>
        </div>
    )
}

export default Body