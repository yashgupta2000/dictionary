import { ThemeProvider, createTheme } from '@mui/system';
import { useEffect, useState } from 'react';

import Content from '../Content/content';
import { MenuItem } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import categories from '../Data/Category';

const Header = () => {
    const [meaning, setMeanings] = useState([]);
    const [textValue, setTextValue] = useState('');
    const [category, setcategory] = useState('en');



    const dictionaryApi = async () => {
        try {
            const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${textValue}`)
            setMeanings(data.data);
            console.log(data.data);
        } catch (err) {
            console.log(err)
        }
    }

    console.log(meaning);

    useEffect(() => {
        return () => {
            dictionaryApi()
        };
    }, [textValue, category])

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            mode: 'dark',
        },
    });

    return <div style={{ height: "100%", backgroundColor: "#282c34", color: 'white' }} className="App">
        <h1 style={{ fontSize: '40px' }} className='heading'>{textValue.toUpperCase() === '' ? 'Word Hunt' : textValue.toUpperCase()}</h1>

        <div className='text-container'>
            <div className='input'>

                <ThemeProvider theme={darkTheme}>
                    <TextField onChange={(e) => {
                        setTextValue(e.target.value)
                        console.log(e.target.value)
                    }} id="standard-basic" label="Standard" variant="standard" />
                </ThemeProvider>


            </div>
            <div className='input'>
                <ThemeProvider>
                    <TextField
                        id="standard-select-currency"

                        select
                        label="Language"
                        defaultValue="ENGLISH"
                        style={{ width: 150 }}
                        variant="standard"
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>


        </div>
        <Content meaning={meaning} textValue={textValue} category={category} />

    </div>
}



export default Header;