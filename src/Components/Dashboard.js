import React from "react";
import Base from "./Base";
import chart from "./luke-chesser-JKUTrJ4vK00-unsplash.jpg";
import pie from "./stefan-moertl-MZSX2R6KKEw-unsplash.jpg"

function Dashboard() {
  return (
    <Base>
      {/* Children object */}
      <section className="child">
        <div className="outer-box">
          {/* content */}
          <div className="text-box flex justify-between p-4 mb-4">
            <p className="font-semibold p-2 text-2xl text-gray-700 ">
              Dashboard
            </p>
            <button className="bg-blue-700 p-2 rounded-lg text-white font-semibold">
              Generate Report
            </button>
          </div>
          {/* 4 Boxes */}
          <div className="boxes p-4 font-semibold text-sm flex justify-between gap-8 mb-4">
            <div className="flex w-1/4 border-l-4 items-center  cursor-pointer border-blue-400   bg-white rounded-xl shadow-lg p-6 justify-between gap-8 duration-300 transition-all hover:scale-105">
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
            <div className="flex border-l-4 w-1/4 items-center cursor-pointer border-yellow-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>Earnings(Annual)</p>
                <p>$215,0000</p>
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
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex w-1/4 border-l-4 items-center cursor-pointer border-red-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>Tasks</p>
                <p>50%</p>
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
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <div className="flex border-l-4 w-1/4 items-center cursor-pointer border-green-400   bg-white rounded-xl shadow-lg p-4 justify-between gap-8 duration-300 transition-all hover:scale-105">
              <div>
                <p>PENDING REQUESTS</p>
                <p>18</p>
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
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
            </div>
          </div>
          {/* 2 Boxes */}
          <div id="2-Box " className="flex gap-8 mb-4">
            <div className="w-2/3 h-96 bg-white rounded-lg shadow-xl p-4">
              {/* Header */}
              <div className="flex justify-between border-b-2 p-4 border-slate-300">
                <p>Earnings Overview</p>
                <button>
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
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
              </div>
              {/* Image */}
              <img
                src={chart}
                alt="im"
                className="object-cover h-72 w-full p-4 "
              ></img>
            </div>
            <div className="w-1/3 bg-white rounded-lg shadow-xl p-4">
              {/* Header */}
              <div className="flex justify-between border-b-2 p-4 border-slate-300">
                <p>Revenue Sources</p>
                <button>
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
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
              </div>
              {/* Img Box */}
              <img src={pie} alt="pie-chart" className="w-full pt-4 h-80 rounded-xl"></img>
            </div>
          </div>
          {/* Content Box */}
          <div id="Main-box" className="flex p-4 gap-4 ">
            {/* Left-box-main */}
            <div className="flex flex-col w-1/2">
              {/* Top-box */}
              <div className="bg-white p-4 rounded-xl shadow-lg w-full  ">
                <div className="flex justify-between border-b-2 p-4 border-slate-300">
                  <p>projects</p>
                </div>
                <div id="progress-bar" className="p-6">
                  <div class="mb-1 text-base font-medium dark:text-black">
                    Dark
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-gray-400 h-2.5 rounded-full dark:bg-gray-300 width: 45%"></div>
                  </div>
                  <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
                    Blue
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-blue-600 h-2.5 rounded-full width: 45%"></div>
                  </div>
                  <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">
                    Red
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-red-600 h-2.5 rounded-full dark:bg-red-500 width: 45%"></div>
                  </div>
                  <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">
                    Green
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-green-600 h-2.5 rounded-full dark:bg-green-500 width: 45%"></div>
                  </div>
                  <div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
                    Yellow
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-yellow-400 h-2.5 rounded-full width: 45%"></div>
                  </div>
                  <div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
                    Indigo
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                    <div class="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500 width: 45%"></div>
                  </div>
                  <div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
                    Purple
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500 width: 45%"></div>
                  </div>
                </div>
              </div>
              {/* Bottom Grid */}
              <div className="grid grid-cols-2  mt-4 gap-4 p-4 grid-rows-3  text-white font-semibold">
                <div className=" h-24 rounded-xl  p-4 text-left bg-blue-500 ">
                  <p>Primary</p>
                  <p>#323der</p>
                </div>
                <div className=" h-24 rounded-xl  p-4 text-left bg-green-500 ">
                  <p>Secondary</p>
                  <p>#467fc</p>
                </div>
                <div className=" h-24 rounded-xl  p-4 text-left bg-red-500 ">
                  <p>Primary</p>
                  <p>#935et</p>
                </div>
                <div className=" h-24 rounded-xl  p-4 text-left bg-yellow-500 ">
                  <p>Primary</p>
                  <p>#093kl</p>
                </div>
                <div className=" h-24 rounded-xl  p-4 text-left bg-cyan-500 ">
                  <p>Primary</p>
                  <p>#873bn</p>
                </div>
                <div className=" h-24 rounded-xl  p-4 text-left bg-pink-500 ">
                  <p>Primary</p>
                  <p>#386io</p>
                </div>
              </div>
            </div>
            {/* Right Box Main */}
            <div className="flex flex-col space-y-4 ">
              {/* Box-1 */}
              <div className="h-64 rounded-lg shadow-xl bg-white w-full p-4 flex-1">
                <div className="flex justify-between border-b-2 p-4 border-slate-300 ">
                  <p>Illustartions</p>
                </div>
                {/* <img className="h-6 w-6" src="stefan-moertl-MZSX2R6KKEw-unsplash.jpg" alt=""></img> */}
                <p className="max-w-lg">
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </p>
              </div>
              {/* box-2 */}
              <div className="h-64 rounded-lg shadow-xl bg-white w-full p-4 flex-1">
                <div className="flex justify-between border-b-2 p-4 border-slate-300 ">
                  <p>Development Approach</p>
                </div>
                {/* <img className="h-6 w-6" src="stefan-moertl-MZSX2R6KKEw-unsplash.jpg" alt=""></img> */}
                <p className="max-w-lg">
                  Add some quality, svg illustrations to your project courtesy
                  of unDraw, a constantly updated collection of beautiful svg
                  images that you can use completely free and without
                  attribution!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

export default Dashboard;
