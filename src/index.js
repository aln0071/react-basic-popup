import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.showPopup !== prevState.showPopup) {
      return nextProps;
    }
    return null;
  }

  render() {
    if(this.state.showPopup)
    return(
      <div
        className={"popup-overlay"+this.props.overlayClass}
      >
        <div
          className={"popup"+this.props.popupClass}
        >
          <div
            className={"popup-header "+this.props.headerClass}
          >
            {this.props.header}
          </div>
          <div
            className={"popup-body"+this.props.bodyClass}
          >
            {this.props.body}
          </div>
          <div
            className={"popup-buttons"+this.props.buttonsClass}
          >
            {
              this.props.buttons.map((button, index) =>
                <input
                  key={index}
                  type="button"
                  value={button.name}
                  onClick={() => {
                    if(!button.onClick) {
                      this.props.default();
                    } else {
                      button.onClick();
                    }
                    this.props.finally();
                  }}
                  className={button.className || ''}
                />
              )
            }
          </div>
          <div
            className={"popup-footer"+this.props.footerClass}
          >
            {this.props.footer}
          </div>
        </div>
      </div>
    )
    return null;
  }
}

Popup.propTypes = {
  buttons: PropTypes.array,
  showPopup: PropTypes.bool.isRequired,
  headerClass: PropTypes.string,
  footerClass: PropTypes.string,
  bodyClass: PropTypes.string,
  buttonsClass: PropTypes.string,
  overlayClass: PropTypes.string,
  popupClass: PropTypes.string,
  default: PropTypes.func,
  finally: PropTypes.func
};

Popup.defaultProps = {
  buttons: [],
  headerClass: '',
  footerClass: '',
  bodyClass: '',
  buttonsClass: '',
  overlayClass: '',
  popupClass: '',
  default: () => {},
  finally: () => {}
};

export default Popup;
