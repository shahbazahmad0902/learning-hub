import { useEffect, useState } from "react";
import { Typography, Button, Box } from "@mui/material";

const Timer = () => {
 const [time, setTime] = useState(0);
 const [running, setRunning] = useState(false);

 useEffect (()=>{
  if (!running) return;
    const interval = setInterval(() => {
        setTime((prev) => prev + 1);
    }, 1000);

     return () => {
      clearInterval(interval);
    };
    }, [running])


  return (
    <Box>
      <Typography variant="h6">Time: {time}s</Typography>
        <Button
          variant="contained"
          onClick={() => setRunning(!running)}
          >{running ? "Stop" : "Start"}</Button>
    </Box>
  );
};

export default Timer;