import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link, Outlet } from "react-router-dom";

import TrendingPage from '../pages/Trending';
import { display, textAlign } from '@mui/system';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Trending" value="1" component={Link} to="/trending" />
            <Tab label="Random" value="2" component={Link} to="/random" />
            <Tab label="Search" value="3" component={Link} to="/search" />
          </TabList>
        </Box>
        {/* <TabPanel value="1"><TrendingPage/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}    {/*Since I have outlet I dont need this*/}
      </TabContext>
       <Outlet />   {/*This fixed the bug of api not working(research) */}
    </Box>
  );
}
