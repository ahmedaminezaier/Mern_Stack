import react,{useState} from "react";

const PersonCard = (props) => {
const {firstName,lastName , age, hairColor} = props;
const [currentAge, setcurrentage] = useState(age);
const handleclick = () => {
    setcurrentage(currentAge + 1);
  };

  return (
    <div>
      <h1>{lastName}, {firstName}</h1>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleclick}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;