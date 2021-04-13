import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SideBar from '../SideBar/SideBar';

const AddEvent = () => {

    const [event, setEvent] = useState({});

    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = (e) => {
        const newEvent = event;
        newEvent[e.target.name] = e.target.value;
        setEvent(newEvent);
    }

    const handleAddEvent = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your event is inserted');
                history.replace('/');
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <SideBar />
                </div>
                <div className="col-md-8">
                    <form onSubmit={handleAddEvent}>
                        <input onBlur={handleOnBlur} name="name" className="form-control" type="text" placeholder="Event Name" required /> <br />
                        <input onBlur={handleOnBlur} name="description" className="form-control" type="text" placeholder="Event Description" required /> <br />
                        <input onBlur={handleOnBlur} name="img" className="form-control" type="text" placeholder="Image URL" required /> <br />
                        <button className="form-control" className="btn btn-primary">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;