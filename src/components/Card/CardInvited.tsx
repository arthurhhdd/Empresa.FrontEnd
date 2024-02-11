import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { ILead } from "../../page/Lead";
import { updateLeadStatus } from "../../services/ApiServices";

interface CardInvitedProps {
  data: ILead;
}

const CardInvited = ({ data }: CardInvitedProps) => {
  const handleAccept = async () => {
    try {
      await updateLeadStatus(data.id, true);
      window.location.reload();
    } catch (error) {
      alert(
        "An error occurred while updating the lead status. Please try again later."
      );
    }
  };

  const handleDecline = async () => {
    try {
      await updateLeadStatus(data.id, false);
      window.location.reload();
    } catch (error) {
      alert(
        "An error occurred while updating the lead status. Please try again later."
      );
    }
  };

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
      </Grid>
      <Divider sx={{ marginTop: "16px", mx: -4 }} />
      <Typography variant="body2" mt={2} color="textSecondary">
        {data.description}
      </Typography>
      <Divider sx={{ marginTop: "16px", mx: -4 }} />
      <Grid container spacing={2} alignItems="center" mt={2}>
        <Grid item>
          <Button
            onClick={handleAccept}
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#FF7F2B",
              color: "white",
              fontWeight: "bold",
              fontSize: "0.8rem",
              textTransform: "none",
              borderRadius: "0px",
              width: "100px",
              boxShadow: "2px 2px 2px #EA6912",
              "&:hover": {
                backgroundColor: "#D96C25",
              },
            }}
          >
            Accept
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={handleDecline}
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#F2F2F2",
              color: "black",
              fontWeight: "bold",
              fontSize: "0.8rem",
              textTransform: "none",
              borderRadius: "0px",
              width: "100px",
              boxShadow: "2px 2px 2px #CCCCCC",
              "&:hover": {
                backgroundColor: "#D1D1D1",
              },
            }}
          >
            Decline
          </Button>
        </Grid>
        <Grid item xs>
          <Box display="flex" justifyContent="start" alignItems="center">
            <Typography fontWeight="bold" marginRight="4px">
              ${data.price}
              {data.price > 500 && (
                <span style={{ color: "red" }}> (10% discount applied)</span>
              )}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lead Invitation
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CardInvited;
