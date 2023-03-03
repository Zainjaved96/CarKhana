import React from "react";
import { Link } from "react-router-dom";

function SearchCards(props) {
    const {name, userId , year, 
    rentalPrice
    ,type
    ,passengerCount,
    mileage,
    horsepower, imageName} = props.car
  return (
        <div className="flex-col my-2 sm:flex-row flex  sm:items-center py-2 bg-white px-2 rounded shadow-sm">
        <div className="flex justify-center">
            <img src={require(`../../images/${imageName}`)} className="w-[164px] h[129px]" alt="" />
        </div>
        <div className="flex  flex-col  sm:px-5">
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-base text-muted">{year}</p>
            <div className="flex gap-2 py-2 flex-col sm:flex-row">
            <div className="flex ">
                <p className="text-muted text-sm">Passengers:</p>
                <p className="text-sm">{passengerCount}</p>
            </div>
            <div className="flex items-center">
                <p className="text-sm text-muted ">Gear:</p>
                <p className="text-sm">{type}</p>
            </div>
            <div className="flex items-center">
                <p className="text-sm text-muted ">Mileage:</p>
                <p className="text-sm">{mileage} mph</p>
            </div>
            <div className="flex items-center">
                <p className="text-sm text-muted ">Horsepower:</p>
                <p className="text-sm">{horsepower} </p>
            </div>
            </div>
        </div>
        
        <div className="flex flex-col sm:ml-auto sm:mr-3">
            <h1 className="text-xl font-semibold">{userId + rentalPrice}$</h1>
            <p className="text-base text-muted">Per day</p>
            <Link  to="/product-details" state={props.car}  className="py-2 px-2 mt-2 bg-carRed rounded text-white hover:bg-darkRed cursor-pointer">
            Rent Now
            </Link>
        </div>
        </div>
  );
}

export default SearchCards;
