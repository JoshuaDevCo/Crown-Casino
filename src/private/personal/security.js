import React from "react";
import Topbar from "./../../components/menu/topbar"
import Sidebar from "./../../components/menu/sidebar";


function Security() {
  return (
    <React.Fragment>
      <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout h-full">
        <Topbar />
        <Sidebar />
        <div className="grid grid-in-main bg-gray-600 h-screen ">
          <div className="justify-center items-center flex m-auto ">
            <div className="w-8/12 h-8/12 p-5 m-auto my-2 space-y-3 box-content bg-slate-700 rounded-xl shadow-lg">
              <h1 className="text-white text-2xl text-center text-bold">Security</h1>
              <p className="text-gray-400 mt-1 mb-3 text-center">Add here your trusted wallets to avoid errors and hackings</p>
              <h2 className="text-gray-300 text-center"></h2>
              <h2 className="text-gray-300 mt-1 mb-3 text-center"></h2>
              <div className="block">
                <div className="">
                  <label className="inline text-gray-200 p-2 text-lg"> Wallets ETH:</label>
                  <input className="bg-gray-700 rounded-md w-full p-2 m-2 border border-solid border-gray-500 text-white bg-clip-border" type="text" />
                </div>

                <label className="inline text-gray-200 p-2 text-lg">  Wallets BTC:</label>
                <input className="bg-gray-700 rounded-md w-full p-2 m-2 border border-solid border-gray-500 text-white bg-clip-border" type="text" />
                <hr className="m-2 bg-slate-400"></hr>
                <button className="w-full bg-green-600 hover:bg-green-800  rounded-md p-3 m-2 border border-solid border-gray-500 text-white shadow">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
}

export default Security;
