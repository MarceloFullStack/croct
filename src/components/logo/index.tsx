import React from "react";
const pathImage = "https://my.vioo.world/wp-content/uploads/2021/05/19060454/Croct-1-300x300.png";

// center image
const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10em",
    height: "10em",
};
export const Logo = () => {
    return  <img style={style}  src={pathImage} alt="logo" onClick={()=>{
        location.href = "https://github.com/MarceloFullStack";
    }}/>;
};