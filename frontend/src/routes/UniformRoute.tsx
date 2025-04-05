import React from "react";
import Uniform from "../components/Uniform";
import unimage from "../assets/uniform.jpeg";
import trackimg from "../assets/track_f.jpg";

const UniformRoute = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-bold mb-5">NCC Army Wing Uniform</h1>
            <Uniform imageUrl={unimage} />
            <h1 className="text-3xl font-bold mb-5 mt-10">NCC Tracks</h1>
            <Uniform imageUrl={trackimg} />
        </div>
    )
}

export default UniformRoute;