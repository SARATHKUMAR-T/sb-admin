import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo512.png";


function Base({ children }) {
  const history = useHistory();

  const addfun = () => {
    const ele1 = document.getElementById("toggle");

    ele1.classList.toggle("hidden");
  };
  const addfun2 = () => {
    const ele1 = document.getElementById("toggle-2");
    ele1.classList.toggle("hidden");
  };

  return (
    <div className="Main  max-w-full min-h-screen mx-auto grid grid-cols-6 grid-rows-auto  grid-flow-col-dense    bg-slate-50">
      {/* Side Nav Bar */}
      <aside className=" bg-[#4dabf7] text-gray-100 font-semibold row-span-6 ">
        <div className="container p-2 flex flex-col justify-start">
          {/* Header */}
          <div>
            <div className="p-4 font-semibold  text-3xl">SB ADMIN 2</div>
            <div className="border border-gray-500"></div>
          </div>
          {/* Dashboard */}
          <div className="cont flex justify-start  ">
            <div>
              <ion-icon name="stats-chart-outline" className></ion-icon>
              <button
                className="border-none  p-4 duration-300 hover:text-gray-800 "
                onClick={() => history.push("/")}
              >
                Dashboard
              </button>
            </div>
          </div>
          <div className="border border-gray-500"></div>
          {/* Interface */}
          <div className="interface-container flex flex-col gap-3 transition-all duration-300 ">
            <p className="text-sm font-semibold pt-4 ">
              INTERFACE
            </p>
            {/* Components box */}
            <div className="content flex flex-col justify-between pt-2 group">
              <div className="flex gap-3 justify-between">
                <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <button
                  className=" duration-300 group-hover:text-gray-800"
                  onClick={addfun}
                >
                  Components
                </button>
                </div>
                <button
                  className="group-hover:text-gray-800 duration-300 transition-all"
                  onClick={addfun}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              {/* Drob down */}
              <div id="toggle" className="hidden text-gray-800 duration-300 transition-all">
                <div className=" rounded-lg shadow-xl text-sm gap-4 mt-4 justify-start bg-slate-50 w-full flex flex-col p-4">
                  <p className="text-xs">CUSTOM COMPONENTS:</p>
                  <button
                    className="border-none w-1/2"
                    onClick={() => history.push("/buttons")}
                  >
                    Buttons
                  </button>
                  <button
                    className="border-none w-1/2"
                    onClick={() => history.push("/card")}
                  >
                    Cards
                  </button>
                </div>
              </div>
            </div>

            {/* Utilities box */}
            <div className="content flex flex-col justify-between pt-2 group">
              <div className="flex gap-3 justify-between">
                <div className="flex gap-2 ">
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
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>

                <button
                  className=" duration-300 group-hover:text-gray-800"
                  onClick={addfun2}
                >
                  Utilities
                </button>
                </div>
                <button className="group-hover:text-gray-800 " onClick={addfun2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              {/* Drob Down 2 */}
              <div id="toggle-2" className="hidden text-gray-800 duration-300 transition-all">
                <div className=" rounded-lg  shadow-xl text-sm gap-4 mt-4 text-left  bg-slate-50 w-full flex flex-col p-4">
                  <p className="text-xs">CUSTOM UTILITIES:</p>
                  <button
                    className="border-none text-left w-1/2"
                    onClick={() => history.push("/color")}
                  >
                    Colors
                  </button>
                  <button
                    className="border-none text-left w-1/2"
                    onClick={() => history.push("/borders")}
                  >
                    Borders
                  </button>
                  <button
                    className="border-none text-left w-1/2"
                    onClick={() => history.push("/animations")}
                  >
                    Animations
                  </button>
                  <button
                    className="border-none text-left w-1/2 text-blue-400"
                    onClick={() => history.push("/others")}
                  >
                    Others
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border mt-4 border-gray-500"></div>

          {/* Add on */}
          <div id="add-on " className="flex font-semibold flex-col gap-y-4">
            <p className=" text-sm pt-4 ">ADD ON</p>
            <div>
              <div className="content flex justify-between pt-2 group">
                <div className="flex gap-3 justify-center">
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
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>

                  <button className=" duration-300  group-hover:text-gray-800">
                    Pages
                  </button>
                </div>
                <button className="group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Chart */}
            <div>
              <div className="content flex justify-between pt-2 group">
                <div className="flex gap-3 justify-center">
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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>

                  <button className=" duration-300 group-hover:text-gray-800">
                    Chart
                  </button>
                </div>
              </div>
            </div>
            {/* Table */}
            <div>
              <div className="content flex justify-between pt-2 group">
                <div className="flex gap-3 justify-center">
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
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>

                  <button className=" duration-300 group-hover:text-gray-800">
                    Table
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border mt-4 border-gray-500"></div>
        </div>
      </aside>

      {/* Main Nav */}
      <section className=" col-span-8 p-2  bg-gray-100 shadow-lg  ">
        <div className="outer-container flex items-center justify-between flex-1 p-4 w-full">
          {/* Search box */}
          <form class=" group hover:scale-105 duration-300 transition-all flex items-center w-1/3 pl-2 ">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative flex-1">
              <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
          {/* Profile box */}
          <div className="flex items-center gap-3 pr-4 pt-4">
            <img
              src={logo}
              alt=""
              className="h-8 w-8 rounded-full"
            />
            <p className="font-semibold text-gray-500">Jhon Doe</p>
          </div>
        </div>
      </section>
      {/* Children boject */}
      <section className="border-8 col-span-8 row-span-auto bg-gray-200 ">
        {children}
      </section>
    </div>
  );
}

export default Base;
