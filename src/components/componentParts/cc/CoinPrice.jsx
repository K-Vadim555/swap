import  "../../componentParts/cc/s.m.scss";
import QRCode from "qrcode.react";

// const networks = {
//     BTC: "https://i.ibb.co/L8hpQcf/bitcoin.png",
//     ETH: "https://i.ibb.co/NWCRLCx/ethereum.png",
//     XRP: "https://i.ibb.co/RCX0Ws9/ripple.png"
// }

function Qr({ value, invalidAddress }) {
  return (
    // <div className>
    <QRCode
      className='Qr'
      value={value}
      bgColor={"#ffffff"}
      fgColor={invalidAddress ? "#EF233C" : "#000000"}
      level={"Q"}
      includeMargin={false}
      renderAs={"svg"}
    />
  );
}

export default Qr;
