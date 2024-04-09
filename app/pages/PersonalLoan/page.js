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
import StepByStep from "./@StepByStep/page";
import WhenShouldYouAvoid from "./@WhenShouldYouAvoid/page";
import WhenShouldYouTake from "./@WhenShouldYouTake/page";
import TipsToAvoidPl from "./@TipsToAvoidPl/page";
import HowWillLenders from "./@HowWillLenders/page";
import TipsToGrab from "./@TipsToGrab/page";
import FAQS from "./@FAQS/page";
import TransformYourFinancial from "./@TransformYourFinancial/page";
import Link from "next/link";
import GetMatchedButton from "@/app/components/GetMatchedButton";


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
      <GetPersonalLoan   GetMatchedButton={GetMatchedButton} Link={Link} />
      <InterestRate />
      <ChoosePersonalLoan   GetMatchedButton={GetMatchedButton} Link={Link}/>
      <WhyIsPlBetter  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <SimpleCriteria />
      <DocumentsYouNeed  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <PersonalLoanFees  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <StepByStep />
      <WhenShouldYouAvoid  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <WhenShouldYouTake  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <TipsToAvoidPl  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <HowWillLenders />
      <TipsToGrab  GetMatchedButton={GetMatchedButton} Link={Link}/>
      <FAQS />
      <TransformYourFinancial />
    </>
  );
};

export default PersonalLoan;
