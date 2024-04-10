import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




export default function Todo() {
    const [value, setValue] = React.useState('1');

    const [add, setAdd] = useState({
        "status": false,
        "name": ""
    })

    const [list, setList] = useState([
        {
            "status": false,
            'name': "con ngang"
        },
        {
            "status": true,
            'name': "con hac"
        },
        {
            "status": false,
            'name': "con ngong"
        }
    ])

    const handleAdd = () => {
        setList(prevList => ([...prevList, add]));
        setAdd({ "status": false, 'name': "" });
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box
            maxWidth={'600px'}
            margin={'auto'}
            marginTop={'50px'}
            alignContent={'center'}
            justifyContent={'center'}
            textAlign={'center'}
        >
            <Typography textAlign={'center'} variant="h5" color="initial">
                #Todo
            </Typography>
            <Box sx={{ width: '100%', typography: 'body1', justifyContent: 'center' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyItems: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All" value="1" />
                            <Tab label="Active" value="2" />
                            <Tab label="Completed" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <TextField
                            label="Search"
                            value={add.name}
                            onChange={(e) => setAdd({ ...add, name: e.target.value })}
                        />
                        <Button onClick={handleAdd} sx={{ marginLeft: '20px', padding: '32px', paddingY: '16px' }} variant="contained" color="primary" >
                            Add
                        </Button>
                        <br />
                        <br />

                        <Box maxWidth={'500px'} margin={'auto'}>
                            <Grid
                                container
                                spacing={1}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                wrap="wrap"

                            >
                                {list.map((item, index) => (
                                    <>
                                        <Grid item xs={12}>
                                            <Box
                                                display='flex'
                                                alignItems={'center'}
                                                text
                                            >
                                                <Checkbox
                                                    value={item.status}
                                                    checked={item.status}
                                                    onChange={(e) => {
                                                        const newList = [...list]
                                                        newList[index].status = e.target.checked
                                                        setList(newList)
                                                    }}

                                                    color="primary"
                                                />

                                                <Typography variant="body1" color="initial">
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                        </Grid>

                                    </>
                                ))}
                            </Grid >
                        </Box>
                    </TabPanel>
                    <TabPanel value="2">
                        <TextField
                            label="Search"
                            value={add.name}
                            onChange={(e) => setAdd({ ...add, name: e.target.value })}
                        />
                        <Button onClick={handleAdd} sx={{ marginLeft: '20px', padding: '32px', paddingY: '16px' }} variant="contained" color="primary" >
                            Add
                        </Button>
                        <br />
                        <br />

                        <Box maxWidth={'500px'} margin={'auto'}>
                            <Grid
                                container
                                spacing={1}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                wrap="wrap"

                            >
                                {list.filter(item => item.status === false).map((item) => (
                                    <>
                                        <Grid item xs={12}>
                                            <Box
                                                display='flex'
                                                justifyItems={'center'}
                                                alignItems={'center'}
                                                text
                                            >
                                                <Checkbox

                                                    checked={item.status}
                                                    color="primary"
                                                />

                                                <Typography variant="body1" color="initial">
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </>
                                ))}
                            </Grid>
                        </Box>

                    </TabPanel>
                    <TabPanel value="3">
                        <Box maxWidth={'500px'} margin={'auto'}>
                            <Grid
                                container
                                spacing={1}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                wrap="wrap"

                            >
                                {list.filter(item => item.status === true).map((item, index) => (
                                    <>
                                        <Grid item xs={12}>
                                            <Box
                                                display='flex'
                                                justifyContent={'space-between'}
                                                alignItems={'center'}
                                                text
                                            >
                                                <Box
                                                    display='flex'
                                                    alignItems={'center'}
                                                    text>
                                                    <Checkbox
                                                        checked={item.status}
                                                        color="primary"
                                                    />

                                                    <Typography width={'100px'} variant="body1" color="initial">
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                                <Button sx={{ marginLeft: '20px' }} variant='none'
                                                    onClick={() => {
                                                        const newList = list.filter((items) => items.name !== item.name)
                                                        setList(newList)
                                                    }}
                                                >
                                                    <DeleteOutlineIcon />
                                                </Button>
                                            </Box>
                                        </Grid >
                                    </>
                                ))}
                            </Grid>
                            <Button sx={{ display: 'flex', marginLeft: "300px" }} variant="text" color="error"
                                onClick={() => {
                                    const newList = []
                                    setList(newList)
                                }}

                            >
                                Delete all
                            </Button>
                        </Box>

                    </TabPanel>
                </TabContext>
            </Box>
        </Box >
    )
}
