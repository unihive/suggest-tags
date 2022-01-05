function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export const StyledWrapper = props => /*#__PURE__*/React.createElement("div", _extends({
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '0.5rem',
    rowGap: '0.5rem',
    alignItems: 'center',
    padding: '0.5rem'
  }
}, props), props.children);
export const StyledContainer = props => /*#__PURE__*/React.createElement("div", _extends({
  style: {
    flex: 1,
    position: 'relative'
  }
}, props), props.children);
export const StyledTag = props => /*#__PURE__*/React.createElement("button", _extends({
  style: {
    padding: '0.5rem',
    fontSize: '14px',
    lineHeight: '15px',
    border: '1px solid #d1d1d1',
    borderRadius: '2px',
    background: '#f1f1f1',
    cursor: 'pointer'
  }
}, props));
export const StyledInput = (props, ref) => /*#__PURE__*/React.createElement("input", _extends({
  style: {
    border: 0,
    outline: 'none',
    width: '100%',
    minWidth: '200px',
    fontSize: '14px',
    lineHeight: '15px',
    padding: '0.5rem 0'
  },
  ref: ref
}, props));
export const StyledUnorderedList = props => /*#__PURE__*/React.createElement("ul", _extends({
  style: {
    padding: 0,
    margin: 0,
    position: 'absolute',
    listStyle: 'none',
    top: '100%',
    borderRadius: '2px',
    zIndex: 99999,
    background: 'white',
    border: '1px solid #d1d1d1',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
  }
}, props), props.children);
export const StyledListItem = props => /*#__PURE__*/React.createElement("li", _extends({
  style: {
    cursor: 'pointer',
    padding: '0.5rem',
    borderBottom: '1px solid #ddd'
  }
}, props), props.children);