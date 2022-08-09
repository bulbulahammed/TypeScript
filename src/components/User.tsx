type UserProps = {
  name: string;
  age: number;
  isSmoker: boolean;
};

const User = ({ name, age, isSmoker }: UserProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      {isSmoker ? <p>Smoker</p> : <p>Non Smoker</p>}
    </div>
  );
};

export default User;
