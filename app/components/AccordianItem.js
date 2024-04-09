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
  
 export const AccordionItem = ({ panel, heading, content }) => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const AccHeadingColor = {
      color: "#F7D64A",
      fontSize: { xs: "20px", sm: "22px" },
      fontWeight: "700",
    };
    const AccParaColor = {
      color: "white",
      fontSize: { xs: "16px" },
      fontWeight: "700",
    };
  
    const CheckCircle = {
      marginTop: "6px",
      color: "white",
      marginRight: "10px",
    };
  
    return (
      <Accordion
        elevation={0}
        expanded={expanded === panel}
        onChange={handleChange(panel)}
        sx={{ backgroundColor: "transparent", marginTop: "20px" }}
      >
        <AccordionSummary
          sx={{ padding: 0 }}
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
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
  
 
  
  
  