import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
  Chip,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

// Components
import Counter from "../components/learning/react/useState/Counter";
import InputBox from "../components/learning/react/useState/InputBox";
import User from "../components/learning/react/useState/User";

import Profile from "../components/learning/react/props/Profile";
import ButtonExample from "../components/learning/react/props/ButtonExample";
import PropDrilling from "../components/learning/react/props/PropDrilling";
import CardWrapper from "../components/learning/react/props/Card";

import Timer from "../components/learning/react/useEffect/Timer";
import ApiFetch from "../components/learning/react/useEffect/ApiFetch";
import InfiniteLoop from "../components/learning/react/useEffect/InfiniteLoop";

const Topic = () => {
  const [search, setSearch] = useState("");

  const topics = [
    {
      title: "useState",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Manages component state and supports functional updates.
          </Typography>

          <Box mt={3} display="flex" flexDirection="column" gap={3}>
            <Counter />
            <InputBox />
            <User />
          </Box>
        </>
      ),
    },
    {
      title: "Props",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Used for passing data from parent to child components.
          </Typography>

          <Box mt={3} display="flex" flexDirection="column" gap={3}>
            <Profile name="Shahbaz" age={22} />

            <ButtonExample
              label="Click Me"
              onClick={() => alert("Clicked")}
            />

            <CardWrapper>
              <Typography>Children prop content</Typography>
            </CardWrapper>

            <PropDrilling />
          </Box>
        </>
      ),
    },
    {
      title: "useEffect",
      content: (
        <>
          <Typography variant="body2" color="text.secondary">
            Handles side effects like API calls, timers, and subscriptions.
          </Typography>

          <Box mt={3} display="flex" flexDirection="column" gap={3}>
            <Timer />
            <ApiFetch />
            <InfiniteLoop />
          </Box>
        </>
      ),
    },
  ];

  // 🔍 Filter topics
  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: (theme) => theme.palette.background.default,
        py: 6,
      }}
    >
      <Container maxWidth="md">
        
        {/* 🔥 Header */}
        <Box mb={5}>
          <Typography variant="h3" fontWeight="bold">
            React Learning
          </Typography>

          <Typography color="text.secondary" mt={1}>
            Structured notes, examples, and revision system
          </Typography>

          <Chip
            label="Core Concepts"
            sx={{ mt: 2 }}
          />
        </Box>

        {/* 🔍 Search */}
        <TextField
          fullWidth
          placeholder="Search topics..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 4 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* 📂 Accordions */}
        {filteredTopics.map((topic, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: 3,
              background: (theme) => theme.palette.background.paper,
              border: (theme) => `1px solid ${theme.palette.divider}`,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                px: 3,
                py: 1,
              }}
            >
              <Typography fontWeight="bold" variant="h6">
                {topic.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: (theme) =>
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.03)"
                      : "#f9fafb",
                }}
              >
                {topic.content}
              </Paper>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* ❌ No Result */}
        {filteredTopics.length === 0 && (
          <Typography textAlign="center" mt={4} color="text.secondary">
            No topics found...czxczxcxasdasdasdasd
          </Typography>dasdasdasdas
        )}
      </Container>
    </Box>
  );
};

export default Topic;