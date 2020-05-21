import React from 'react';
import PropTypes from 'prop-types';

const IconCard = ({ array }) => (
  <ul>
     {array.map( (item, index) => (
       <li key={index}>
         { item.img ? (
           <>
             <img src={`${item.img}.png`} alt="android icon" className={item.width}/>
             <strong>{item.title}</strong>       
           </>
         ) : (
           <strong className="stack">{item.title}</strong>
         )}                
      </li>
     ))}
  </ul>
);

IconCard.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default IconCard;
