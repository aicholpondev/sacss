import React from 'react';
import what from '../../assests/img/what.png'

const What = () => {
    return (
        <section id="what">
            <div className="container">
                <div className="what">
                    <div className="what__general">
                        <div className="what__general--text">
                            <h1>What our clients say about our awesome solutions</h1>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not
                            <br/>
                            <br/>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .
                            <br/>
                            <br/>
                                Lorem ipsum is placeholder previewing layouts and visual mockups.
                            <br/>
                            <br/>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                            </p>
                        </div>
                        <img src={what} alt="img"/>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default What;