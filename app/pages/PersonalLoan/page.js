import React from "react";
import PlHomePage from "./@PlHomePage/page";
import PlDescriptionPage from "./@PlDescriptionPage/page";
import GetPersonalLoan from "./@GetPersonalLoan/page";
import InterestRate from "./@InterestRate/page";
import ChoosePersonalLoan from "./@ChoosePersonalLoan/page";
import WhyIsPlBetter from "./@WhyIsPlBetter/page";
import SimpleCriteria from "./@SimpleCriteria/page";
import DocumentsYouNeed from "./@DocumentsYouNeed/page";
import PersonalLoanFees from "./@PersonalLoanFees/page";

import WhenShouldYouAvoid from "./@WhenShouldYouAvoid/page";
import WhenShouldYouTake from "./@WhenShouldYouTake/page";
import TipsToAvoidPl from "./@TipsToAvoidPl/page";
import HowWillLenders from "./@HowWillLenders/page";
import TipsToGrab from "./@TipsToGrab/page";
import FAQS from "./@FAQS/page";
import TransformYourFinancial from "./@TransformYourFinancial/page";
import StepByStepProcess from "@/app/components/@StepByStepProcess/page";



const PersonalLoan = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     localStorage.removeItem("loanType");
//     routeRedirection(navigate);
//     dispatch(setLoanType(""));
//     sessionStorage.removeItem("employmentType");
//   }, []);

  return (
    <>
   
      <PlHomePage />
      <PlDescriptionPage />
      <GetPersonalLoan   />
      <InterestRate />
      <ChoosePersonalLoan   />
      <WhyIsPlBetter />
      <SimpleCriteria />
      <DocumentsYouNeed/>
      <PersonalLoanFees />
      <StepByStepProcess text={"Personal"}/>
      <WhenShouldYouAvoid />
      <WhenShouldYouTake />
      <TipsToAvoidPl />
      <HowWillLenders />
      <TipsToGrab />
      <FAQS />
      <TransformYourFinancial />
    </>
  );
};

export default PersonalLoan;
