import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VinylCard from './VinylCard';


const VinylsHorizontalBanner = (props) => {
    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const dbPath = (props);
    const splitedName=(JSON.stringify(dbPath).split(":"));
    const deletedquote=splitedName[1].split('"');
    useEffect(() => {
        if(playOnce){
            axios.get(
                `http://localhost:8090/${deletedquote[1]}`
                )
            .then((res) => {
                setData(res.data);
                setPlayOnce(false);
            })
        }
    });

    return (
        <div className='vinylsHorizontalBanner'>
            {data.map((albums) => (
            <VinylCard albums={albums} key={albums.id}/>
            ))}
        </div>
    );
};

export default VinylsHorizontalBanner;