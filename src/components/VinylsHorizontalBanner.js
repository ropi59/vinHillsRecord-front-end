import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VinylCard from './VinylCard';


const VinylsHorizontalBanner = (props) => {
    const [data, setData] = useState([]);
    const dbPath = (props);
    const splitedName=(JSON.stringify(dbPath).split(":"));
    const deletedquote=splitedName[1].split('"');
    useEffect(() => {
        axios.get(
            `http://localhost:8080/${deletedquote[1]}`
            )
        .then((res) => setData(res.data));
    })

    return (
        <div className='vinylsHorizontalBanner'>
            {data.map((albums) => (
            <VinylCard albums={albums} key={albums.id}/>
            ))}
        </div>
    );
};

export default VinylsHorizontalBanner;