import React from 'react'

function Card({mainHeading, buttonTxt}) {
    console.log(mainHeading)
    console.log(buttonTxt)
    return (
        <>
            <div class="bg-white x-auto max-w-7xl px-2 py-2 lg:px-0">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div class="w-full md:w-2/3 lg:w-1/2">
                        <h2 class="text-3xl font-bold text-black">
                            {mainHeading}
                        </h2>
                        <p class="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            ipsum eu nunc commodo posuere et sit amet ligula.
                        </p>
                        <div class="mt-4">
                            <p class="font-semibold text-gray-800">
                                Trusted by over 100,000+ businesses and individuals
                            </p>
                            <div class="mt-2 flex items-center">
                                <div class="flex space-x-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-yellow-400"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-yellow-400"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-yellow-400"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-yellow-400"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="h-5 w-5 text-yellow-400"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </div>
                                <span class="ml-2 inline-block">
                                    <span class="text-sm font-semibold text-gray-800">
                                        4.8/5 . 3420 Reviews
                                    </span>
                                </span>
                            </div>
                        </div>
                        <form class="mt-6">
                            <div class="flex w-full max-w-md flex-col space-y-4">
                                <input
                                    class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Email"
                                />
                                <button
                                    type="button"
                                    class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    {buttonTxt}
                                </button>
                            </div>
                        </form>
                        <p class="mt-2">
                            <span class="text-sm text-gray-600">
                                By signing up, you agree to our terms of service and privacy policy.
                            </span>
                        </p>
                    </div>
                    <div class="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
                        <img
                            class="h-full w-full rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                            alt="Newsletter"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card