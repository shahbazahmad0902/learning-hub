import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          <Typography>• Manages state</Typography>
          <Typography>• Async updates</Typography>

          <Box mt={2}>
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
          <Typography>• Parent → Child data</Typography>
          <Typography>• Immutable</Typography>

          <Box mt={2}>
            <Profile name="Shahbaz" age={22} />
            <ButtonExample
              label="Click"
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
          <Typography>• Side effects</Typography>
          <Typography>• Dependency array</Typography>

          <Box mt={2}>
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
    <Box sx={{ minHeight: "100vh", background: "#f8fafc", py: 6 }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" mb={4}>
          React Learning
        </Typography>

        {/* 🔍 Search */}
        <TextField
          fullWidth
          label="Search topic..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 4 }}
        />

        {/* 📂 Accordions */}
        {filteredTopics.map((topic, index) => (
          <Accordion key={index} sx={{ mb: 2, borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="bold">
                {topic.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              {topic.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default Topic;