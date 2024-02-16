import React from 'react';
import one from'../../assests/img/blockone.svg'
import two from'../../assests/img/blocktwo.svg'
import three from '../../assests/img/blockthree.svg'

const Block = () => {
    return (
        <section id="block">
            <div className="container">
                <div className="block">
                    <div className="block__general">
                        <div className="block__one">
                            <img src={one} alt="img"/>
                            <h1>Naxly as the Winners in Global Agency Awards</h1>
                            <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                        <div className="block__one">
                            <img src={two} alt="img"/>
                            <h1>Expert Prespective Agency Awards</h1>
                            <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                        <div className="block__one">
                            <img src={three} alt="img"/>
                            <h1>Business Prespective Global Agency Awards</h1>
                            <p>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Block;