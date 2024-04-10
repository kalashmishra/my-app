import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import * as React from "react";

 export const AccordionItem = ({ expanded, onChange, heading, content, headingColor, contentColor,checkCircle }) => {
  const AccHeadingColor = {
    color: headingColor,
    fontSize: { xs: "20px", sm: "22px" },
    fontWeight: "700",
  };
  const AccParaColor = {
    color: contentColor,
    fontSize: { xs: "16px" },
    fontWeight: "700",
  };

  const CheckCircle = {
    marginTop: "6px",
    color: checkCircle,
    marginRight: "10px",
  };
  const ExpandMore = {
   
    color: checkCircle,
   
  };

  return (
    <Accordion
      elevation={0}
      expanded={expanded}
      onChange={onChange}
      sx={{ backgroundColor: "transparent", marginTop: "20px" }}
    >
      <AccordionSummary
        sx={{ padding: 0 }}
        expandIcon={<ExpandMoreIcon sx={{ ...ExpandMore }} />}
      >
        <CheckCircleOutlineIcon sx={{ ...CheckCircle }} />
        <Typography sx={{ ...AccHeadingColor }}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ ...AccParaColor }}>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

