import React from 'react';
import classes from './Main1.module.css';

const Main1 = () => {
    return (
        <div className={classes.main1GlobalPosition}>
            <div className={classes.main1Text1Position}>
                <p className={classes.slideInMain1Text1}>Immerse Yourself
                    <br/>
                    in Virtual Reality
                </p>
                <p className={classes.slideInMain1Text2}>
                    Experience Unforgettable Events in VR. Bring your events to
                    <br/>
                    life like never before with our VR services
                </p>
                <span className={classes.slideInMain1Span}>DISCOVER MORE</span>
                <div className={classes.slideInMain1ClientBlockPosition}>
                    <img src="/main1Client.png" alt="кргулые иконки с клиентами"/>
                    <img className={classes.main1LineClient} src="/main1ClientLine.svg" alt="линия под цифрой 32"/>
                    <p className={classes.main1TextClient}>32k+</p>
                    <p className={classes.main1TextClientSmall}>Happy Client</p>
                </div>
            </div>

                <img className={classes.slideInMain1LightPosition} src="/LightMain1.svg" alt="свечение за челиксом"/>
            <img className={classes.slideInMain1HumanPosition} src="/main1Human.png" alt="челикс"/>

        </div>
    );
};

export default Main1;