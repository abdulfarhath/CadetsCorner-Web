import React from "react";

interface UniformProps {
    imageUrl: string;
}

const Uniform: React.FC<UniformProps> = ({ imageUrl }) => {
    return (
        <div className="flex flex-row justify-center items-center p-5">
            <img
            src={imageUrl}
            alt="Uniform"
            className="w-[40%] h-auto rounded-lg"
            />
        </div>
    );
};

export default Uniform;