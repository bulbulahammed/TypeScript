type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: UserDemoProps) => {
  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserDemo;
