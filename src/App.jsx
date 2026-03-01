import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from './store/pokemonSlice';

function App() {
  const [pokemonName, setPokemonName] = useState('')
const dispatch= useDispatch();
const pokemon = useSelector(
   (state) => 
    state.pokemon  //result stored in pokemon
  )
  return (
  
    <>
    <h1>Pokemon searching</h1>
    <input type="text" placeholder="enter Pokemon name" value={pokemonName} onChange={(e)=> setPokemonName(e.target.value)}/>
    <button type="button" onClick={() => dispatch(fetchPokemon(pokemonName))}>triggers search</button>
    </>


    
  )
  pokemon
}


