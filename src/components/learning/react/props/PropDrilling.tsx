import { Typography, Button } from "@mui/material";

type Props = {
  name: string;
};

// GrandChild
const GrandChild = ({ name }: Props) => {
  return <Typography>GrandChild: {name}</Typography>;
};

// Child
const Child = ({ name }: Props) => {
  return <GrandChild name={name} />;
};

// Parent
const PropDrilling = () => {
  const name = "Shahbaz";

  return (
    <>
      <Typography>Parent → Child → GrandChild</Typography>
      <Child name={name} />
    </>
  );
};

export default PropDrilling;