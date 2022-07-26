import SignUp from "@components/SignUp";
import SignIn from "@components/SignIn";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import SSwitchTabs from "./style";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span" variant="body2">
            {children}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default function LogIn() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function tabIndex(index) {
    return {
      id: `${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <SSwitchTabs>
      <Box
        sx={{ maxWidth: "90%", backgroundColor: "white", borderRadius: "8px" }}
      >
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Se connecter"
              id={tabIndex(0).id}
              aria-controls={tabIndex(0)["aria-controls"]}
            />
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
    </SSwitchTabs>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
