import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const faqs = [
        {
            question: 'First question?',
            answer: 'First answer.'
        },
        {
            question: 'Second question?',
            answer: 'Second answer.'
        },
        {
            question: 'Third question?',
            answer: 'Third answer.'
        },
        {
            question: 'Fourth question?',
            answer: 'Fourth answer.'
        },
        {
            question: 'Fifth question?',
            answer: 'Fifth answer.'
        },
        {
            question: 'Sixth question?',
            answer: 'Sixth answer.'
        },
        {
            question: 'Seventh question?',
            answer: 'Seventh answer.'
        }
    ];

    const filteredFaqs = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id="FAQ">
            <h1>FAQ</h1>
            <input
                id="faqSearch"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {filteredFaqs.map((faq, index) => (
                <div className="FAQtab" key={index}>
                    <div className="FAQflex" onClick={() => handleClick(index)}>
                        <h2>{faq.question}</h2>
                        <div className="arrow">
                            {<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"/>
</svg>}
                        </div>
                    </div>
                    {activeIndex === index && (
                        <div className="content">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;