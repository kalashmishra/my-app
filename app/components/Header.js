import {
  AppBar,
  Box,
  CardMedia,
  Container,
  Stack,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import crednudraLogo from "../../public/assets/images/credmudra_logo_new.webp";
const Header = () => {
  return (
    <>
      <Box>
        <AppBar
          sx={{
            boxShadow: "none",
            backgroundColor: "black",
          }}
        >
          <Container maxWidth="xl" sx={{ padding: { md: "0 4.3%" } }}>
            <Toolbar sx={{ paddingX: { xs: 0 } }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                paddingX={{ xs: "0px", sm: "24px", md: "48px" }}
              >
                <Link href={'/'}>
                <Image
                  blurDataURL="data:..."
                  placeholder="blur" 
                  src={crednudraLogo}
                  alt="CredMudra Logo"
                /></Link>
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    cursor: "pointer",
                  }}
                >
                  <Link
                    style={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16",
                      textDecoration: "none",
                    }}
                    href="/BusinessPage"
                  >
                    Business Loan
                  </Link>
                  <Link
                    style={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16",
                      textDecoration: "none",
                      display: "flex",
                    }}
                    href="/PersonalPage"
                  >
                    Personal Loan
                    <KeyboardArrowDownOutlinedIcon
                      sx={{ height: "20px", width: "20px" }}
                    />
                  </Link>
                </Stack>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                    height: { xs: "33px", sm: "36px" },
                    width: { xs: "38px", sm: "42px" },
                    bgcolor: "#F7D64A",
                    borderRadius: "2px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MenuIcon fontSize="large" sx={{ color: "#000" }} />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
