import React from "react";
// import { useDispatch } from "react-redux";
// import { setLoanType } from "../../redux/actions";
import WhyMillions from "./@WhyMillions/page";
import ResponsibleCredit from "./@ResponsibleCredit/page";
import LatestBlog from "./@LatestBlog/page";
import AvoidPitfalls from "./@AvoidPitfalls/page";

import ShortTerm from "./@ShortTerm/page";
import LandingPartners from "./@LandingParteners/page";


const LandingPage = () => {
  // const navigate = useNavigate();

 

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   //  routeRedirection(navigate);
  //   localStorage.removeItem("loanType");
  //   sessionStorage.removeItem("employmentType");
  //   // dispatch(setLoanType(""));
  // }, []);

  return (
    <>
     
      <ShortTerm  />
      <WhyMillions />
      <ResponsibleCredit  />
      <LandingPartners />
      <LatestBlog />   
      <AvoidPitfalls />
      
    </>
  );
};

export default LandingPage;
