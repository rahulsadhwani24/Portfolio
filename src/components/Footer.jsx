import React, { useEffect, useState } from "react";
import Arrow from "../assets/Arrow.svg";
import { Link } from "react-router-dom";

function Footer() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const yearFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  });

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
        <Link
          to="https://www.linkedin.com/in/rahul-sadhwani-587199204"
          target="_blank"
        >
          <span className="socialLink">
            LinkedIn
            <img src={Arrow} />
          </span>
        </Link>
        <Link to="https://github.com/rahulsadhwani24?tab=repositories" target="_blank">
          <span className="socialLink">
            Git
            <img src={Arrow} />
          </span>
        </Link>
        <Link to="https://www.instagram.com/rahulsadhwani24/" target="_blank">
          <span className="socialLink">
            Instagram
            <img src={Arrow} />
          </span>
        </Link>
          <Link to="https://wa.me/8149126137" target="_blank">
          <span className="socialLink">
            Whatsapp
            <img src={Arrow} />
          </span>
          </Link>
        
      </div>
      <span className="dividerOnMobiles"></span>
    </div>
  );
}

export default Footer;
