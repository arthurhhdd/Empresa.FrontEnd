import { Card as MuiCard, Box, Typography, Grid, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Avatar from "../Avatar.tsx";
import CardInvited from "./CardInvited.tsx";
import CardAccepted from "./CardAccepted.tsx";
import { format } from "date-fns";
import { ILead } from "../../page/Lead.tsx";

interface CardProps {
  status: string;
  data: ILead;
}

const CardLead = ({ status, data }: CardProps) => {
  const formattedDate = format(
    new Date(data.creationDate),
    "MMMM dd yyyy @ hh:mm a"
  );

  return (
    <StyledCard>
      <Box p={2}>
        <Grid container alignItems="center" spacing={1.5}>
          <Grid item>
            <Avatar value={data.client.nameClient} size={45} />
          </Grid>
          <Grid item>
            <Typography fontWeight="bold">{data.client.nameClient}</Typography>
            <Typography variant="body2" color="textSecondary">
              {formattedDate}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: "16px", mx: -4 }} />
        {status === "invited" ? (
          <CardInvited data={data} />
        ) : (
          <CardAccepted data={data} />
        )}
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled(MuiCard)(({ theme }) => ({
  width: "700px",
  px: 1.5,
  border: `1px solid ${theme.palette.background.paper}`,
  borderRadius: "4px",
  boxShadow: "0px 6px 16px 0px rgba(118, 121, 180, 0.24)",
}));

export default CardLead;
