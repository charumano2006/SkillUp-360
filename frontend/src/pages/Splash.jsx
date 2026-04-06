import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src="/logo.png" alt="SkillUp360" className="logo-small" />
        <h1 className="brand-name">SkillUp360</h1>
        <p className="tagline">Integrated Skill Evaluation and Placement Guidance Platform</p>
       
        </div>
      </div>
    
  );
};

export default Splash;