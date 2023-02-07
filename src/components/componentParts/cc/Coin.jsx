import styles from "../../componentParts/cc/s.m.scss";
import React from "react";
function Form({
  status ,
  setstatus,
  address,
  changeAddress,
  network,
  changeNetwork,
  invalidAddress
}) {
  return (
    <div className='Form'>
      
     
      
        <input
          type="text"
          value={address}
          onChange={changeAddress}
          className={  invalidAddress ? 'dangerous' : null + 'input-adress'   }
        />
      
    </div>
  );
}

export default Form;
