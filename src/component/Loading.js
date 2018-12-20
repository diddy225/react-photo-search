import React from 'react'


const Loading = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">
        {props.message}
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}

Loading.defaultProps = {
  message: 'Loading...'
}

export default Loading