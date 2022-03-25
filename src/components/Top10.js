import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios"
import Top10Card from './Top10Card';

const Top10 = () => {
    {/* recuperation des datas du top 10, a refaire en lien avec le back*/}
    const [data, setData] = useState([]);
    {/* variable pour trier les datas */}
    const [sortedData, setSortedData] = useState([]);
    {/* variable pour faire une seule fois la recuperation de datas */}
    const [playOnce, setPlayOnce] = useState(true);

    {/* recuperation des 10 albums les plus vendus  */}
    useEffect(() => {
        if(playOnce){
            axios.get(
                "http://localhost:8090/top10"
            )
            .then((res) => {
                setData(res.data);
                {/* une fois récupérer on arrete de faire l'appel a l'api*/}
                setPlayOnce(false);
            });
        }
            
        {/* fonction pour trier les 10 albums du plus au moins vendus*/}
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
            {/* component qui contient le top 10*/}
            <div className='titleContainer'>
                <h3>Top 10</h3>
            </div>
            <div className='content'>
                {/* map des données triées dans les card top10card*/}
            {sortedData.map((albums) => (
                <Top10Card albums={albums} key={albums.id} />
                ))}
            </div>
        </div>
    );
};

export default Top10;