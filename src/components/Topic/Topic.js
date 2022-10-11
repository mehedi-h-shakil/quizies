import React from "react";

const Topic = ({ quiz }) => {
  const { id, name, logo } = quiz;

  return (
    <div>
      <div className="card w-96 bg-gray-300 shadow-xl">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
