import React from "react";
import Header from "./Header";
import Footer from "./footer";
import "./homeLayout.css";
const HomeLayout = ({children}) =>{
    return(
        <>
        <Header></Header>
        <div className="homes-container">
            <div style={{minheight:"280vh"}}>
                {children}
            </div>
        <Footer></Footer>
        </div>
        </>
    )

}
export default HomeLayout;