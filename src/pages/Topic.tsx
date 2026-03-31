import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Divider,
  Paper,
} from "@mui/material";

// useState components
import Counter from "../components/learning/react/useState/Counter";
import InputBox from "../components/learning/react/useState/InputBox";
import User from "../components/learning/react/useState/User";

// props components
import Profile from "../components/learning/react/props/Profile";
import ButtonExample from "../components/learning/react/props/ButtonExample";
import PropDrilling from "../components/learning/react/props/PropDrilling";
import CardWrapper from "../components/learning/react/props/Card";

const Section = ({ title, children }: any) => (
  <Paper
    elevation={2}
    sx={{
      p: 4,
      borderRadius: 3,
      mb: 4,
      background: "#fff",
    }}
  >
    <Typography variant="h5" fontWeight="bold" mb={2}>
      {title}
    </Typography>
    {children}
  </Paper>
);

const Topic = () => {
  const { id } = useParams();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#f8fafc",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* TITLE */}
        <Typography variant="h3" fontWeight="bold" mb={4}>
          React Fundamentals
        </Typography>

        {/* ================= useState ================= */}
        <Typography variant="h4" mb={2}>
          useState
        </Typography>

        <Section title="📘 Notes">
          <Typography>• Manages component state</Typography>
          <Typography>• Updates are async</Typography>
          <Typography>• Use functional updates</Typography>
        </Section>

        <Section title="🧪 Examples">
          <Box mb={3}>
            <Typography mb={1}>Counter</Typography>
            <Counter />
          </Box>

          <Box mb={3}>
            <Typography mb={1}>Input</Typography>
            <InputBox />
          </Box>

          <Box>
            <Typography mb={1}>User Object</Typography>
            <User />
          </Box>
        </Section>

        <Section title="⚡ Key Points">
          <Typography>✔ Avoid stale state</Typography>
          <Typography>✔ Do not mutate state</Typography>
          <Typography>✔ Use spread operator</Typography>
        </Section>

        {/* ================= PROPS ================= */}
        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" mb={2}>
          Props
        </Typography>

        <Section title="📘 Notes">
          <Typography>• Data flow parent → child</Typography>
          <Typography>• Props are immutable</Typography>
          <Typography>• Can pass functions</Typography>
        </Section>

        <Section title="🧪 Examples">
          <Profile name="Shahbaz" age={22} />

          <Box mt={2}>
            <ButtonExample
              label="Click Me"
              onClick={() => alert("Clicked")}
            />
          </Box>

          <Box mt={2}>
            <CardWrapper>
              <Typography>This is children prop</Typography>
            </CardWrapper>
          </Box>

          <Box mt={2}>
            <PropDrilling />
          </Box>
        </Section>

        <Section title="⚡ Key Points">
          <Typography>✔ Props are read-only</Typography>
          <Typography>✔ Used for communication</Typography>
          <Typography>✔ Avoid prop drilling</Typography>
        </Section>
      </Container>
    </Box>
  );
};

export default Topic;