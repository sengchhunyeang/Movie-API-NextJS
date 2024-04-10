import React from 'react'

const Navbar = () => {
    return (
        <>

            <div>
                <nav className="navbar fixed top-0 left-0 right-0">
                    <div className="w-full flex  p-4  absolute ">
                        <a
                            href=""
                            class=""
                        >
                            <div>
                                <img
                                    className="w-44"
                                    src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
                                />
                                <p className=" text-white">ហង​ភាពយន្ត​​ លេជេ​ន</p>
                            </div>
                        </a>
                        <div className="flex md:order-2">
                            <button
                                type="button"
                                data-collapse-toggle="navbar-search"
                                aria-controls="navbar-search"
                                aria-expanded="false"
                                class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </button>
                            {/*  */}
                            <button
                                data-collapse-toggle="navbar-search"
                                type="button"
                                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-search"
                        >
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>

                            </div>
                            <div className="">
                                <ul className=" flex   rtl:space-x-reverse  dark:border-gray-700 left-[70%] relative text-xl gap-10">
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-white hover:bg-white hover:text-black  hover:rounded hover:p-1">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-white  hover:bg-white hover:text-black  hover:rounded hover:p-1">
                                            popular
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 md:p-0 text-white  hover:bg-white hover:text-black  hover:rounded hover:p-1">
                                            Romance
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-3 md:p-0 text-white  hover:bg-white hover:text-black  hover:rounded hover:p-1"
                                        >
                                            Anime
                                        </a>
                                    </li>
                                    <li>
                                        <div className="relative hidden md:block">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                                            <input
                                                type="text"
                                                id="search-navbar"
                                                class="ms-12 float-right block w-full p-2 ps-10 text-sm shadow rounded"
                                                placeholder="Type to search..."
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div >
                    <img
                        className="w-full h-auto "
                        src="https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar