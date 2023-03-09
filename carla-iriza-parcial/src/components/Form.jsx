import React from "react";
import { useState } from "react";
import Card from './Card'

const Formulario = () => {
const [series, setSeries] = useState("");
const [characters, setCharacters] = useState("");
const [mostrarCard, setMostrarCard] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();

if (series.length < 3 || series.trim() === "") {
    alert(
    "El primer input debe tener al menos 3 caracteres sin espacios en blanco al principio."
    );
} else if (characters.length < 6) {
    alert("El segundo input debe tener al menos 6 caracteres.");
} else {
    setSeries("");
    setCharacters("");
    setMostrarCard(true);
}
};

return (
<div>
    <form onSubmit={handleSubmit}>
    <label>
        Serie favorita:
        <input
        type="text"
        id="series"
        value={series}
        onChange={(e) => setSeries(e.target.value)}
        />
    </label>

    <label>
        Personaje favorito:
        <input
        type="text"
        id="characters"
        value={characters}
        onChange={(e) => setCharacters(e.target.value)}
        />
    </label>
    <button type="submit">Submit</button>
    </form>

        {mostrarCard ? <Card series={series} characters={characters}/>:null}
        {
            mostrarCard && <Card series={series} characters={characters}/>
        }

</div>
);
};
export default Form;