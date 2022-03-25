import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VinylCard from './VinylCard';


const VinylsHorizontalBanner = (props) => {
    {/* récupération des datas pour les bannieres horizontales, a revoir avec le back */}
    const [data, setData] = useState([]);
    {/* variable pour ne faire qu'un appel à l'api */}
    const [playOnce, setPlayOnce] = useState(true);
    {/* récupération du chemin dans le composant parent */}
    const dbPath = (props);
    {/* découpe du chemin pour n'en prendre que la partie necessaire */}
    const splitedName=(JSON.stringify(dbPath).split(":"));
    const deletedquote=splitedName[1].split('"');
    {/* on recupere les datas depuis la bdd une seule fois */}
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
            {/* map et affichage des albums selectionnés dans chaque banniere, ATTENTION n'en mettre que 4 depuis le back */}
            {data.map((albums) => (
            <VinylCard albums={albums} key={albums.id}/>
            ))}
        </div>
    );
};

export default VinylsHorizontalBanner;