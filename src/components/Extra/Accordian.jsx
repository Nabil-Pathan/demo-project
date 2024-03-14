import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


const Accordion = ({ title , content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md mt-4 overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer bg-gray-300"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>


        {
                 
                isOpen ? <FontAwesomeIcon icon={faAngleDown}/>   : <FontAwesomeIcon icon={faAngleRight}/> 
          
        }
        
        
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-300">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;