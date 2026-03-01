import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; //redux stores data temporrary on website(refresh removes data)
 
export const fetchPokemon = createAsyncThunk(`pokemon/fetchPokemon`, async(name)=>{  //feteching pokemon from api useing url
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let data = await response.json();
return data
})

const pokemonSlice = createSlice({  //function takeing object with some properties
    name: `pokemon`,
    initialState: {
data: null,
loading: false,
error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchPokemon.pending, (state)=> {
       state.loading =true
       state.error = null
        })
        .addCase(fetchPokemon.fulfilled, (state, action) =>{
        action.payload.loading=false
        action.payload.error= null
        })
        .addCase(fetchPokemon.rejected, (state) =>{
        action.payload.loading= false
        action.payload.error= true
        })
    }

})