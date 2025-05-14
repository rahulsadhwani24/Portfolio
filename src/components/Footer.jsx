import React, { useEffect, useState } from "react";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer">
      <div className="footerSideLeft">
        <span>© 2025</span>
        <span>{dateTime.toLocaleTimeString()} IST</span>
      </div>
      <div className="footerSideRight">
        <span className="socialLink">
          LinkedIn
          <img src="../src/assets/arrow.svg" />
        </span>
        <span className="socialLink">
          Instagram
          <img src="../src/assets/arrow.svg" />
        </span>
        <span className="socialLink">
          Mail
          <img src="../src/assets/arrow.svg" />
        </span>
        <span className="socialLink">
          Git
          <img src="../src/assets/arrow.svg" />
        </span>
      </div>
      <span className="dividerOnMobiles"></span>
    </div>
  );
}

export default Footer;
