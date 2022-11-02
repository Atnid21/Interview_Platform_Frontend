import React from 'react';
import Editor from './Editor';

function Meeting() {
  const clickHandler = () => {
    const ele = document.getElementById('meeting-wrapper');
    ele.requestFullscreen({ navigationUI: "show" }).then(() => { }).catch((err) => {
      alert(`An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`);
    });
  }

  return (
    <>
      <div id="meeting-wrapper" className='bg-green-800 min-h-screen'>
        <Editor />
        <button onClick={clickHandler}>FullScreen</button>
      </div>
    </>
  )
}

export default Meeting