import { Typography } from "@mui/material";

type ProfileProps = {
  name: string;
  age: number;
};

const Profile = ({ name, age }: ProfileProps) => {
  return (
    <Typography>
      {name} is {age} years old
    </Typography>
  );
};

export default Profile;