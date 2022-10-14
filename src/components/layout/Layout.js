import React from "react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

import Topbar from '../menu/topbar/Topbar';
import Sidebar from '../menu/sidebar/Sidebar';


export default function Layout(props) {




  return (
    <div className='grid grid-rows-[2fr 10fr]'>
      <div className='w-full shadow-xl'>
        <Topbar />
      </div>
      <div className='grid grid-cols-12'>

        <div className='hidden h-full sm:grid col-span-2'>
          <Sidebar />
        </div>

        <div className='bg-slate-500 shadow min-h-screen col-span-12 sm:col-span-10 justify-end items-end'>
          {props.content}

        </div>
      </div>
    </div>
  );
}

