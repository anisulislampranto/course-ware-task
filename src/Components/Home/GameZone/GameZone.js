import React from 'react';
import gameZoneLogo from '../../../images/gameZoneLogo.png';
import gameZoneLogo2 from '../../../images/gameZoneLogo2.png';
import './GameZone.css'

const GameZone = () => {
    return (
        <div className='game-zone'>
                <img className='game-zone-logo' src={gameZoneLogo} alt="" />
            <div>
                <div className='gameZone-details-logo'>
                    <img src={gameZoneLogo2} alt="" />
                    <h2>Games Zone</h2>
                </div>
                <p>Teacher will use this panel to assign course universe to student to play the game. After Activeted the game from the teacher, Student will then can play the game.</p>
                <button className='game-zone-btn'> <strong>CalibraX</strong> </button>
            </div>
        </div>
    );
};

export default GameZone;