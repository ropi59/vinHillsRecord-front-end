import React, { useEffect, useState } from 'react';

export const CarousselItem = ({ children, width }) => {
    {/* composant caroussel*/}
    {/* item du caroussel*/}
    return (
        <div className='caroussel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

{/* attribution de l'index du caroussel pour changer l'item a afficher*/}
const Caroussel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0 ) {
            newIndex = React.Children.count(children) - 1 ;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    {/*  fonction pour changer l'index avec vitesse de transition en ms*/}
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    })
    return (
        <div className='caroussel'>
            {/* animation de changement d'item par translation a la largeur de l'item*/}
            <div className='inner' style= {{transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index ) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            {/* boutons d'item cliquable avec changement d'etat selon la page active*/}
            <div className='indicators-container'>
                <div className='indicators'>
                    {/* creation d'autant de boutons qu'on a d'items*/}
                    {React.Children.map(children, (child, index) => {
                        {/* changement d'état du bouton si l'item est affiché, bouton cliquable pour afficher l'item selectionné*/}
                        return (
                            <button className={ `${index === activeIndex ? "active" : ""}`} style={{padding: "1em"}} onClick={ () => {
                                updateIndex(index);
                            }}>  
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Caroussel;