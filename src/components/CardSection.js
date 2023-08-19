import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import InnerCard from "./InnerCard";
import { Box, Button, Grid, Paper, Stack, styled } from "@mui/material";
import NextLink from "next/link";
import FormOne from "./sfs/FormOne";
import FormTwo from "./sfs/FormTwo";
import Home from "./sfs/Home";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const data = [
  {
    id: 1,
    avatarUrl: "url_to_avatar_1",
    fullName: "Allan Mokua",
    2013: 16500,
    2014: 16500,
    2015: 16500,
    2016: 16500,
    2017: 16500,
    2018: 16500,
    2019: 16500,
    2020: 16500,
    2021: 16500,
    2022: 16500,
    2023: 16500,
    // ... other years ...
    2024: "",
  },
  {
    id: 2,
    avatarUrl: "url_to_avatar_2",
    fullName: "Lameck Nyaboga",
    2013: 25575,
    2014: 25575,
    2015: 25575,
    2016: 25575,
    2017: 25575,
    2018: 25575,
    2019: 25575,
    2020: "",
    2021: "",
    2022: "",
    2023: "",

    2024: "",
  },
  {
    id: 1,
    avatarUrl: "url_to_avatar_3",
    fullName: "Joy Nyamweya",
    2013: 18000,
    2014: 18000,
    2015: 18000,
    2016: 18000,
    2017: 18000,
    2018: 18000,
    2019: 18000,
    2020: 18000,
    2021: 18000,
    2022: 18000,
    2023: "",
    2024: "",
  },
];

const CardSection = () => {
  const [selectedChild, setSelectedChild] = useState(null);
  const handleChildSelection = (child) => {
    setSelectedChild(child);
  };

  const renderSelectedChild = () => {
    switch (selectedChild) {
      case "formOne":
        return <FormOne />;
      case "formTwo":
        return <FormTwo />;
      case "home":
        return <Home />;

      default:
        return null;
    }
  };

  return (
    <>
      <Card
        style={{
          width: "95%",
          minHeight: "80vh",
          borderRadius: "5vh",
          marginTop: "15vh",
          marginBottom: "2vh",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} md={4} xl={1} sx={{ mt: 20, mr: 0, pr: 0 }}>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2} sx={{ pl: 3 }}>
                <Item>
                  <NextLink
                    href=""
                    passHref
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body1">Home</Typography>
                  </NextLink>
                </Item>
                <Item>
                  <NextLink
                    href="/loans"
                    passHref
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body1">Seniors</Typography>
                  </NextLink>
                </Item>
                <Item>
                  <NextLink
                    href="/loans"
                    passHref
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body1">Form Four</Typography>
                  </NextLink>
                </Item>
                <Item>
                  <NextLink
                    href="/loans"
                    passHref
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body1">Form Three</Typography>
                  </NextLink>
                </Item>
                <Item>
                  <NextLink
                    href="/loans"
                    passHref
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body1">Form Two</Typography>
                  </NextLink>
                </Item>
                <Item>
                  <NextLink
                    href="/loans"
                    passHref
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="body1">Form One</Typography>
                  </NextLink>
                </Item>
                <Button onClick={() => handleChildSelection("formOne")}>
                  Form one
                </Button>
                <Button onClick={() => handleChildSelection("home")}>
                  Home
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={8} xl={11} sx={{ pl: 2, pb: 2, Pr: 0 }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
                color: "#283593",
              }}
            >
              Eswa School Fees Scheme - SFS
            </Typography>
            <Card
              style={{
                width: "95%",
                minHeight: "100vh",
                borderRadius: "3vh",
                background: "#f0f0f0",
              }}
            >
              <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                pr: 5,
                pb: 5,
                pt: 3,
                mt: 0,
                ml: 0,
              }}
              >
                {selectedChild ? renderSelectedChild() : <InnerCard />}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default CardSection;
