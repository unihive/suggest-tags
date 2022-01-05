export const StyledWrapper = props => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      columnGap: '0.5rem',
      rowGap: '0.5rem',
      alignItems: 'center',
      padding: '0.5rem'
    }}
    {...props}
  >
    {props.children}
  </div>
)

export const StyledContainer = props => (
  <div
    style={{
      flex: 1,
      position: 'relative'
    }}
    {...props}
  >
    {props.children}
  </div >
)

export const StyledTag = props => (
  <button
    style={{
      padding: '0.5rem',
      fontSize: '14px',
      lineHeight: '15px',
      border: '1px solid #d1d1d1',
      borderRadius: '2px',
      background: '#f1f1f1',
      cursor: 'pointer'
    }}
    {...props}
  ></button>
)

export const StyledInput = (props, ref) => (
  <input
    style={{
      border: 0,
      outline: 'none',
      width: '100%',
      minWidth: '200px',
      fontSize: '14px',
      lineHeight: '15px',
      padding: '0.5rem 0'
    }}
    ref={ref}
    {...props}
  />
)

export const StyledUnorderedList = props => (
  <ul
    style={{
      padding: 0,
      margin: 0,
      position: 'absolute',
      listStyle: 'none',
      top: '100%',
      borderRadius: '2px',
      zIndex: 99999,
      background: 'white',
      border: '1px solid #d1d1d1',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    }}
    {...props}
  >{props.children}</ul>
)

export const StyledListItem = props => (
  <li
    style={{
      cursor: 'pointer',
      padding: '0.5rem',
      borderBottom: '1px solid #ddd'
    }}
    {...props}
  >
    {props.children}
  </li >
)