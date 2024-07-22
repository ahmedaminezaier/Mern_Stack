import react,{useState} from "react";

const PersonCard = (props) => {
const {firstName,lastName , age, hairColor} = props;
const [currentAge, setcurrentage] = useState(age);
const birthdayclick = () => {
    setcurrentage(currentAge + 1);
  };

  return (
    <div>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {currentAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={birthdayclick}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;