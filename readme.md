what command did we insert in terminal?

## about
it's a Pokemon Search App. The user types a Pokemon name in the search box, clicks the button, and the app fetches data from the PokeAPI and displays the Pokemon's name and image on the screen.

## description of each file
1. pokemonSlice.js — this is where we handle the API call using createAsyncThunk and store the result in Redux state. It tracks 3 things: the data, whether it's loading, and any errors.
2. store.js — this brings all our slices together into one Redux store that the whole app can access.
3. main.jsx — this is where we wrapped our app with <Provider> so every component can access the Redux store.
4. App.jsx — this is the actual UI. It has an input, a button, and displays the Pokemon name and image using data from the Redux store.

## how it works
1. The user types a name like pikachu in the input box. As they type, onChange updates the pokemonName state with setPokemonName.
2. The user clicks the search button. onClick fires and calls dispatch(fetchPokemon(pokemonName)). This sends the action to Redux.
3. Redux triggers createAsyncThunk which makes a fetch call to https://pokeapi.co/api/v2/pokemon/pikachu. While waiting, the state is set to loading: true.
4. If the Pokemon exists, the API sends back data. Redux sets loading: false and stores the data in state.data. If it doesn't exist, it throws an error and Redux sets state.error to 'Pokemon not found'.
5. Back in App.jsx, useSelector is always watching the Redux store. The moment the store updates, the component re-renders and displays either the loading message, the error, or the Pokemon name and image.
