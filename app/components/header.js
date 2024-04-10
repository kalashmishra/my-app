import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import Link from "next/link";
// import { credmudraLogo } from "@/public/assets/images/credmudra_logo_new.webp";
import credmudraLogo from "../../public/assets/images/credmudra_logo_new.webp"
import Image from "next/image";
function Header() {
  // const [showBox, setShowBox] = useState(false);
  const showBox = false;
  const menuBox = false;
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
                <Link href="/">
                  <Image
                    src={credmudraLogo}
                    alt="Picture of the author"
                    // <Image
                    //   sx={{
                    //   width: { xs: "150px", sm: "170px", md: "200px" },
                    //   cursor: "pointer",
                    // }}
                    // src='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600'
                    // alt="CredMudra Logo"
                  />
                </Link>
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
                    href="/business-loan"
                    // onClick={() => {
                    // setIsMenuVisible(!isMenuVisible);
                    // }}
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
                    href=""
                    // onMouseEnter={() => setShowBox(true)}
                  >
                    Personal Loan
                    {/* <KeyboardArrowDownOutlinedIcon
                      sx={{ height: "20px", width: "20px" }}
                    /> */}
                  </Link>
                  <Link
                    style={{
                      color: "white",
                      fontWeight: "500",
                      fontSize: "16",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    href="https://credmudra.com/blog/"
                  >
                    Blogs
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
                  {/* <MenuIcon
                    fontSize="large"
                    sx={{ color: "#000" }}
                    // onClick={() => setMenuBox(!menuBox)}
                  /> */}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {showBox && (
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: "230px",
            width: { md: "950px", lg: "1150px", xl: "1400px" },
            backgroundColor: "#000",
            position: "fixed",
            top: "64px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
        >
          <Grid Container sx={{ display: "flex", width: "100%" }}>
            <Grid
              item={4}
              sx={{
                bgcolor: "#000",
                width: "33%",
                padding: "20px 100px 0 30px",
              }}
            >
              <Typography
                sx={{
                  color: "#F7D64A",
                  fontWeight: 900,
                  paddingBottom: "10px",
                }}
                variant="h5"
              >
                Personal Loan
              </Typography>
              <Typography sx={{ color: "white" }}>
                Experience The Convenience Of Getting An Instant Personal Loan
                Through Our Easy Application Process.
              </Typography>
            </Grid>
            <Grid
              item={4}
              sx={{
                bgcolor: "#000",
                width: "33%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "30px",
              }}
            >
              <Link
                to="/personal-loan"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                Personal Loan
              </Link>
              <Link
                to="/debt-consolidation"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Debt Consolidation
              </Link>
              <Link
                to="/personal-loan-for-medical-emergency"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Medical Emergencies
              </Link>
              <Link
                to="/personal-loan-for-travel"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Travel
              </Link>
              <Link
                to="/personal-loan-for-two-wheeler"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Two Wheeler
              </Link>
            </Grid>
            <Grid
              item={4}
              sx={{
                bgcolor: "#000",
                width: "33%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                to="/personal-loan-for-home-renovation"
                style={{
                  color: "#fff",
                  paddingTop: "60px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan For Home Renovation
              </Link>
              <Link
                to="/personal-loan-eligibility"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan Eligibility
              </Link>
              <Link
                to="/personal-loan-interest-rate"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan Interest Rate
              </Link>
              <Link
                to="/personal-loan-emi-calculator"
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Personal Loan EMI Calculator
              </Link>
            </Grid>
          </Grid>
        </Box>
      )}
      {menuBox && (
        <Box
          sx={{
            position: "fixed",
            zIndex: "99",
            width: "100%",
            height: "auto",
            bgcolor: "#000",
            marginTop: { xs: "56px", sm: "64px" },
            display: { xs: "flex", md: "none" },
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <List sx={{ width: "100%" }}>
            <ListItem
              sx={{
                borderTop: "1px solid #F6D549",
                borderBottom: "1px solid #F6D549",
                paddingY: "10px",
              }}
              // onClick={() => {
              //   setMenuBox(!menuBox);
              //   scrollToTop();
              //   navigate("/business-loan");
              // }}
            >
              <Typography sx={{ color: "white", fontSize: "17px" }}>
                Business Loan
              </Typography>
            </ListItem>
            <Accordion
              sx={{
                backgroundColor: "transparent",
                color: "white",
                fontSize: "17px",
              }}
              onChange={handleMobilePersonalLoanClick}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#F6D549", fontSize: "20px" }} />
                }
                sx={{ maxHeight: "48px", marginY: "0px" }}
              >
                <Typography sx={{ color: "white", fontSize: "17px" }}>
                  Personal Loan
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: "1px solid #F6D549" }}>
                <Box
                  sx={{
                    bgcolor: "#000",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F7D64A",
                      fontWeight: 900,

                      paddingBottom: "10px",
                      textAlign: { xs: "left", sm: "center" },
                    }}
                    variant="h5"
                  >
                    Personal Loan
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      textAlign: { xs: "left", sm: "center" },
                    }}
                  >
                    Experience The Convenience Of Getting An Instant Personal
                    Loan Through Our Easy Application Process.
                  </Typography>
                </Box>
                <Grid
                  container
                  sx={{
                    display: "flex",

                    justifyContent: "space-around",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: { sm: "30px" },
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      bgcolor: "#000",
                      display: "flex",
                      flexDirection: "column",
                      paddingTop: "30px",
                    }}
                  >
                    <Link
                      to="/personal-loan"
                      // onClick={() => {
                      // setMenuBox(!menuBox);
                      // }}
                      style={{
                        color: "#fff",

                        textDecoration: "none",
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                    >
                      Personal Loan
                    </Link>
                    <Link
                      href="/debt-consolidation"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Debt Consolidation
                    </Link>
                    <Link
                      href="/personal-loan-for-medical-emergency"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Medical Emergencies
                    </Link>
                    <Link
                      href="/personal-loan-for-travel"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Travel
                    </Link>
                    <Link
                      href="/personal-loan-for-two-wheeler"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Two Wheeler
                    </Link>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    sx={{
                      bgcolor: "#000",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      href="/personal-loan-for-home-renovation"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "60px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan For Home Renovation
                    </Link>
                    <Link
                      href="/personal-loan-eligibility"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan Eligibility
                    </Link>
                    <Link
                      href="/personal-loan-interest-rate"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",

                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan Interest Rate
                    </Link>
                    <Link
                      href="/personal-loan-emi-calculator"
                      // onClick={() => {
                      //   setMenuBox(!menuBox);
                      //   scrollToTop();
                      // }}
                      style={{
                        color: "#fff",
                        paddingTop: "10px",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Personal Loan EMI Calculator
                    </Link>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <ListItem
              sx={{
                color: "white",
                fontSize: "17px",
                paddingY: "10px",
                borderTop: "1px solid #F6D549",
                borderBottom: "1px solid #F6D549",
              }}
            >
              <Link
                href="https://credmudra.com/blog/"
                style={{ textDecoration: "none" }}
              >
                <Typography sx={{ color: "white", fontSize: "17px" }}>
                  Blogs
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Box>
      )}
    </>
  );
}

export default Header;
