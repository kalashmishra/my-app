import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import personal_loan_banner from "../../../../public/assets/images/personal-loan-banner.webp"
import Image from "next/image";
// import CommonUserNumber from "../../../components/FormComponents/CommonUserNumber/CommonUserNumber";

const PlHomePage = () => {
  return (
    <>
      <Grid
        container
        sx={{
          padding: {
            xs: " 50px 20px",
            sm: "50px 32px",
            md: "50px 32px",
            lg: "40px 32px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:{xs:"40px",sm:'40px',xl:'40px'}
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              maxWidth: "540px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
           
              <Typography
                gutterBottom
                sx={{
                  color: "#243771",
                  fontSize: { xs: "26px", sm: "34px", md: "34px", lg: "38px" },
                  lineHeight: "1.2",
                  fontWeight: "900",
                }}
              >
                Personal Loans- Handpicked Offers And Highest Disbursal Rate
              </Typography>
              <Typography
                sx={{
                  color: "#10162c",
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: "14px",
                  fontWeight: "100",
                  opacity: "0.9",
                  lineHeight: "normal",
                  padding: { xs: "10px", sm: "0px" },
                }}
              >
                So why wait ? Make your move and take that first step towards
                your aspirations.
              </Typography>
           
            <Box sx={{ width: { sm: "90%", md: "100%" } }}>
              <Typography
                sx={{
                  marginBottom: "14px",
                  color: "#404040",
                  fontSize: "14px",
                }}
              >
                Enter your 10 digit mobile number to proceed
              </Typography>
              {/* <CommonUserNumber /> */}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} display={{ xs: "none", sm: "flex" }}>
          <Hidden smDown>
            <Box
              sx={{
                display: { xs: "none", sm: "flex", md: "flex", xl: "flex" },
                justifyContent: "flex-end",
               
               
              }}
            >
              <Image
              priority={true}
                src={
                  personal_loan_banner
                }
                style={{
                  width: "90%",
                  height: "auto",
                }}
                alt="get personal loan with highest disbursal rate"
              />
            </Box>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
};

export default PlHomePage;
