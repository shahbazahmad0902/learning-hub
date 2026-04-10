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
        this is sidear amd it is used to navigate between different topics and sections of the learning hub. It provides quick access to various resources and materials related to programming, data structures, algorithms, and more. The sidebar is designed to enhance the user experience by allowing easy navigation and organization of content within the learning platform.
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