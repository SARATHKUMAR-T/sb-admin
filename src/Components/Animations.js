import React from "react";
import Base from "./Base";
function Animations() {
  function addtoggle() {
    const d1 = document.getElementById("toggle-a");
    d1.classList.toggle("hidden");
  }
  function addtog(){
    const d2 = document.getElementById("toggle-b");
    d2.classList.toggle("hidden");
  }
  return (
    <Base>
      <div className="p-4 min-h-screen">
        {/* Title-box */}
        <div className="mb-4 p-2">
          <h1 className="font-bold text-3xl mb-4">Buttons</h1>
          <p>
            Bootstrap's default utility classes can be found on the official
            Bootstrap Documentation page. The custom utilities below were
            created to extend this theme past the default utility classes built
            into Bootstrap's framework.
          </p>
        </div>
        {/* Content box */}
        <div className="grid grid-cols-2 p-4 gap-4">
          {/* Left side box */}
          <div className="shadow-lg  bg-white rounded-xl p-4 text-left">
            <h1 className="font-bold text-lg mb-4">Grow In Animation Utilty</h1>
            <p className="font-narrow text-red-400 pl-2 mb-4">
              .animated--grow-in
            </p>
            <p className="text-sm text-gray-400">Navbar Dropdown Example:</p>

            {/* Navbar */}
            <div class="relative inline-block text-left pt-4  mb-8">
              <div>
                <button
                  onClick={addtoggle}
                  type="button"
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Options
                  <svg
                    class="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="toggle-a"
                class="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Note: This utility animates the CSS transform property, meaning it
              will override any existing transforms on an element being
              animated! In this theme, the grow in animation is only being used
              on dropdowns within the navbar.
            </p>
          </div>

          {/* Right side box */}
          <div className="shadow-lg  bg-white rounded-xl p-4 text-left">
            <h1 className="font-bold text-lg mb-4">
              {" "}
              Fade In Animation Utilty
            </h1>
            <p className="font-narrow text-red-400 pl-2 mb-4">
              .animated--fade-in
            </p>
            <p className="text-sm text-gray-400">Navbar Dropdown Example:</p>

            {/* Navbar */}
            <div class="relative inline-block text-left pt-4 mb-8">
              <div>
                <button
                  onClick={addtog}
                  type="button"
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Options
                  <svg
                    class="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="toggle-b"
                class="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Account settings
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Support
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    License
                  </a>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Note: This utility animates the CSS opacity property, meaning it
              will override any existing opacity on an element being animated!
            </p>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Animations;
