import React from 'react'


export default function Modal({children, open, onClose}) {
  if(!open) return null

  return (
    <div>
        <button className='popupbtn' onClick={onClose}>x</button> 
        {children}
        
    </div> 
  )
}
