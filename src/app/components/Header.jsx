'use client';
import React, {useState, useEffect} from 'react';
import classes from './Header.module.css';
import Link from 'next/link'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className={`${classes.headerTop} ${isScrolled ? classes.headerTopScrolled : ''}`}>
                <img className={classes.logoTop} src="/Frame 22.png" alt="лого сайта"/>
                <div className={classes.navBtnTop}>
                    <ul className={classes.navBtnPosition}>
                        <li className={classes.navBtn}>
                            <Link className={classes.navBtn} href="/">Home</Link>
                        </li>
                        <li className={classes.navBtn}>
                            <Link className={classes.navBtn} href="/about">About us</Link>
                        </li>
                        <li className={classes.navBtn}>
                            <Link className={classes.navBtn} href="/service">Service</Link>
                        </li>
                        <li className={classes.navBtn}>Page
                            <img className={classes.arrowDownHead} src="/arrowDown.svg" alt="стрелка вниз"/>
                        </li>
                        <li className={classes.navBtn}>Blog
                            <img className={classes.arrowDownHead} src="/arrowDown.svg" alt="стрелка вниз"/>
                        </li>
                    </ul>
                </div>
                <div className={classes.spanTopBorder}>
                    <span className={classes.content}>Contact us</span>
                </div>

            </div>
            <img className={classes.decorationHeadPosition} src="/decorationHead.svg" alt=""/>
        </div>
    );
};

export default Header;