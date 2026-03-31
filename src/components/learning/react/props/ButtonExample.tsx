import { Button } from "@mui/material";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const ButtonExample = ({ label, onClick }: ButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default ButtonExample;