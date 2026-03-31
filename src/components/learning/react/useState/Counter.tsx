import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Box>
      <Typography variant="h6">Count: {count}</Typography>

      <Button
        variant="contained"
        sx={{ mr: 2, mt: 1 }}
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        +2
      </Button>

      <Button
        variant="outlined"
        sx={{ mt: 1 }}
        onClick={() => setCount((prev) => prev - 1)}
      >
        -1
      </Button>
    </Box>
  );
};

export default Counter;