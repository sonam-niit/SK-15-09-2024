import React from 'react'
// POSITION is a helper variable that provides available position values to avoid typos
import { ReactNoti, notify, POSITION } from 'react-noti'

function Notification() {
  const handleSuccessClick = () => {
    notify.success('Logged In Successfully',{title:'Success'})
  }
  const handleInfoClick = () => {
    notify.info('Info message', { title: 'Title here' })
  }
  const handleWarningClick = () => {
    notify.warning('Warning message', {
      title: 'Do not auto dismiss',
      autoDismiss: false,
    })
  }
  const handleErrorClick = () => {
    notify.error('Error message', {
      title: 'Close after 2000ms',
      timeOut: 2000,
    })
  }

  return (
    <div className="App">
      <ReactNoti position={POSITION.TOP_RIGHT} />

      <div>
        <button onClick={handleSuccessClick}>Success!</button>
        <button onClick={handleInfoClick}>Info!</button>
        <button onClick={handleWarningClick}>Warning!</button>
        <button onClick={handleErrorClick}>Error!</button>
      </div>
    </div>
  )
}

export default Notification;