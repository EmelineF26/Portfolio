import React from 'react';
import { motion } from 'framer-motion';
import Img from '../../assets/images/Animation_CP-removebg.png';

const ImageAnimation = () => {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '20vh', marginTop: '-70px', marginBottom: '20px' }}>
        <motion.img src={Img} alt="Image animée"
        initial={{ x: '80vw' }}  // L'animation démarre en dehors de la page (à droite)
        animate={{ x: '25vw' }}   // Elle se déplace vers le milieu de la page
        transition={{ type: 'spring', stiffness: 50, duration: 2.5 }} // Animation fluide
        style={{ width: '250px', height: '250px', position: 'relative', transform: 'translateX(-50%)' }}
        />
    </div>
    );
}

export default ImageAnimation;
