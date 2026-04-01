import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const ApiFetch = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) {
          setData(json);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Box>
      <Typography variant="h6">API Data</Typography>
      <Typography>
        {data ? data.title : "Loading..."}
      </Typography>
    </Box>
  );
};

export default ApiFetch;