import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <Link to="/allEvents"><h3>Volunteer Registration List</h3></Link>
            <Link to="/addEvent"><h3>Add Event</h3></Link>
        </div>
    );
};

export default SideBar;