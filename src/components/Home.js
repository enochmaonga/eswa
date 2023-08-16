import { Box, Button, Container, Grid, Stack, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import NextLink from "next/link";
import PageSection from "./PageSection";
import PageContainer from "./PageContainer";


const StyledTypographyHeading = styled(Typography)(() => ({
  marginBottom: 20,
  textAlign: "center",
}));

const StyledTypographyContent = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));

const StyledTypographyItalic = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontStyle: "italic",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
}));

const SectionOneButtonWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  paddingLeft: 24,
  paddingRight: 24,
  marginTop: 50,
}));
function Home() {
  const themeDefinitions = useTheme();
  const isMobile = useMediaQuery(themeDefinitions.breakpoints.down("md"));
  return (
    <PageSection component="section">
    <PageContainer
      sx={(theme) => ({
        mt: 15,
        mb: 30,
        pt: 0,
        pb: 0,
        [theme.breakpoints.down("md")]: {
          mt: 5,
          mb: 8,
        },
      })}
    >
  
    <Grid container spacing={2}>
      <Grid item lg={3} />
      <Grid item lg={6} xl={6} sm={12} xs={12}>
        <StyledTypographyHeading variant="h1" color="#283593">
          Eswa Group
        </StyledTypographyHeading>
        <StyledTypographyContent variant="body1">
          The future is Brighter with God.{" "}
          <StyledTypographyItalic
            variant="body1"
            color="primary"
            component="span"
          >
            We have to Know who we are,
          </StyledTypographyItalic>{" "}
          what we stand for{" "}
          <StyledTypographyItalic
            variant="body1"
            color="primary"
            component="span"
          >
            and what we believe in
          </StyledTypographyItalic>{" "}
          And we should not lose that identity{" "}
          <StyledTypographyItalic
            variant="body1"
            color="primary"
            component="span"
          >
            nor should we be afraid of what we 
          </StyledTypographyItalic>{" "}
          believe in and what we stand for.
        </StyledTypographyContent>
        <SectionOneButtonWrapper>
          <Stack direction="row" spacing={5}>
            <NextLink href="/loans" passHref>
            <Button
              variant="contained"
              color="primary"
              size={isMobile ? "small" : "large"}
            >
              Loans
            </Button>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button
              variant="outlined"
              size={isMobile ? "small" : "large"}
            >
             LogIn
            </Button>
          </NextLink>
        </Stack>
      </SectionOneButtonWrapper>
    </Grid>
    </Grid>
 </PageContainer>
 </PageSection>
  )
}

export default Home;
