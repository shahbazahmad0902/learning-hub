import { useParams } from "react-router-dom";
import { Container, Typography, Box, Divider } from "@mui/material";

// Components
import Counter from "../components/learning/react/useState/Counter";
import InputBox from "../components/learning/react/useState/InputBox";
import User from "../components/learning/react/useState/User";
import Profile from "../components/learning/react/props/Profile";
import ButtonExample from "../components/learning/react/props/ButtonExample";
import PropDrilling from "../components/learning/react/props/PropDrilling";
import Card from "../components/learning/react/props/Card";

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
        <Typography>- State updates are asynchronous</Typography>
        <Typography>- Functional updates prevent stale state issues</Typography>
        <Typography>- Avoid storing derived state</Typography>
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
      {/* ================= PROPS ================= */}

      <Divider sx={{ my: 6 }} />

      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Props
      </Typography>

      {/* 📘 Notes */}
      <Box mb={4}>
        <Typography variant="h5">📘 Notes</Typography>
        <Typography>
          - Props are used to pass data from parent to child
        </Typography>
        <Typography>- Props are read-only (immutable)</Typography>
        <Typography>- You can pass functions as props</Typography>
        <Typography>- Avoid prop drilling using Context API</Typography>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* 🧪 Examples */}
      <Box mb={4}>
        <Typography variant="h5">🧪 Examples</Typography>

        <Box mb={3}>
          <Typography>Profile</Typography>
          <Profile name="Shahbaz" age={22} />
        </Box>

        <Box mb={3}>
          <Typography>Button (Function Props)</Typography>
          <ButtonExample label="Click Me" onClick={() => alert("Clicked!")} />
        </Box>

        <Box mb={3}>
          <Typography>Children Props</Typography>
          <Card>
            <Typography>This is inside Card</Typography>
          </Card>
        </Box>

        <Box mb={3}>
          <Typography>Prop Drilling</Typography>
          <PropDrilling />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* ⚡ Key Points */}
      <Box>
        <Typography variant="h5">⚡ Key Points</Typography>
        <Typography>✔ Props are read-only</Typography>
        <Typography>✔ Used for component communication</Typography>
        <Typography>
          ✔ Function props allow child → parent interaction
        </Typography>
        <Typography>✔ Prop drilling is a real problem</Typography>
      </Box>
    </Container>
  );
};

export default Topic;
