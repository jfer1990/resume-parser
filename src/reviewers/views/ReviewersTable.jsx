import { Box, Grid } from "@mui/material";
import { ReviewerItem } from "../components/ReviewerItem";
import { useContext, useState } from "react";
import { ReviewerContext } from "../components/context/Reviewercontext";

export const ReviewersTable = () => {
  const { reviewers } = useContext(ReviewerContext);
  return (
    <Box
      display="flex"
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns="repeat(auto-fit, minmax(160px, 250px))"
        // grid-template-columns repeat(auto-fit, minmax(160px, 250px));
        sx={{
          // backgroundColor: "white",
          borderRadius: 3,
          margin: "40px",
          overflow: "hidden",
        }}
      >
        {reviewers.map((reviewer) => (
          <ReviewerItem
            key={JSON.stringify(reviewer)}
            reviewer={reviewer.name}
          />
        ))}
      </Grid>
    </Box>
  );
};
