import React, { useEffect, useState } from 'react';

export const CarousselItem = ({ children, width }) => {
    return (
        <div className='caroussel-item' style={{ width: width }}>
            {children}
        </div>
    )
}

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
            <div className='inner' style= {{transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index ) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className='indicators-container'>
                <div className='indicators'>
                    {React.Children.map(children, (child, index) => {
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