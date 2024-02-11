import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardLead from "../components/Card/CardLead.tsx";
import { getLead } from "../services/ApiServices.js";
import { TabPanel, a11yProps } from "../components/TabPanel.tsx";
import { CircularProgress } from "@mui/material";

export interface ILead {
  id: number;
  category: string;
  description: string;
  price: number;
  statusId: number;
  idClient: number;
  creationDate: string;
  client: {
    nameClient: string;
    suburb: string;
    phone: string;
    email: string;
  };
}

const Lead = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [invitedLeads, setInvitedLeads] = React.useState<ILead[]>([]);
  const [acceptedLead, setAcceptedLead] = React.useState<ILead[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const invitedLeadsResponse = await getLead(1);
        setInvitedLeads(invitedLeadsResponse);
        const acceptedLeadResponse = await getLead(3);
        setAcceptedLead(acceptedLeadResponse);
      } catch (error) {
        alert(
          "An error occurred while fetching the data. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{ bgcolor: "#F5F5F5", width: "100%", pt: 2, minHeight: "100vh" }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "orange",
                height: "3px",
              },
            }}
          >
            <Tab
              label="Invited"
              {...a11yProps(0)}
              sx={{ fontWeight: "bold", color: "black" }}
            />
            <Tab
              label="Accepted"
              {...a11yProps(1)}
              sx={{ fontWeight: "bold", color: "black" }}
            />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress sx={{ color: "#FF7F2B" }} />
            </Box>
          ) : (
            invitedLeads.map((lead) => {
              if (!lead || !lead.client) {
                return null;
              }

              const data = {
                id: lead.id,
                category: lead.category,
                description: lead.description,
                price: lead.price,
                statusId: lead.statusId,
                idClient: lead.idClient,
                creationDate: lead.creationDate,
                client: {
                  nameClient: lead.client.nameClient,
                  suburb: lead.client.suburb,
                  phone: lead.client.phone,
                  email: lead.client.email,
                },
              };

              return (
                <div style={{ margin: "16px" }}>
                  <CardLead status="invited" key={lead.id} data={data} />
                </div>
              );
            })
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress sx={{ color: "#FF7F2B" }} />
            </Box>
          ) : (
            acceptedLead.map((lead) => {
              if (!lead || !lead.client) {
                return null;
              }
              const data = {
                id: lead.id,
                category: lead.category,
                description: lead.description,
                price: lead.price,
                statusId: lead.statusId,
                idClient: lead.idClient,
                creationDate: lead.creationDate,
                client: {
                  nameClient: lead.client.nameClient,
                  suburb: lead.client.suburb,
                  phone: lead.client.phone,
                  email: lead.client.email,
                },
              };

              return (
                <div style={{ margin: "16px" }}>
                  <CardLead status="accepted" key={lead.id} data={data} />
                </div>
              );
            })
          )}
        </TabPanel>
      </Box>
    </>
  );
};

export default Lead;
