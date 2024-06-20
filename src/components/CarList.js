import React from 'react';
import CarItem from "./CarItem";
import "./CarList.css"

const CarList = ({ data }) => {
  return (
    <div className="container">
      {data['Results'].slice(0, 5).map((val, key) => <CarItem key={key} data={val}/>)}
    </div>
  );
};

export default CarList;