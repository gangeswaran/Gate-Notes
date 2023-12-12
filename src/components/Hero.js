// HeroSection.js
import React from 'react';
import './Hero.css';
import EmailInput from './EmailInput.js';

const Hero = ({onEmailSubmit}) => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Get GateNotes Here!</h1>
                <p>
                📘 Elevate your preparation with meticulously crafted study notes, <br/>expertly curated for GATE success.
                </p>
                <p>
                👨‍🏫  Immerse yourself in expert tuition, blending curriculum coverage with <br/>personalized guidance.
                </p>
                <p>
                🌐 Accessible anytime, anywhere – our online platform adapts to your schedule, <br/>ensuring convenience.
                </p>
                <p>
                🚀 Join a community of aspiring engineers; GATENotes is your launchpad to a brilliant <br/>engineering career!
                </p>
                <EmailInput onEmailSubmit={onEmailSubmit} />
            </div>
            

        </section>
    );
}

export default Hero;
