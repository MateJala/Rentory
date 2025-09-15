
const body = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center gap-10 p-6">
                <div className="text-white font-bold text-5xl border-b-2 border-stone-700">Help Center / FAQ</div>
                <div className="text-white text-xl">Have questions? We’re here to help. Below are some of the most common questions about how Rentory works. If you need more support, feel free to contact us</div>
            </div>
            <div className="flex flex-col items-center gap-10 p-6">
                <div className="text-white font-bold text-3xl border-b-2 border-stone-700">1. How does Rentory work?</div>
                <div className="text-white text-xl spacce-y-2">
                    <div>Rentory is a unified rental platform where you can browse and rent automobiles, residences, and instruments—all in one place.</div>
                    <div>Here’s how it works:</div>
                </div>
                <div className="text-white text-xl">
                    <ul className="flex flex-col mx-auto list-decimal space-y-2">
                        <li>Browse listings in your desired category and location</li>
                        <li>Book the item by selecting your dates and submitting a request</li>
                        <li>Connect with the owner for pickup, delivery, or access instructions</li>
                        <li>Enjoy your rental worry-free</li>
                        <li>Return the item as agreed, and leave a review</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 p-6">
                <div className="text-white font-bold text-3xl border-b-2 border-stone-700">2. What are the rental terms?</div>
                <div className="text-white text-xl">Rental terms may vary slightly depending on the item and the owner, but generally include:</div>
                <div className="text-white text-xl">
                    <ul className="flex flex-col mx-auto list-disc space-y-2">
                        <li>Rental duration (hourly, daily, weekly, etc.)</li>
                        <li>Security deposit (if applicable)</li>
                        <li>Usage guidelines (e.g. no smoking in vehicles, no pets in homes, etc.)</li>
                        <li>Late return policy</li>
                        <div>You can view specific terms on each listing page before booking.</div>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 p-6">
                <div className="text-white font-bold text-3xl border-b-2 border-stone-700">3. What happens in case of damage?</div>
                <div className="text-white text-xl">If an item is damaged during the rental period:</div>
                <div className="text-white text-xl">
                    <ul className="flex flex-col w-[40%] mx-auto list-disc space-y-2">
                        <li>Report the issue immediately through your account or contact support</li>
                        <li>The renter may be responsible for repair or replacement costs, depending on the severity of the damage and the listing’s terms</li>
                        <li>In some cases, Rentory may mediate between the renter and owner to resolve the situation fairly We encourage all users to treat rented items with care and respect.</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 p-6">
                <div className="text-white font-bold text-3xl border-b-2 border-stone-700">4. How are payments handled?</div>
                <div className="text-white text-xl">All payments are processed securely through our platform.</div>
                <div className="text-white text-xl">
                    <ul className="flex flex-col mx-auto list-disc space-y-2">
                        <li>You’ll be charged when your booking is confirmed</li>
                        <li>Some listings may require a security deposit, which is refunded after a successful return</li>
                        <li>We accept major credit/debit cards and secure payment gateways</li>
                        <li>Payouts to item owners are made after the rental is completed</li>
                    </ul>
                </div>
                <div className="text-white text-xl">Receipts and transaction history can be found in your account dashboard.</div>
            </div>
        </div>
    )
}

export default body