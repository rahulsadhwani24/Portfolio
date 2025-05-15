import React, { useEffect, useState } from "react";
import Arrow from "../assets/arrow.svg";

function Footer() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const yearFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric"
  })

  const [formattedDate, setFormattedDate] = useState(
    formatter.format(new Date())
  );
  const [formattedYear, setFormattedYear] = useState(
    yearFormatter.format(new Date())
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFormattedDate(formatter.format(new Date()));
      setFormattedYear(yearFormatter.format(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer">
      <div className="footerSideLeft">
        <span>© {formattedYear}</span>
        <span>{formattedDate} IST</span>
      </div>
      <div className="footerSideRight">
        <span className="socialLink">
          LinkedIn
          <img src={Arrow} />
        </span>
        <span className="socialLink">
          Instagram
          <img src={Arrow} />
        </span>
        <span className="socialLink">
          Mail
          <img src={Arrow} />
        </span>
        <span className="socialLink">
          Git
          <img src={Arrow} />
        </span>
      </div>
      <span className="dividerOnMobiles"></span>
    </div>
  );
}

export default Footer;
