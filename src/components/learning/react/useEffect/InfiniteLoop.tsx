import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const InfiniteLoop = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ❌ DO NOT DO THIS
    setCount((prev) => prev + 1);
  }, []);

  return <Typography>Count: {count}</Typography>;
};

export default InfiniteLoop;