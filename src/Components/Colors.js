import React from "react";
import Base from "./Base";

function Colors() {
  return (
    <Base>
      <div className="p-4 min-h-screen">
        <div className="mb-4 p-2">
          <h1 className="font-bold text-3xl mb-4">Buttons</h1>
          <p>
            Bootstrap's default utility classes can be found on the official
            Bootstrap Documentation page. The custom utilities below were
            created to extend this theme past the default utility classes built
            into Bootstrap's framework.
          </p>
        </div>
        {/* Content-box */}
        <div className="grid grid-cols-3 items-start  grid-rows-auto gap-8">
          {/* Color-Box */}
          <div className="shadow-lg  bg-white rounded-xl p-2 text-center">
            <h1 className="font-bold text-lg mb-4">
              Custom Text Color Utilities
            </h1>
            <div className="content-box text-left   font-semibold text-gray-600 flex flex-col gap-8  p-4">
              <div className="bg-gray-500 pl-4  flex flex-col justify-between gap-8">
                <div>.text-gray-100</div>
                <div>.text-gray-200</div>
                <div>.text-gray-300</div>
                <div>.text-gray-400</div>
                <div>.text-gray-500</div>
              </div>
              <div className="pl-4 flex flex-col gap-8">
                <div>.text-gray-600</div>
                <div>.text-gray-700</div>
                <div>.text-gray-800</div>
              </div>
            </div>
          </div>
          {/* BG-gradiant */}
          <div className="shadow-lg rounded-xl bg-white p-2 text-center">
            <h1 className="font-bold text-lg mb-4">
              Custom Background Gradient Utilities
            </h1>
            <div className="flex flex-col p-4">
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-blue-400 to-blue-700">
                .bg-gradient-primary
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-yellow-400 to-yellow-700">
                .bg-gradient-secondary
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-red-400 to-red-700">
                .bg-gradient-success
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-cyan-400 to-cyan-700">
                .bg-gradient-info
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-green-400 to-green-700">
                .bg-gradient-warning
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-pink-400 to-pink-700">
                .bg-gradient-danger
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-gray-400 to-gray-700">
                .bg-gradient-title
              </div>
              <div className="h-28 bg-gradient-to-b text-left pt-10 pl-2 font-semibold text-white from-orange-400 to-orange-700">
                .bg-gradient-slate
              </div>
            </div>
          </div>
          {/* Grayscale box */}
          <div className="shadow-lg rounded-xl bg-white p-2 text-center">
            <h1 className="font-bold text-lg mb-4">
              Custom Background Gradient Utilities
            </h1>
            <div className="flex flex-col p-4">
              <div className="h-14  text-left pt-4 pl-2 font-semibold text-gray-500 bg-gray-100 ">
                .bg-gray-100
              </div>
              <div className="h-14  text-left pt-4 pl-2 font-semibold text-gray-500 bg-gray-200 ">
                .bg-gray-200
              </div>
              <div className="h-14  text-left pt-4 pl-2 font-semibold text-gray-500 bg-gray-300 ">
                .bg-gray-300
              </div>
              <div className="h-14  text-left pt-4 pl-2 font-semibold text-gray-500 bg-gray-400 ">
                .bg-gray-400
              </div>
              <div className="h-14  text-left pt-4 pl-2 font-semibold text-gray-700 bg-gray-500 ">
                .bg-gray-500
              </div>
              <div className="h-14  text-left pt-4 pl-2 font-semibold text-gray-500 bg-gray-600 ">
                .bg-gray-600
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Colors;
