'use client';
import React, { useEffect, useRef, useState } from 'react';
import classes from './Main1Dop.module.css';

const Main1Dop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Отключаем наблюдение после появления
                }
            },
            { threshold: 0.4 } // Срабатывает, когда 10% элемента видно
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    return (
        <div ref={ref}
            className={`${classes.main1DopGlobalPosition} ${isVisible ? classes.show : ''}`}>
            <div className={classes.main1DopBlock}>
                <img src="/Main1DopImg1.svg" alt="пикча с ВР шлемом"/>
                <p className={classes.main1DopTextTop}>Expertise</p>
                <p className={classes.main1DopTextBottom}>Our team consists of experienced VR developers,
                    designers, and technicians who have a passion for
                    VR and a commitment to delivering quality work
                    and give the best service</p>
            </div>
            <div className={classes.main1DopBlock}>
                <img src="/Main1DopImg2.svg" alt="пикча с 3д эксползицией"/>
                <p className={classes.main1DopTextTop}>Customization</p>
                <p className={classes.main1DopTextBottom}>Every client is unique, and we believe every VR
                    experience should be too. We'll work with you to
                    create a customized solution that meets your
                    specific needs and goals</p>
            </div>
            <div className={classes.main1DopBlock}>
                <img src="/Main1DopImg3.svg" alt="пикча с челиком в шлеме"/>
                <p className={classes.main1DopTextTop}>Service</p>
                <p className={classes.main1DopTextBottom}>We believe in providing exceptional customer
                    service, from initial consultation to final delivery.
                    Our goal is to ensure you're satisfied with every
                    aspect of your VR experience.</p>
            </div>
        </div>
    );
};

export default Main1Dop;