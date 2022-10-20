import React from 'react';
import {Navbar, Dropdown, Button, Menu} from 'react-daisyui';

function NavbarComp() {
  return (
    <>
<label htmlFor="my-modal" className="btn modal-button">open modal</label>

<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
    </>
  )
}

export default NavbarComp