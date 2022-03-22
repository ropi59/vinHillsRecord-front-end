import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios"
import Top10Card from './Top10Card';

const Top10 = () => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {
        if(playOnce){
            axios.get(
                "http://localhost:8080/top10"
            )
            .then((res) => {
                setData(res.data);
                setPlayOnce(false);
            });
        }
            
        const sortedTop10Albums = () => {
            const albumsObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = albumsObj.sort((a, b) => {
                return b.sales - a.sales
            })
            sortedArray.length = 10;
            setSortedData(sortedArray)
        }
        sortedTop10Albums();
    }, [data, playOnce]);

    return (
        <div className='top10'>
            <div className='titleContainer'>
                <h3>Top 10</h3>
            </div>
            <div className='content'>
            {sortedData.map((albums) => (
                <Top10Card albums={albums} key={albums.id} />
                ))}
            </div>
        </div>
    );
};

export default Top10;