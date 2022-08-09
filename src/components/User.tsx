type UserProps = {
  user: {
    name: string;
    age: number;
    isSmoker: boolean;
    lang: string[];
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      {user.isSmoker ? <p>Smoker</p> : <p>Non Smoker</p>}
      <p>
        Speaks:
        {user.lang.map((language, index) => {
          return <span key={index}>{language} </span>;
        })}
      </p>
    </div>
  );
};

export default User;
