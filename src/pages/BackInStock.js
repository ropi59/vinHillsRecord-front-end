import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchCard from '../components/SearchCard';

const BackInStock = () => {
    {/* page des retours récents en stock */}
    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    {/* recuperation des albums retournés en stock, a gerer avec le back */}
    useEffect(() => {
        if(playOnce){
            axios.get(
                `http://localhost:8090/top10`
            )
        .then((res) => {
            setData(res.data);
            setPlayOnce(false);
        })
        }
    });

    return (
        <div className='search'>
            <div className='right-part'>
                <div className='searchHeader'>
                    {/* bouton de tri des albums selon la popularité, l'ordre alphabétique, les nouveautés... a mettre en place*/}
                    <div>
                        <select name="sort" id="sort">
                            <option value="most-relevant">Most Relevant</option>
                            <option value="most-popular">Most Popular</option>
                            <option value="newest-released">Newest Released</option>
                            <option value="oldest-released">Oldest Released</option>
                            <option value="newest-listed">Newest Listed</option>
                            <option value="newest-released">Newest Released</option>
                            <option value="alphabetical-order">Alphabetical (A - Z)</option>
                            <option value="alphabetical-invert-order">Alphabetical (Z - A)</option>
                        </select>
                    </div>
                </div>
                <div className='albumsContainer'>
                    {/* map des albums récupérés dans des searchCards, voir combien d'albums ont affiche par page... */}
                    {data.map((albums) => (
                        <SearchCard albums={albums} key={albums.id} style={{height: "20%" , width: "20%"}}/>
                    ))}
                </div>
                {/* boutons de navigation des pages, a mettre en place */}
                <div className='page-selector'>
                    <div className='previous'>
                        <button className='nav-button'><i class="fa-solid fa-angle-left"></i>  Previous</button>
                    </div>
                    <div className='pages-buttons'>
                        <button className='nav-number-button'>1</button>
                        <button className='nav-number-button'>2</button>
                        <button className='nav-number-button'>3</button>
                    </div>
                    <div className='previous'>
                        <button className='nav-button'>Next  <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackInStock;