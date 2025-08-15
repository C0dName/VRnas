'use client';
import React, {useEffect, useRef, useState} from 'react';
import classes from "./Main3OurService.module.css";

const Main3OurService = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const elements = [
            { ref: ref1, setIsVisible: setIsVisible1 },
            { ref: ref2, setIsVisible: setIsVisible2 },
            { ref: ref3, setIsVisible: setIsVisible3 },
            { ref: ref4, setIsVisible: setIsVisible4 },
            { ref: ref5, setIsVisible: setIsVisible5 },
            { ref: ref6, setIsVisible: setIsVisible6 }
        ];
        const observers = elements.map(({ ref, setIsVisible }) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                },
                { threshold: 0.4 }
            );

            if (ref.current) observer.observe(ref.current);
            return observer;
        });

        return () => observers.forEach(observer => observer.disconnect());
    }, []);

    return (
        <div className={classes['main3-block']}>
            <div ref={ref} className={`${classes.ourServiceBlock} ${isVisible ? classes.show : ''}`}>
                <div className={classes['our-service-title-block']}>
                <p className={classes['our-service-title']}>OUR SERVICE</p>
                <p className={classes['our-service-sub-title']}>Our Service</p>
                </div>
                <p className={classes['our-service-description']}>We use the latest VR hardware and software
                    to create high-quality VR experiences that
                    are accessible and affordable. Our goal is to provide exceptional customer service and
                    support, and our team is always available to answer any questions and address any
                    concerns you may have.</p>
            </div>
            <div className={classes['our-service-blocks-6']}>
                <div className={classes['our-service-blocks-1']}>
                    <div ref={ref1} className={`${classes.ourServiceBlocksStand} ${isVisible1 ? classes.show : ''}`}
                         onMouseEnter={() => setIsHovered(true)}
                         onMouseLeave={() => setIsHovered(false)}>
                        <img className={classes['our-service-blocks-img']} src="/softwareOurService.svg" alt="пикча"/>
                        <div>
                            <p className={classes['our-service-blocks-title']}>VR Development</p>
                            <p className={classes['our-service-blocks-description']}>From concept to creation, our team
                                of VR
                                developers will bring your vision to life.</p>
                        </div>
                        <button className={classes.button}>
                            LEARN MORE
                        </button>
                        <div className={classes.blockLinerGradient}></div>
                    </div>
                    <div ref={ref2} className={`${classes.ourServiceBlocksStand} ${isVisible2 ? classes.show : ''}`}>
                        <img className={classes['our-service-blocks-img']} src="/video-consoleOurService.svg" alt="пикча"/>
                        <div>
                            <p className={classes['our-service-blocks-title']}>VR Games</p>
                            <p className={classes['our-service-blocks-description']}>We offer a wide selection of VR
                                games that
                                are suitable for players of all ages and skill
                                levels.</p>
                        </div>
                        <button className={classes.button}>
                            LEARN MORE
                        </button>
                        <div className={classes.blockLinerGradient}></div>
                    </div>
                </div>
                <div className={classes['our-service-blocks-2']}>
                    <div ref={ref3} className={`${classes.ourServiceBlocksStand} ${isVisible3 ? classes.show : ''}`}>
                        <img className={classes['our-service-blocks-img']} src="/designOurService.svg" alt="пикча"/>
                        <div>
                            <p className={classes['our-service-blocks-title']}>VR Design</p>
                            <p className={classes['our-service-blocks-description']}>Our talented VR designers will
                                create immersive
                                and engaging environments that will captivate
                                your audience.</p>
                        </div>
                        <button className={classes.button}>
                            LEARN MORE
                        </button>
                        <div className={classes.blockLinerGradient}></div>
                    </div>
                    <div ref={ref4} className={`${classes.ourServiceBlocksStand} ${isVisible4 ? classes.show : ''}`}>
                        <img className={classes['our-service-blocks-img']} src="/partyOurService.svg" alt="пикча"/>
                        <div>
                            <p className={classes['our-service-blocks-title']}>VR Events</p>
                            <p className={classes['our-service-blocks-description']}>Make your next event unforgettable
                                with our VR
                                event services.</p>
                        </div>
                        <button className={classes.button}>
                            LEARN MORE
                        </button>
                        <div className={classes.blockLinerGradient}></div>
                    </div>
                </div>
                <div className={classes['our-service-blocks-3']}>
                    <div ref={ref5} className={`${classes.ourServiceBlocksStand} ${isVisible5 ? classes.show : ''}`}>
                        <img className={classes['our-service-blocks-img']} src="/messageOurService.svg" alt="пикча"/>
                        <div>
                            <p className={classes['our-service-blocks-title']}>VR Consulting</p>
                            <p className={classes['our-service-blocks-description']}>Our VR consultants will work with
                                you to ensure
                                that your VR experience meets your goals and
                                exceeds your expectations.</p>
                        </div>
                        <button className={classes.button}>
                            LEARN MORE
                        </button>
                        <div className={classes.blockLinerGradient}></div>
                    </div>
                    <div ref={ref6} className={`${classes.ourServiceBlocksStand} ${isVisible6 ? classes.show : ''}`}>
                        <img className={classes['our-service-blocks-img']} src="/theatreOurService.svg" alt="пикча"/>
                        <div>
                            <p className={classes['our-service-blocks-title']}>VR Entertainment</p>
                            <p className={classes['our-service-blocks-description']}>Create a VR escape room, or offer
                                VR
                                experiences at a theme park, we have the
                                expertise and experience to make it happen.</p>
                        </div>
                        <button className={classes.button}>
                            LEARN MORE
                        </button>
                        <div className={classes.blockLinerGradient}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main3OurService;