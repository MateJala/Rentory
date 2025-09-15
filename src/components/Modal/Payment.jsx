import { useState } from "react"

const Payment = ({ onClose, model }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        days: "",
        cardNumber: "",
        expDate: "",
        cvv: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }))
    }
    const handleSubmit = () => {
        const allFilled = Object.values(formData).every((value) => value.trim() !== "")
        if (!allFilled) {
        alert("Please fill in all fields.")
        return
    }
    alert("Payment successful!")
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        days: "",
        cardNumber: "",
        expDate: "",
        cvv: ""
    })
    onClose()
    }

    return (
        <div onClick={onClose}
        className="bg-black/50 fixed inset-0 z-50 flex items-center justify-center">
        <div onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg w-[60%] shadow-lg relative">
            <button
            onClick={onClose}
            className="absolute top-2 right-3 text-red-800 text-xl font-bold hover:text-red-600 cursor-pointer"
            >x</button>
            <h2 className="text-2xl font-bold mb-4">Renting {model}</h2>
            <p>Enter your details here.</p>
            <div className="mt-4 space-y-2">
                <div className="flex flex-row justify-between">
                    <input
                        name="firstName"
                        className="w-[49%] border rounded p-2"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        name="lastName"
                        className="w-[49%] border rounded p-2"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <input
                    name="email"
                    className="w-full border rounded p-2"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    name="phone"
                    className="w-full border rounded p-2"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <div className="flex flex-row justify-between items-center">
                    <p className="text-xl font-semibold w-[50%]">How many days will u be renting?</p>
                    <input
                    name="days"
                    className="w-full border rounded p-2 ml-2"
                    placeholder="How many days will u be renting?"
                    value={formData.days}
                    onChange={handleChange}
                    />
                </div>
                <input
                    name="cardNumber"
                    className="w-full border rounded p-2"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                />
                <div className="flex flex-row justify-between">
                    <input
                        name="expDate"
                        className="w-[49%] border rounded p-2"
                        placeholder="Expiration Date"
                        value={formData.expDate}
                        onChange={handleChange}
                    />
                    <input
                        name="cvv"
                        className="w-[49%] border rounded p-2"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={handleSubmit} className="mt-4 w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600">Pay Now</button>
        </div>
    </div>
  )
}

export default Payment
