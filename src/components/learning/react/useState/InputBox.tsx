import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const InputBox = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Box>
      <TextField
        label="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
      />

      <Typography sx={{ mt: 2 }}>
        You typed: {value}
      </Typography>
    </Box>
  );
};

export default InputBox;