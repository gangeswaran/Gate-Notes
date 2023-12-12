// PDFSection.js
import React from 'react';
import './PDFSection.css';

const PDFSection = () => {
    return (
        <section className="pdf-section">
            <h2>Grab your Notes Here 👇</h2>
            <div className="pdf-list">
                <a href={process.env.PUBLIC_URL + '/ME.pdf'} target='_blank' >PDF 1</a>
                {/* Add more PDF links as needed */}
            </div>
        </section>
    );
}

export default PDFSection;
