import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css';

/** This is a simple example of how the component works **/

/** This is a simple example of how the component works **/


export const Slideout = ({
  title,
  btnText,
  children,
  className,
  isOpen = false,
  width = 500,
  id,
}) => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen); 
  },[isOpen]);

  const addedClasses =
    `${className ? ` ${className}` : ''}` +
    `${open ? ' cc-slideout-open' : ' cc-slideout-closed'}`;

  const slideoutId = id || 'slideout-' + Math.floor(Math.random() * 9999999);

  const slideoutComponent = (
    ReactDOM.createPortal(
      <div className={`cc-slideout-container${addedClasses}`} id={slideoutId}>

        <button
          className="cc-slideout-overlay"
          onClick={() => setOpen(false)}
          aria-label="Close Slideout"
        />
        <div className="cc-slideout" style={{width: `${width}px`}}>

          <div className="cc-slideout-header">
            <h3 className="cc-slideout-title">{title}</h3>
            <button
              className="cc-slideout-close"
              onClick={() => setOpen(false)}
              aria-label="Close Slideout"
            />
          </div>

          <div className="cc-slideout-body">
           <div className="row">
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
      <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
          </div>

        </div>

      </div>,
      document.body
    )
  );

  return (<div>
    <button
      className="cc-open-slideout cc-button shrink"
      onClick={() => setOpen(!open)}
      aria-haspopup="dialog"
      aria-controls={slideoutId}
    >
      {btnText}
    </button>
    {slideoutComponent}
  </div>
)};

Slideout.propTypes = {
  title: PropTypes.string,
  btnText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  width: PropTypes.number,
  id: PropTypes.string,
}


