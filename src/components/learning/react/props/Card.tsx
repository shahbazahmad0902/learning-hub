import { Box } from "@mui/material";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
        mt: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;