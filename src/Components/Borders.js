import React from "react";
import Base from "./Base";

function Borders() {
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
        {/* Border-box */}
        <div className="grid grid-cols-2 grid-rows-auto gap-8">
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-yellow-400">
            <p className="text-start text-gray-400">.border-left-primary</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-yellow-400">
            <p className="text-start text-gray-400">.border-bottom-primary</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-gray-600">
            <p className="text-start text-gray-400">.border-left-secondary</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-gray-600">
            <p className="text-start text-gray-400">.border-bottom-secondary</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-red-400">
            <p className="text-start text-gray-400">.border-left-success</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-red-400">
            <p className="text-start text-gray-400">.border-bottom-success</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-cyan-400">
            <p className="text-start text-gray-400">.border-left-text</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-cyan-400">
            <p className="text-start text-gray-400">.border-bottom-text</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-orange-400">
            <p className="text-start text-gray-400">.border-left-font</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-orange-400">
            <p className="text-start text-gray-400">.border-bottom-font</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-pink-400">
            <p className="text-start text-gray-400">.border-left-grayscale</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-pink-400">
            <p className="text-start text-gray-400">.border-bottom-grayscale</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-l-4 border-green-400">
            <p className="text-start text-gray-400">.border-left-green</p>
          </div>
          <div className="h-24 bg-white pt-8 pl-4 rounded-lg shadow-xl border-b-4 border-green-400">
            <p className="text-start text-gray-400">.border-bottom-green</p>
          </div>
         
        </div>
      </div>
    </Base>
  );
}

export default Borders;
