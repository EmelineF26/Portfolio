import React, {useEffect, useState } from 'react';
import "./style.css";
import { motion } from 'framer-motion';
import Img from '../../assets/images/Animation_CP-removebg.png';

const ImageAnimation = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize= () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        return () => {
            window.addEventListener('resize', handleResize);
        };
    }, []);


    return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '20vh', marginTop: '-70px', marginBottom: '20px' }}>
        <motion.img src={Img} alt="Image animée" className={`AnimationImg ${isMobile ? 'mobile-animation' : ''}`}
        initial={{ x: '80vw' }}  // L'animation démarre en dehors de la page (à droite)
        animate={{ x: isMobile? '10vw' : '25vw' }}   // Elle se déplace vers le milieu de la page
        transition={{ type: 'spring', stiffness: 50, duration: 2.5 }} // Animation fluide
        style={{ width: '250px', height: '250px', position: 'relative', transform: 'translateX(-50%)' }}
        />
    </div>
    );
}

export default ImageAnimation;
