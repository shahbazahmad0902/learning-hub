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
        the lea rning hub is a platform that provides resources and tools for learning and development. It offers a wide range of courses, tutorials, and materials to help individuals enhance their skills and knowledge in various subjects. Whether you're looking to learn a new programming language, improve your design skills, or explore new technologies, the learning hub has something for everyone. With its user-friendly interface and comprehensive content, it's the perfect place to start your learning journey.
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