import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DetailsCard from '../components/DetailsCard';

const Details = () => {
    const url = window.location.href
    const path = (url.split("/"));
    const id = path[4];

    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    useEffect(() => {
        if(playOnce){
            axios.get(
                `http://localhost:8090/ourSelection/${id}`
            )
            .then((res) => {
                setData(res.data);
                setPlayOnce(false);
            })
        }
    });

    return (
        <div className='details'>
                <DetailsCard album={data}/>
        </div>
    );
};

export default Details;