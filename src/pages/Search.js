import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchFields from '../components/SearchFields';
import SearchCard from '../components/SearchCard';

const Search = () => {
    {/* page de recherche d'un album*/}
    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    {/* recuperation des albums, a mettre en lien avec le back*/}
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
            <div className='left-part'>
                {/* composant affichant les critères de recherche*/}
                <SearchFields />
            </div>
            <div className='right-part'>
                <div className='searchHeader'>
                    <div>
                        {/* bouton de tri selon critères, a mettre en place*/}
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
                    {/* map des albums récupérés, a mettre a jour avec le back, voir comment actualiser les datas avec la recherche et la limite d'albums a ressortir*/}
                    {data.map((albums) => (
                        <SearchCard albums={albums} key={albums.id} style={{height: "20%" , width: "20%"}}/>
                    ))}
                </div>
                {/* boutons de navigation de pages, a voir si necessaire de mettre en place*/}
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

export default Search;