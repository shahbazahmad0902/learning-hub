import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Name"
        onChange={(e) =>
          setUser((prev) => ({ ...prev, name: e.target.value }))
        }
      />

      <TextField
        label="Age"
        type="number"
        onChange={(e) =>
          setUser((prev) => ({
            ...prev,
            age: Number(e.target.value),
          }))
        }
      />

      <Typography>
        {user.name} - {user.age}
      </Typography>
    </Box>
  );
};

export default User;