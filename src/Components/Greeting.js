import React from "react";

const Wishes=props=>{
    const {name,subName}=props
    return (
        <div>
            <h1>Welcome to {name} .{subName}</h1>
        </div>
    );
}

export default Wishes;