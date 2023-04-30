import React from "react";
import Base from "./Base";

function Cards() {
  return (
    <Base>
      <div id="outer-container" className="p-4 min-h-screen">
        <h1 className="font-bold text-3xl mb-4">Cards</h1>
        {/* 4 Box */}
        <div id="4-box">
          <div className="boxes p-4 flex justify-between gap-2 mb-4">
            <div className="flex border-l-4 items-center cursor-pointer border-blue-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>Earnings(Monthly)</p>
                <p>$39,0000</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <div className="flex border-l-4 items-center cursor-pointer border-yellow-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>Earnings(Monthly)</p>
                <p>$39,0000</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <div className="flex border-l-4 items-center cursor-pointer border-red-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>Earnings(Monthly)</p>
                <p>$39,0000</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <div className="flex border-l-4 items-center cursor-pointer border-green-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>Earnings(Monthly)</p>
                <p>$39,0000</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="grid grid-cols-2 gap-8 grid-rows-2">
        <div id="1">
            <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5">
                <a href="https//:www.google.com">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. t focuses on news
                  surrounding information and telecommunications (ICT)
                  broadband, IT security, software, gadgets and gaming, and
                  mobile operators from across Africa.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  IT News Africa also produces the bi-monthly Innovation Dinner,
                  a gathering of senior-level executives from the ICT industry
                  across Africa hosted with the partnership of IBM and is the
                  publisher of the African Innovator Magazine.
                </p>
                <a
                  href="https//:www.google.com"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        <div id="1">
            <div class="max-w- bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5">
                <a href="https//:www.google.com">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. t focuses on news
                  surrounding information and telecommunications (ICT)
                  broadband, IT security, software, gadgets and gaming, and
                  mobile operators from across Africa.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  IT News Africa also produces the bi-monthly Innovation Dinner,
                  a gathering of senior-level executives from the ICT industry
                  across Africa hosted with the partnership of IBM and is the
                  publisher of the African Innovator Magazine.
                </p>
                <a
                  href="https//:www.google.com"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        <div id="1">
            <div class="max-w- bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5">
                <a href="https//:www.google.com">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. t focuses on news
                  surrounding information and telecommunications (ICT)
                  broadband, IT security, software, gadgets and gaming, and
                  mobile operators from across Africa.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  IT News Africa also produces the bi-monthly Innovation Dinner,
                  a gathering of senior-level executives from the ICT industry
                  across Africa hosted with the partnership of IBM and is the
                  publisher of the African Innovator Magazine.
                </p>
                <a
                  href="https//:www.google.com"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        <div id="1">
            <div class="max-w- bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="p-5">
                <a href="https//:www.google.com">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. t focuses on news
                  surrounding information and telecommunications (ICT)
                  broadband, IT security, software, gadgets and gaming, and
                  mobile operators from across Africa.
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  IT News Africa also produces the bi-monthly Innovation Dinner,
                  a gathering of senior-level executives from the ICT industry
                  across Africa hosted with the partnership of IBM and is the
                  publisher of the African Innovator Magazine.
                </p>
                <a
                  href="https//:www.google.com"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Cards;
