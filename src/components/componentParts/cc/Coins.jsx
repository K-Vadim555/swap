import { useState } from "react";

import WAValidator from "vm-multicoin-address-validator";



import  "../../componentParts/cc/s.m.scss";
import Form from "./Coin";
import Qr from "./CoinPrice";

function Coins({status , setstatus}) {
  const [network, setNetwork] = useState("eth");
  const [address, setAddress] = useState(
    "0x000000000000000000000000000000000000dead"
  );
  const [invalidAddress, setInvalidAddress] = useState(false);

  const changeAddress = (e) => {
    let address = e.target.value;
    let isValidAddress = WAValidator.validate(address, network);

    setAddress(address);
    setInvalidAddress(!isValidAddress);
  };

  const changeNetwork = (e) => {
    let network = e.target.value;
    let isValidAddress = WAValidator.validate(address, network);

    setInvalidAddress(!isValidAddress);
    setNetwork(network);
  };
  
  return (
      
      <Form
       status={status} setstatus={setstatus}
        address={address}
        changeAddress={changeAddress}
        network={network}
        changeNetwork={changeNetwork}
        invalidAddress={invalidAddress}
      />
     

  );
}

export default Coins;
