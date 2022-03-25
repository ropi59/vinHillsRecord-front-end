import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DetailsCard from '../components/DetailsCard';

const Details = () => {
    {/* page d'affichage des details d'un album*/}
    {/* recupération de l'url de la page active*/}
    const url = window.location.href
    const path = (url.split("/"));
    {/* récupération de l'id de l'album depuis le path*/}
    const id = path[4];

    {/* récupération des infos de l'album depuis son id, revoir le chemin avec le back*/}
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
            {/* affichage des infos de l'album récupérées dans une detailsCard*/}
                <DetailsCard album={data}/>
        </div>
    );
};

export default Details;