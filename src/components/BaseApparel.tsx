import baseApparelLogo from '../assets/logo.svg';
import arrowIcon from '../assets/icon-arrow.svg'
import heroDesktop from '../assets/hero-desktop.jpg';
import heroMobile from '../assets/hero-mobile.jpg';
import bgPattern from '../assets/bg-pattern-desktop.svg';
import errorIcon from '../assets/icon-error.svg';
import React, {useState} from "react";

const BaseApparel = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setError('');
            return;
        }
        setError('Please provide a valid email')
    }

    return (
        <div className='main'>
            <div className='mobile-header'>
                <img className='mobile-logo' src={baseApparelLogo}/>
            </div>
            <img className='mobile-hero' src={heroMobile}/>
            <div className='content'>
                <img className='background' src={bgPattern}/>
                <div className='wrapper'>
                    <img className='desktop-logo' src={baseApparelLogo}/>
                    <div className='box'>
                        <div className='titles'>
                            <h1 className='title'>WE'RE</h1>
                            <h1 className='title'>COMING</h1>
                            <h1 className='title'>SOON</h1>
                        </div>
                        <p className='description'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals</p>
                        <form onSubmit={handleSubmit}>
                            <input className={`${error ? 'error' : ''}`} name='email' type='text' placeholder='Email Address' onChange={({target}) => setEmail(target.value)} onClick={() => setError('')}/>
                            <img className={`icon ${error ? 'error' : ''}`} src={errorIcon}/>
                            <button className='submit' type='submit'>
                                <img className='icon' src={arrowIcon}/>
                            </button>
                            <div className='message'>{error}</div>
                        </form>
                    </div>
                </div>
            </div>
            <img className='desktop-hero' src={heroDesktop}/>
        </div>
    )
}

export default BaseApparel;