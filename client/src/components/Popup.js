import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../css/popup.css';

/** This is a simple example of how the component works **/
export const Example = () => {

  return (
    <Modal
      btnText="Open Modal"
      title="My Modal"
      size="medium"
    >
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </Modal>
  )
}
/** This is a simple example of how the component works **/


export const Modal = ({
  title,
  hasBtn = true,
  btnText,
  children,
  className,
  size = 'dialog',
  isOpen,
  id,
}) => {

  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  },[isOpen]);

  const addedClasses =
    `${className ? ` ${className}` : ''}` +
    `${size ? ` cc-modal-${size}` : ''}`;

  const modalId = id || 'modal-' + Math.floor(Math.random() * 9999999);

  const modalComponent = open && (
    ReactDOM.createPortal(
      <div className={`mt-5 cc-modal-container${addedClasses}`} id={modalId}>

        <button
          className="cc-modal-overlay"
          onClick={() => setOpen(!open)}
          aria-label="Close Modal"
          className={className}
        />
        <div className="cc-modal">

          {size !== 'dialog' 
            ? <div className="cc-modal-header">
              <h3 className="cc-modal-title">{title}</h3>
              <button
                className="cc-modal-close"
                onClick={() => setOpen(!open)}
                aria-label="Close Modal"
              />
            </div>
            : <button className="cc-modal-fixed-close" onClick={() => setOpen(!open)}></button>
          }
          
          <div className="cc-modal-body">
            {children}
          </div>

        </div>

      </div>,
      document.body
    )
  );

  return (<React.Fragment>
    {hasBtn &&
      <button
        className="book-a-table-btn"
        onClick={() => setOpen(!open)}
        aria-haspopup="dialog"
        aria-controls={modalId}
      >
        {btnText}
      </button>
    }
    {modalComponent}
  </React.Fragment>
)};

Modal.propTypes = {
  title: PropTypes.string,
  hasBtn: PropTypes.bool,
  btnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['dialog', 'small', 'medium', 'large', 'full']),
  isOpen: PropTypes.bool,
  id: PropTypes.string,
}