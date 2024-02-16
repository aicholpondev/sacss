import React from 'react';
import apply from '../../assests/img/apply.png'
const Apply = () => {
    return (
        <section id="apply">
            <div className="container">
                <div className="apply">
                    <div className="apply__global">
                        <img src={apply} alt="img"/>
                        <div className="apply__text">
                            <h1>Apply AI, Deep Learning and Data Sciece to solve</h1>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <button>Learn More</button>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Apply;