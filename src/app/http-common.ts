import axios from "axios";
export default axios.create({
    baseURL: "https://bp-pokemons.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});
