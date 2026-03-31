import { useNavigate } from "react-router-dom";
import { topics } from "../data/topics";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Box,
  Chip,
} from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    if (id === "dsa") navigate("/dsa");
    else navigate(`/topic/${id}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight="bold">
            🚀 Learning Hub
          </Typography>

          <Typography mt={2} color="text.secondary">
            Master React, TypeScript & DSA with structured learning
          </Typography>

          <Chip label="Frontend Mastery System" sx={{ mt: 2 }} />
        </Box>

        {/* Cards */}
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          {topics.map((topic) => (
            <Card
              key={topic.id}
              sx={{
                borderRadius: 4,
                transition: "0.3s",
                background: "#fff",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardActionArea onClick={() => handleNavigation(topic.id)}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight="bold">
                    {topic.title}
                  </Typography>

                  <Typography mt={1} color="text.secondary">
                    {topic.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;