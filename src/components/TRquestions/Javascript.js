import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './TRstyles.css'
const Javascripttrquestions = () => {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        axios.get('https://login-6c09b-default-rtdb.firebaseio.com/javascriptquestions.json')
            .then(response => setData(response.data));
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='mainbox'>
            {data.map((item, index) => (
                
                <div className='box' key={index}>
                    <div className="accordion-item">
                        <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                           {item.id}. {item.question}
                        </div>
                        <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                            {item.answer}
                        </div>
                    </div>
                </div>
              
            ))}
        </div>
    );
}

export default Javascripttrquestions;
