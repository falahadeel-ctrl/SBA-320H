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
    <h1>title</h1>
    <input type="text">pokemon name</input>
    <button>triggers search</button>
    </>
  )
}


