import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchFields from '../components/SearchFields';
import SearchCard from '../components/SearchCard';

const Search = () => {
    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

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
                <SearchFields />
            </div>
            <div className='right-part'>
                <div className='searchHeader'>
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
                    {data.map((albums) => (
                        <SearchCard albums={albums} key={albums.id} style={{height: "20%" , width: "20%"}}/>
                    ))}
                </div>
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