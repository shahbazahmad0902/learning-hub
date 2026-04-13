import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 220,
        height: "100vh",
        borderRight: "1px solid #eee",
        p: 2,
      }}
    >
      <Typography fontWeight="bold" mb={3}>
        🚀 Learning Hub 
        just a place to learn and grow together! 
        start your learning journey with us and explore a wide range of topics, 
        from programming languages to data structures and algorithms.
      </Typography>

      <Button fullWidth onClick={() => navigate("/")}>
        Home
      </Button>

      <Button fullWidth onClick={() => navigate("/topic/react")}>
        React
      </Button>

      <Button fullWidth onClick={() => navigate("/dsa")}>
        DSA
      </Button>
    </Box>
  );
};

export default Sidebar;