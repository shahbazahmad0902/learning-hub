import { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });

  return (
    <div>
      <input
        placeholder="Name"
        onChange={(e) =>
          setUser(prev => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) =>
          setUser(prev => ({ ...prev, age: Number(e.target.value) }))
        }
      />

      <p>{user.name} - {user.age}</p>
    </div>
  );
};
export default User;