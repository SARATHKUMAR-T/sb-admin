import React from "react";
import Base from "./Base";

function Others() {
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
        {/* Main-content */}

        <div className="flex   gap-8">
          <div className="w-1/2 flex flex-col gap-8">
            {/* Box-1 */}
            <div id="box-1">
              <div className="shadow-lg  bg-white rounded-lg text-left ">
                <h1 className="font-bold text-lg p-4 mb-2">
                  Overflow Hidden Utilty
                </h1>
                <div className="border-[1px] border-gray-300 "></div>
                <p className="p-4">
                  Use .o-hidden to set the overflow property of any element to
                  hidden.
                </p>
              </div>
            </div>
            {/* Box-2 */}
            <div id="box-2">
              <div className="shadow-lg  bg-white rounded-lg text-left ">
                <h1 className="font-bold text-lg p-4 mb-2">
                  Progress Small Utility
                </h1>
                <div className="border-[1px] border-gray-300 "></div>
                <p className="p-4">
                  Use the .progress-sm class along with .progress
                </p>
              </div>
            </div>

             {/* Box-3 */}
             <div id="box-3">
              <div className="shadow-lg  bg-white rounded-lg text-left ">
                <h1 className="font-bold text-lg p-4 mb-2">
                Dropdown - No Arrow
                </h1>
                <div className="border-[1px] border-gray-300 "></div>
                <p className="p-4">
                Add the .no-arrow class alongside the .dropdown
                </p>
              </div>
            </div>
          </div>



          {/* Box-right*/}
          <div id="box-2" className="w-1/2">
            <div className="shadow-lg  bg-white rounded-lg text-left ">
              <h1 className="font-bold text-lg p-4 mb-2">Rotation Utilities</h1>
              <div className="border-[1px] border-gray-300 "></div>
              {/* 2_containers */}

              <div className="flex flex-col items-center p-16 text-center text-white gap-8">
                <div className="w-28 h-12 bg-blue-400 rotate-45">
                  .rotate-15
                </div>
                <div className="w-28 h-12 bg-blue-400 rotate-45">
                  .rotate-15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Others;
