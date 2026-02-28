import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; //redux stores data temporrary on website(refresh removes data)
 
async function createAsyncThunk(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let data = await response.json();
return data
}

