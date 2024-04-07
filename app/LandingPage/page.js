import React, { useEffect } from "react";
import "swiper/css";
// import "../../../node_modules/swiper/swiper.css";
import "./slider.css";
import "./swiper.css"
// import "../../node_modules/swiper/swiper.css"
// import { useDispatch } from "react-redux";
// import { setLoanType } from "../../redux/actions";


import WhyMillions from "./WhyMillions/page";
import ResponsibleCredit from "./ResponsibleCredit/page";

import LatestBlog from "./LatestBlog/page";
import AvoidPitfalls from "./AvoidPitfalls/page";

import Link from "next/link";
import ShortTerm from "./ShortTerm/page";
import LandingPartners from "./LandingParteners/page";
import { routeRedirection, scrollToTop } from "../lib/commonFunctions/page";

const LandingPage = () => {
  // const navigate = useNavigate();

 

  // const dispatch = useDispatch();

  useEffect(() => {
    //  routeRedirection(navigate);
    localStorage.removeItem("loanType");
    sessionStorage.removeItem("employmentType");
    // dispatch(setLoanType(""));
  }, []);

  return (
    <>
     
      <ShortTerm scrollToTop={scrollToTop} />
      <WhyMillions />
      <ResponsibleCredit scrollToTop={scrollToTop} />
      <LandingPartners />
      <LatestBlog />
      <AvoidPitfalls />
      
    </>
  );
};

export default LandingPage;
