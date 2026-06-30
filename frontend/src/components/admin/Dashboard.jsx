import React, { useState, useEffect } from "react";
import SalesChart from "./SalesChart";
import Calendar from "./Calendar";
import Todo from "./Todo";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/allusers");
        const response1 = await axios.get("/getProduct");
        const response2 = await axios.get("/getOrders");
        setUsers(response.data.data);
        setProducts(response1.data.data);
        setOrders(response2.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="ml-64 mt-16 bg-cyan-100 h-screen">
      <div className=" text-cyan-900 p-6 rounded">
        <h1 className="text-4xl font-semibold">Dashboard</h1>

        {/**card for item */}
        <div className="flex gap-13 w-full">
          <div className="relative bg-blue-500 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-300">{users?.length ?? 0}</h1>
            <p className="text-2xl m-4 font-sans text-gray-300">Users</p>

            {/* bottom bar */}
            <Link to={"/admin/users"}>
            <div className="absolute bottom-0 left-0 w-full bg-blue-900 text-center py-2 cursor-pointer hover:bg-blue-800 transition">
              <span className="flex text-white items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
            </Link>
          </div>

          <div className="relative bg-purple-400 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-200">{products?.length ?? 0}</h1>
            <p className="text-2xl m-4 font-sans text-gray-100">Total Products</p>
            <Link to={"/admin/products"}>
            <div className="absolute bottom-0 left-0 w-full bg-purple-700 text-center text-white py-2 cursor-pointer hover:bg-black/20 transition">
              <span className="flex items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
            </Link>
          </div>

          <div className="relative bg-cyan-600 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-300">{orders?.length ?? 0}</h1>
            <p className="text-2xl m-4 font-sans text-gray-300">Total Orders</p>
            <Link to={"/admin/orders"}>
            <div className="absolute bottom-0 left-0 w-full bg-cyan-900 text-white text-center py-2 cursor-pointer hover:bg-black/20 transition">
              <span className="flex items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
            </Link>
          </div>
          <div className="relative bg-slate-400 mt-4 h-40 w-90 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <h1 className="text-4xl m-4 font-bold text-gray-300">120</h1>
            <p className="text-2xl m-4 font-sans text-gray-200">Unique visitors</p>
            <div className="absolute bottom-0 left-0 w-full bg-slate-700 text-white text-center py-2 cursor-pointer hover:bg-black/20 transition">
              <span className="flex items-center justify-center gap-1 text-sm">
                More info <span>➜</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/**add component of sale */}
      <SalesChart />
      <div className="flex bg-cyan-100">
        <Calendar />
        <Todo />
      </div>
    </div>
  );
}
