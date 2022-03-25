import React from 'react';

const SearchFields = () => {
    return (
        <div className='searchFields'>
             {/* composant pour le formulaire de recherche, a mettre en lien avec le back */}
            <h3>Filter products</h3>
            <hr/>
            <h4>You're searching for:</h4>
            <div className='search-div'>
                 {/* champ de recherche */}
                <div>
                    <input></input>
                </div>
                <div>
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <hr/>
             {/* selection du format du vinyl (33 ou 45 tours)  */}
            <h4>Format</h4>
            <select name="format" id="format-selected">
                <option value="any">Any</option>
                <option value="3">3"</option>
                <option value="7">7"</option>
            </select>
            <hr/>
             {/* selection du genre de l'album, recuperer tous les genres présents dans la bdd */}
            <h4>Genre</h4>
            <select name="genre" id="genre-selected">
                <option value="any">Any</option>
                <option value="african">African</option>
                <option value="alternative-modern">Alternative / Modern</option>
            </select>
            <hr/>
            {/* selection du label de l'album, recuperer tous les labels présents dans la bdd */}
            <h4>Label</h4>
            <select name="label" id="label-selected">
                <option value="any">Any</option>
                <option value="act-music">Act Music</option>
                <option value="be-with-records">Be With Records</option>
            </select>
            <hr/>
            {/*  choix de la periode de sortie de l'album*/}
            <h4>Release date</h4>
            <fieldset id="search-release-period">
                <div className='radio-input-div'>
                    <input type="radio" id="anytime" name="release-period"></input>
                    <label for="anytime">Any Time</label>
                </div>
                <div className='radio-input-div'>
                    <input type="radio" id="upcoming" name="release-period"></input>
                    <label for="upcoming">Upcoming</label>
                </div>
                <div className='radio-input-div'>
                    <input type="radio" id="new-this-week" name="release-period"></input>
                    <label for="new-this-week">New this week</label>
                </div>
                <div className='radio-input-div'>
                    <input type="radio" id="new-this-month" name="release-period"></input>
                    <label for="new-this-month">New this month</label>
                </div>
                <div className='radio-input-div'>
                    <input type="radio" id="new-this-year" name="release-period"></input>
                    <label for="new-this-year">New this year</label>
                </div>
            </fieldset>  
            <hr/> 
            {/* bouton pour reinitialiser les champs de recherche, a mettre en place*/}
            <button className='reset' id="reset">Reset</button>
        </div>
    );
};

export default SearchFields;