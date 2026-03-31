import { useParams } from "react-router-dom";
import { Container, Typography, Box, Divider } from "@mui/material";

// Components
import Counter from "../components/learning/react/useState/Counter";
import InputBox from "../components/learning/react/useState/InputBox";
import User from "../components/learning/react/useState/User";

const Topic = () => {
  const { id } = useParams();

  if (id !== "react") {
    return <Typography>Topic not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        useState
      </Typography>

      {/* 📘 Notes */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          📘 Notes
        </Typography>

        <Typography>
          - useState is used to manage state in functional components
        </Typography>
        <Typography>
          - State updates are asynchronous
        </Typography>
        <Typography>
          - Functional updates prevent stale state issues
        </Typography>
        <Typography>
          - Avoid storing derived state
        </Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 🧪 Examples */}
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          🧪 Examples
        </Typography>

        <Box mb={3}>
          <Typography variant="subtitle1">Counter</Typography>
          <Counter />
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle1">Controlled Input</Typography>
          <InputBox />
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle1">Object State</Typography>
          <User />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* ⚡ Key Points */}
      <Box>
        <Typography variant="h5" gutterBottom>
          ⚡ Key Points
        </Typography>

        <Typography>✔ State updates are async</Typography>
        <Typography>✔ Always use functional updates when needed</Typography>
        <Typography>✔ Do not mutate state directly</Typography>
        <Typography>✔ Spread operator is important for objects</Typography>
      </Box>
    </Container>
  );
};

export default Topic;