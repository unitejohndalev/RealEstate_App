import React, { useContext } from "react";
import { ImSpinner2 } from "react-icons/im";
import { HouseContext } from "./HouseContext";
import { Link } from "react-router-dom";
import House from "./House";

const HouseList = () => {
  //context
  const { houses, loading } = useContext(HouseContext);

  //if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin to-violet-700 text-4xl mt-[220px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt48">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-2">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`./property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
