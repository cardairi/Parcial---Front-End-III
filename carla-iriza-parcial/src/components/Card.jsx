
const Card = ({series, characters}) => {
console.log(series);
console.log(characters);

  return (
    <div>
      <p>{series}</p>
      <p>{characters}</p>
    </div>
  )
}

export default Card