import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";

import Header from "./components/Header";
import Home from './components/Home';
import ApiTest from './components/ApiTest';
import LeftMenu from "./components/LeftMenu";

const Layout = () => {
    return (
        <div>
            <Header />
            <div style={{display:'flex', width: '100%'}}>       
                <div style={{width:'15%'}}>
                    <LeftMenu />
                </div>
                <div style={{width:'85%'}}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/apiTest" element={<ApiTest />} />
                        </Routes>
                </div>
            </div> 
         </div>           
    )
}
export default Layout;
