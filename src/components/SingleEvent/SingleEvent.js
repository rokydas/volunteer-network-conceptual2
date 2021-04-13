import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {

    const event = props.event;
    const { _id, name, img } = event;

    return (
        <div className="col-md-3 mb-5">
            <Link to={`/registration/${_id}`}>
                <div className="shadow rounded p-3 m-2 h-100">
                    <img className="img-fluid" src={img} alt="" />
                    <h4 className="text-decoration-none">{name}</h4>
                </div>
            </Link>
        </div>

    );
};

export default SingleEvent;