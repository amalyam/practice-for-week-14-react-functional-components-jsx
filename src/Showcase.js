import squirtle from "./images/squirtle.jpg";

function Showcase() {
  let favPokemon = "Squirtle";
  let pokeCharacteristics = {
    type: "Water",
    move: "Water Gun",
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={squirtle} alt="{favPokemon}" />
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "#FFFFFF", color: "#008000" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
