import React, { useEffect, useState } from 'react';
// import eventData from '../fakeData/fakeData.json';
import SingleEvent from '../SingleEvent/SingleEvent';

const Home = () => {

    // const handleAllInsert = () => {
    //     fetch('http://localhost:5000/addEvents', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(eventData)
    //     })
    // }

    const [eventData, setEventData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEventData(data))
    }, [])

    return (
        <div className="container">
            <h3 className="text-center m-5">I GROW BY HELPING PEOPLE IN NEED</h3>
            <div className="d-flex justify-content-center m-5">
                <input type="text" className="form-control w-50" placeholder="Search event..." />
                <button className="btn btn-primary">Search</button>
            </div>
            {/* <button onClick={handleAllInsert}>Insert All Events</button> */}
            <div className="row">
                {
                    eventData.map(event => <SingleEvent key={event._id} event={event}></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default Home;