import React from "react";

export const Card = ({ data }) => {
  return (
    <div className="pb-5 ">
      <div className="container color p-1 concard ">
        <div className="row ">
          <div className="card-align d-flex ">
            {data.map((list) => (
              <div className=" card-top ">
                <div className="pony">
                  <icon className="round "> {list.icons} </icon>
                </div>

                <div className="card-body carden text-center ">
                  {" "}
                  <h1> {list.name}</h1>
                  <p className="text-center ">{list.description}</p>
                  <button className="btn btn-light btn-">{list.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
