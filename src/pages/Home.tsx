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
  Button,
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
        background: (theme) => theme.palette.background.default,
      }}
    >
      

      {/* 🔥 HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            🚀 Learning Hub 
            student's best friend for mastering React, TypeScript & DSA
          </Typography>

          <Typography mt={2} sx={{ opacity: 0.9 }}>
            Master React, TypeScript & DSA with structured learning
          </Typography>

          <Chip
            label="Frontend Mastery System"
            sx={{
              mt: 3,
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
            }}
          />
        </Container>
      </Box>

      {/* 🔥 CONTENT */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Section Title */}
        <Typography variant="h5" fontWeight="bold" mb={4}>
          📚 Explore Topics
        </Typography>

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
                background: (theme) => theme.palette.background.paper,
                border: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardActionArea onClick={() => handleNavigation(topic.id)}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {topic.title}
                  </Typography>

                  <Typography mt={1} color="text.secondary">
                    {topic.description}
                  </Typography>

                  <Box mt={3}>
                    <Button size="small">Explore →</Button>
                  </Box>
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
