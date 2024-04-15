import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import img1 from "@/public/assets/images/user-engagement.png";
import img2 from "@/public/assets/images/user-engagementa.png";
import img3 from "@/public/assets/images/user-engagements.png";

const ThreeBanners = () => {
  return (
    <Box bgcolor="#FCEFB8">
      <Container
        maxWidth={"xl"}
        sx={{ padding: { xs: "60px 16px", md: "60px 6.5%" } }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                width: "100%",
                minHeight: { xs: "150px", xl: "150px" },
                position: "relative",
                backgroundColor: "#24356C",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "900",
                    margin: "30px 0px 8px",
                  }}
                >
                  Mudra Mentors+
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    margin: "0px 0px 8px",
                    width: "65%",
                  }}
                >
                  Engage with an extended community of Financial Advisors.
                </Typography>
              </CardContent>
              <Image
                alt="Banners"
                src={img1}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  width: "66px",
                  height: "66px",
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                width: "100%",
                minHeight: { xs: "150px", xl: "150px" },
                position: "relative",
                backgroundColor: "#24356C",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "900",
                    margin: "30px 0px 8px",
                  }}
                >
                  Resources
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    margin: "0px 0px 8px",
                    width: "65%",
                  }}
                >
                  Know the moves that lead to Financial Freedom.
                </Typography>
              </CardContent>
              <Image
                alt="Banners"
                src={img2}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  width: "66px",
                  height: "66px",
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                width: "100%",
                minHeight: { xs: "150px", xl: "150px" },
                position: "relative",
                backgroundColor: "#24356C",
                borderRadius: "10px",
              }}
            >
              <CardContent
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "900",
                    margin: "30px 0px 8px",
                  }}
                >
                  Seek Solutions?
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    margin: "0px 0px 8px",
                    width: "65%",
                  }}
                >
                  Let’s connect at Support@Credmudra.com
                </Typography>
              </CardContent>
              <Image
                alt="Banners"
                src={img3}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  width: "66px",
                  height: "66px",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThreeBanners;
