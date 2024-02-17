import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isRotated, setIsRotated] = useState(null); 

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        setIsRotated(isRotated === index ? null : index);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const faqs = [
        {
            question: "Why Lamblink?",
            answer: "Lamblink simplifies FTP server connections with its intuitive interface, allowing users to save and connect to servers effortlessly. It also enables users to create custom FTP connections on their PCs, streamlining workflow with features like drag-and-drop file transfers"
        },
        {
            question: "How do I add a new FTP server to Lamblink?",
            answer: "To add a new FTP server to Lamblink, simply navigate to the + symbol within the interface, where you can input the servers details such as hostname, port, username, and password."
        },
        {
            question: "Can I customize the appearance or layout of the Lamblink interface?",
            answer: "At this time, Lamblink's interface is designed to provide a user-friendly and intuitive experience without customization options for appearance or layout."
        },
        {
            question: "Is Lamblink compatible with all operating systems?",
            answer: "Yes, Lamblink is compatible with both Windows and macOS operating systems."
        },
        {
            question: "Is there a limit to the number of FTP servers I can save in Lamblink?",
            answer: "There is a limit of 10 servers that can be saved in Lamblink. If you need to save more than 10 servers, there is an option to upgrade to the premium version of Lamblink."
        },
        {
            question: "Are there any tutorials available to help me get started with Lamblink?",
            answer: "Yes, Lamblink provides comprehensive tutorials and documentation to assist users in getting started and making the most of the software's features."
        },
        {
            question: "Does Lamblink offer any integrations with other software or services?",
            answer: "At this time, Lamblink does not offer direct integrations with other software or services."
        },
        {
            question: "Is Lamblink available in languages other than English?",
            answer: "Lamblink is currently only available in English, with potential plans for additional language support in the future."
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
                    <div className="FAQflex">
                        <h2>{faq.question}</h2>
                        <div className={`arrow ${isRotated === index ? 'rotated' : ''}`} onClick={() => handleClick(index)}>
                            <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.82054 20.7313C8.21107 21.1218 8.84423 21.1218 9.23476 20.7313L15.8792 14.0868C17.0505 12.9155 17.0508 11.0167 15.88 9.84497L9.3097 3.26958C8.91918 2.87905 8.28601 2.87905 7.89549 3.26958C7.50497 3.6601 7.50497 4.29327 7.89549 4.68379L14.4675 11.2558C14.8581 11.6464 14.8581 12.2795 14.4675 12.67L7.82054 19.317C7.43002 19.7076 7.43002 20.3407 7.82054 20.7313Z" fill="#0F0F0F"/>
                            </svg>
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