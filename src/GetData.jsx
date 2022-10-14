import React, { useEffect, useState } from "react";
import { SiPostman } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import "./index.css";

const GetData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => res.json())
      .then((res) => setData(res.venues));
  }, []);

  const goSingleVenue = (venue) => {
    navigate(`/api/venue/${venue}`);
  };

  return (
    <>
      <h1 className="text-center m-4 bg-secondary text-white">Mater Dei College Venues</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Building</th>
            <th scope="col">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((venue, index) => {
            return (
              <tr key={index}>
                <td>{data[venue].id}</td>
                <td>{data[venue].name}</td>
                <td>{data[venue].building}</td>
                <td className="d-flex justify-content-between  align-items-center">
                  <div>{data[venue].capacity}</div>
                  <SiPostman
                    className="link"
                    onClick={() => {
                      goSingleVenue(data[venue].id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GetData;
