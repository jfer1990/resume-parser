import { Grid } from "@mui/material";
import { ReviewerItem } from "../components/ReviewerItem";
import { useContext, useState } from "react";
import { ReviewerContext } from "../components/context/Reviewercontext";

export const ReviewersTable = () => {
  const { reviewers } = useContext(ReviewerContext);
  return (
    <Grid
      container
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
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="noWrap"
        sx={{
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: 3,
          margin: "40px",
        }}
      >
        {reviewers.map((reviewer) => (
          <ReviewerItem key={reviewer} reviewer={reviewer} />
        ))}
      </Grid>
    </Grid>
  );
};
