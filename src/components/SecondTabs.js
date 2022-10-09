import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Company from "./Company";
import Tasks from "./Tasks";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabsSecond() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Задания" {...a11yProps(0)} />
                    <Tab label="Мероприятия" {...a11yProps(1)} />
                    <Tab label="Обучение" {...a11yProps(2)} />
                    <Tab label="Активности" {...a11yProps(3)} />
                </Tabs>
            </Box> S$dup9|z"M.@
            <TabPanel value={value} index={0}>
                <Tasks/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                😢
            </TabPanel>
            <TabPanel value={value} index={2}>
                😢
            </TabPanel>
            <TabPanel value={value} index={3}>
                😢
            </TabPanel>
        </Box>
    );
}
