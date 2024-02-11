import { Box, Typography, Grid, Divider } from "@mui/material";
import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ILead } from "../../page/Lead.tsx";

interface CardAcceptedProps {
  data: ILead;
}

const CardAccepted = ({ data }: CardAcceptedProps) => {
  if (!data || !data.client) {
    return null;
  }

  return (
    <>
      <Grid container spacing={2} alignItems="center" mt={1}>
        <Grid item>
          <Box display="flex" alignItems="center">
            <FmdGoodIcon sx={{ paddingRight: "2px" }} />
            <Typography variant="body2" color="textSecondary">
              {data.client.suburb}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            <WorkOutlineIcon sx={{ paddingRight: "2px" }} />
            <Typography variant="body2" color="textSecondary">
              {data.category}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            Job ID: {data.id}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            ${data.price} Lead Invitation
            {data.price > 500 && (
              <span style={{ color: "red" }}> (10% discount applied)</span>
            )}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginTop: "16px", mx: -4 }} />
      <Grid container spacing={2} alignItems="center" mt={1}>
        <Grid item>
          <Box display="flex" alignItems="center">
            <CallIcon sx={{ paddingRight: "2px" }} />
            <Typography
              variant="body2"
              sx={{ color: "#FF7F2B", fontWeight: "bold" }}
            >
              {data.client.phone}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            <MailOutlineIcon sx={{ paddingRight: "2px" }} />
            <Typography
              variant="body2"
              sx={{ color: "#FF7F2B", fontWeight: "bold" }}
            >
              {data.client.email}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" mt={2} color="textSecondary">
        {data.description}
      </Typography>
    </>
  );
};

export default CardAccepted;
