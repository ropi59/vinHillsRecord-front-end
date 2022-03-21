import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios"
import Top10Card from './Top10Card';

const Top10 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get(
        "http://localhost:8080/top10"
      )
      .then((res) => setData(res.data));
  
    }, []);
    return (
        <div className='top10'>
            <div className='titleContainer'>
                <h3>Top 10</h3>
            </div>
            <div className='content'>
            {data.map((albums) => (
                <Top10Card albums={albums} key={albums.id} />
                ))}
            </div>
        </div>
    );
};

export default Top10;