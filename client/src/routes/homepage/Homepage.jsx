import React, { useState } from 'react'
import './homepage.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
const Homepage = () => {
    const [typingStatus, setTypingStatus] = useState('human1')
    return (
        <div className='homepage'>
            <img src='/orbital.png' alt='' className='orbital' />
            <div className='left'>
                <h1>LAMA AI</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>
                Empower your ideas with the precision and versatility of LAMA AI. 
                Your ultimate ally in smarter problem-solving and boundless creativity.
                </h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className='right'>
                <div className='imgContainer'>
                    <div className='bgContainer'>
                        <div className='bg'></div>
                    </div>
                    <img src='/bot.png' alt='' className='bot' />
                    <div className='chat'>
                        <img src={typingStatus === 'human1'
                            ? '/human1.jpeg'
                            : typingStatus === 'human2'
                                ? '/human2.jpeg'
                                : 'bot.png'
                        }
                            alt=''
                        />
                        <TypeAnimation
                            sequence={[
                                'Human: Hey! Are you really an AI?',
                                2000, () => {
                                    setTypingStatus("bot")
                                },
                                'Bot: Yep! 100% AI, 0% caffeine.',
                                2000, () => {
                                    setTypingStatus("human2")
                                },
                                'Human: Can you do tricks?',
                                2000, () => {
                                    setTypingStatus("bot")
                                },
                                'Bot: Sure! Watch me juggle ideas. 🎩',
                                2000, () => {
                                    setTypingStatus("human1")
                                },
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                        />
                    </div>
                </div>
            </div>
            <div className='terms'>
                <img src='/logo.png' alt="" />
                <div className='links'>
                    <Link to="/">Terms of Service</Link>
                    <span> | </span>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage