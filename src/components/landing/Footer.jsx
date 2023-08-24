import React from 'react';
function Footer() {
    return (
        <footer class="bg-black">
        <div class="mx-auto max-w-[1080px] w-full px-4 py-16 sm:px-6 lg:px-8">
            <div class="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="mt-8 grid grid-cols-3 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16">
                        <div class="col-span-2">
                            <div>
                                <h2 class="text-2xl font-bold text-white">
                                MARTIN BITCOIN
                                </h2>

                                <p class="mt-4 text-gray-400">
                                Join our Newsletter
                                </p>
                            </div>
                        </div>
                    </div>
                    <form class="w-full md:w-1/2">
                        <label for="UserEmail" class="sr-only"> Email </label>

                        <div
                        class="border  p-2 focus-within:ring border-gray-800 sm:flex sm:items-center sm:gap-4"
                        >
                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="Email Address"
                            class="w-full border-none focus:border-transparent focus:ring-transparent bg-gray-900 text-white sm:text-lg"
                        />

                        <button
                            className="mt-1 w-full bg-[#ff914d] rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-orange-600 sm:mt-0 sm:w-auto sm:shrink-0"
                        >
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
                <div className="grid grid-cols-3 gap-8 text-white font-primary">
                    <div className="flex flex-col gap-4">
                        <div>Martian</div>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">Home</a>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">About</a>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">Presale</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>Market</div>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">Buy MARS</a>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">Whitepaper</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>Contact</div>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">Email</a>
                        <a href="#" className="transition hover:opacity-75 hover:text-orange-600">Twitter</a>
                    </div>
                </div>
            </div>

        </div>
        </footer>
    )   
}

export default Footer;
