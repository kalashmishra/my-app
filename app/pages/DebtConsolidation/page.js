import React from "react";

import PersonalLoanForDebtConsolidation from "./@PersonalLoanForDebtConsolidation/page";
import DebtConsolidationLoan from "./@DebtConsolidationLoan/page";
import FeaturesBenefitsOfDebt from "./@FeaturesBenefitsOfDebt/page";
import EligibilityCriteria from "./@EligibilityCriteria/page";
import DocumentsRequiredToApply from "./@DocumentsRequiredToApply/page";
import StepByStepProcess from "../../components/@StepByStepProcess/page";
import WillConsolidatingDebt from "./@WillConsolidatingDebt/page";
import TopThreeThings from "./@TopThreeThings/page";
import KnowTheRight from "./@KnowTheRight/page";
import DebtConsolidationVsBalance from "./@DebtConsolidationVsBalance/page";
import FAQS from "./@FAQS/page";

const DebtConsolidation = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   localStorage.removeItem("loanType");
  //   routeRedirection(navigate);
  //   dispatch(setLoanType(""));
  //   sessionStorage.removeItem("employmentType");
  // }, []);

  return (
    <>
      <PersonalLoanForDebtConsolidation />
      <DebtConsolidationLoan />
      <FeaturesBenefitsOfDebt />
      <EligibilityCriteria />
      <DocumentsRequiredToApply />
      <StepByStepProcess text={"Debt consolidation"} />
      <WillConsolidatingDebt />
      <TopThreeThings />
      <KnowTheRight />
      <DebtConsolidationVsBalance />
      <FAQS />
    </>
  );
};

export default DebtConsolidation;
