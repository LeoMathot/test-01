import React from 'react';
import '../stylesheets/story.css';

function Story (props) {
    return (
        <div className='story-container'>
            <p className='story-name'>Name: <strong>{props.name}</strong></p>
            <p className='story-nickname'>Nickname: {props.nickname}</p>
            <div className='story-image-container'>
                <img className='story-image' 
                    src={require(`../images/photo-${props.imageid}.png`)}
                    alt={`${props.name}-photo`} />
            </div>
        </div>
    );
}

export default Story;