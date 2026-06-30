import React from "react";


export default function Todo() {
  return (
    <div className="bg-white rounded-xl mt-4 h-100 shadow-md p-6 w-200 ">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>

      {/* Input */}
      <div className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Add new task..."
          className="flex-1 border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md">
          Add
        </button>
      </div>

      {/* Todo Items */}
      <div className="space-y-3">
        {/* Item */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-gray-400"></div>
            <span className="text-gray-800">Design dashboard layout</span>
          </div>

          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
            Pending
          </span>
        </div>

        {/* Completed Item */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500"></div>
            <span className="line-through text-gray-400">
              Fix login bug
            </span>
          </div>

          <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
            Done
          </span>
        </div>

        {/* Item */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-gray-400"></div>
            <span className="text-gray-800">Update sales chart</span>
          </div>

          <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
            Pending
          </span>
        </div>
      </div>
    </div>
  );
}
