import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
   <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handlerClear}
        contentLabel="Selected Option"
   >
       <h3>Select Option</h3>
       { props.selectedOption  && <p>{props.selectedOption}</p> }
       <button onClick={props.handlerClear}>Okay</button>
   </Modal>
    
);

export default OptionModal;
