import SignUp from "@components/SignUp";
import SignIn from "@components/SignIn";
import { Tabs, Tab, Typography, Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import PropTypes from "prop-types";
import SSwitchTabs from "./style";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1ea0a5",
    },
  },
});

function TabPanel(props) {
  const { children, value, index } = props;

  TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabIndex(index) {
  return {
    id: `${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SSwitchTabs>
      <ThemeProvider theme={theme}>
        <div className="tab">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Tab
                  label="Se connecter"
                  id={tabIndex(0).id}
                  aria-controls={tabIndex(0)["aria-controls"]}
                />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Tab
                  label="S'inscrire"
                  id={tabIndex(1).id}
                  aria-controls={tabIndex(1)["aria-controls"]}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <SignIn />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
          </Box>
        </div>
      </ThemeProvider>
    </SSwitchTabs>
  );
}
