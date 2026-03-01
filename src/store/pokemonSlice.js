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
        .addCase(fetchPokemon.pending, (state)=> { //state is our redux
       state.loading =true
       state.error = null
        })
        .addCase(fetchPokemon.fulfilled, (state, action) =>{ //action.payload is data comeing back from api
        state.loading=false
        state.data= action.payload   // data stored in state.data useing action.payload
        })
        .addCase(fetchPokemon.rejected, (state) =>{
        state.loading= false
        state.error= 'not found'
        })
    }

})

export default pokemonSlice.reducer //pokemon is the whole slice object and we only need .redcuer part to grab specfic object