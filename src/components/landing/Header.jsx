import React from 'react';
function Header() {
    return (
        <div className="bg-black">
            <div className="max-w-[1024px] w-full mx-auto">
                <div className="flex flex-row justify-between bg-black text-white px-3 lg:px-8 pt-12 pb-32">
                    <a className="text-3xl font-bold font-heading" href="#">
                        <div className="flex flex-row border rounded border-white pr-2 hover:border-black">
                            <img className="h-7" src="https://uploads-ssl.webflow.com/642970f5f9d51a68cb962039/648a0bed50af6f0552724d26_Untitled%20design.png" alt="logo"/>
                            <span className="text-xl text-center font-primary">Martian Bitcoin</span>
                        </div>
                    </a>
                    <ul class="hidden lg:flex justify-around px-4 gap-32 font-primary text-xl">
                            <li><a className="hover:text-red-500" href="#">Home</a></li>
                            <li><a className="hover:text-red-500" href="#">About</a></li>
                            <li><a className="hover:text-red-500" href="#">Presale</a></li>
                            <li><a className="hover:text-red-500" href="#">Buy</a></li>
                    </ul>
                    {/* <!-- Responsive navbar --> */}
                    <button className="lg:hidden block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    )   
}

export default Header;


{/* <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16" />
                            </svg> */}
