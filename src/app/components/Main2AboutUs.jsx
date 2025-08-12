'use client';
import React, { useEffect, useRef, useState } from 'react';
import classes from './Main2AboutUs.module.css';

const Main2AboutUs = () => {
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
            { threshold: 0.2 } // Срабатывает, когда 10% элемента видно
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);


    const imgRef = useRef(null)
    useEffect(() => {
        let animationFrameId
        const imgElement = imgRef.current

        const settings = {
            speed: 0.1,
            sensitivity: 0.3,
            maxOffset: 20
        }

        let pos = { x: 0, y: 0 }
        let target = { x: 0, y: 0 }

        const animate = () => {
            pos.x += (target.x - pos.x) * settings.speed
            pos.y += (target.y - pos.y) * settings.speed

            imgElement.style.transform = `translate(${pos.x}px, ${pos.y}px)`
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            const centerX = window.innerWidth / 2
            const centerY = window.innerHeight / 2

            let dx = (e.clientX - centerX) * settings.sensitivity
            let dy = (e.clientY - centerY) * settings.sensitivity

            const distance = Math.sqrt(dx*dx + dy*dy)
            if (distance > settings.maxOffset) {
                const ratio = settings.maxOffset / distance
                dx *= ratio
                dy *= ratio
            }

            target = { x: dx, y: dy }
        }

        animate()
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div ref={ref} className={`${classes.Main2AboutUsGlobalPosition} ${isVisible ? classes.show : ''}`}>
            <div className={classes.Main2AboutUsLeftBlock}>
                <div className={classes.Main2AboutUsLeftLight1}>
                </div>
                <div className={classes.Main2AboutUsLeftLight2}>
                </div>
                <img ref={imgRef}
                     className={classes.Main2AboutUsLeftHuman}
                     src="/Main2AboutUsHuman.png"
                     alt="челик в очках, который должен двигаться при движении курсора"/>
            </div>
            <div className={classes.Main2AboutUsRightBlock}>
                <p className={classes.Main2AboutUsRightTextTop}>ABOUT US</p>
                <p className={classes.Main2AboutUsRightText1}>Bring your events to life like never before with our VR services.</p>
                <p className={classes.Main2AboutUsRightText2}>VRNas is a leading provider of VR services for education, entertainment,
                    architecture, and events. Our mission is to bring the power of virtual
                    reality to everyone, allowing them to explore new worlds, learn in new
                    ways, and experience events in a whole new light.</p>
                <ul className={classes.Main2AboutUsRightTextUlBottom}>
                    <li className={classes.Main2AboutUsRightTextBottom}>
                        <img style={{marginRight: "12px"}} src="/Main2AboutUsCheckBox.svg" alt="чекбокс свг"/>
                        Cutting-Edge Technology
                    </li>
                    <li className={classes.Main2AboutUsRightTextBottom}>
                        <img style={{marginRight: "12px"}} src="/Main2AboutUsCheckBox.svg" alt="чекбокс свг"/>
                        Versatile Applications
                    </li>
                    <li className={classes.Main2AboutUsRightTextBottom}>
                        <img style={{marginRight: "12px"}} src="/Main2AboutUsCheckBox.svg" alt="чекбокс свг"/>
                        Affordable and Accessible
                    </li>
                </ul>
                <span className={classes.Main2AboutUsRightSpan}>READ MORE</span>
            </div>
        </div>
    );
};

export default Main2AboutUs;