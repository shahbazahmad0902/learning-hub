import { useNavigate } from "react-router-dom";
import { topics } from "../data/topics";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Box,
} from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    if (id === "dsa") {
      navigate("/dsa");
    } else {
      navigate(`/topic/${id}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
           Learning Hub
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Master React, TypeScript & DSA with structured learning
        </Typography>
      </Box>

      {/* Cards using Flex */}
      <Box
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
      >
        {topics.map((topic) => (
          <Box
            key={topic.id}
            sx={{
              width: {
                xs: "100%",
                sm: "45%",
                md: "30%",
              },
            }}
          >
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea onClick={() => handleNavigation(topic.id)}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {topic.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {topic.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;