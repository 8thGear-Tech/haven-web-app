import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { FaArrowCircleUp } from "react-icons/fa";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
// import { ArrowIcon } from "../Icons";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <KeyboardDoubleArrowUpOutlinedIcon
        className="scrolltotopBtn pe-4"
        onClick={scrollToTop}
        style={{
          display: visible ? "inline" : "none",
          // width: "100px",
          height: "50px",
        }}
      />
      <style>{`
            .scrolltotopBtn {
            position: fixed;
            width: 20%;
            left: 87%;
            bottom: 100px;
            height: 20px;
            font-size: 10rem;
            z-index: 1;
            cursor: pointer;
            color: #E88019;
            }
        `}</style>
      {/* <div className=" scrolltotopBtn ">
        {" "}
        <i
          className="bi bi-arrow-up-square scrolltotopBtn  "
          onClick={scrollToTop}
          style={{
            display: visible ? "inline" : "none",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        
        ></i>
      </div> */}
    </>
  );
};

// export function GoToTop() {
//   const routePath = useLocation();
//   const onTop = () => {
//     window.scrollTo(0, 0);
//   };
//   useEffect(() => {
//     onTop();
//   }, [routePath]);

//   return null;
// }
