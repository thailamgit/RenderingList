import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List () {
  const chemists = people.filter(person => person.profession === 'chemist')
  const otherPeople = people.filter(person => person.profession !== 'chemist')
  const listChemist = chemists.map(person =>
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
      <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for: {person.accomplishment}
      </p>
    </li>
  )
  const listOthers = otherPeople.map(person =>
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
      <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for: {person.accomplishment}
      </p>
    </li>
  )
  return (
    <>
      <h1>Chemists</h1>
      <ul>{listChemist}</ul>
      <br/>
      <h1>Everyone Else</h1>
      <ul>{listOthers}</ul>
    </>
  );
}