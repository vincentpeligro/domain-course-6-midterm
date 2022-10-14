import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const VenueSinglePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVenue(data.venue);
        // setSchedule(data.schedules[0]);
        setSchedule(data.schedules)
      });
  }, []);
  console.log(schedule);
  console.log(venue);

  return (
    <>
      <div className="m-3">
        <h1 className="text-center m-4 bg-secondary text-white">Mater Dei College {venue.building}</h1>
        ID: {id}
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
            <tr>
              <td>{venue.id}</td>
              <td>{venue.name}</td>
              <td>{venue.building}</td>
              <td>{venue.capacity}</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-center m-4 text-white bg-secondary">Schedules</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Course No.</th>
              <th scope="col">Description</th>
              <th scope="col">Schedule</th>
              <th scope="col">Size</th>
              <th scope="col">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((sched, index) => {
              return (
                  <tr key={index}>
                    <td>{schedule[sched].id}</td>
                    <td>{schedule[sched].course_no}</td>
                    <td>{schedule[sched].description}</td>
                    <td>{schedule[sched].schedule}</td>
                    <td>{schedule[sched].size}</td>
                    <td>{schedule[sched].teacher}</td>
                  </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/" className="btn btn-sm btn-primary mb-5">
          back to venues
        </Link>
      </div>
    </>
  );
};

export default VenueSinglePage;
