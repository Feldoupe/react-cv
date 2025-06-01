import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title }) => (
  <Box
    id="hero"
    sx={{
      position: "relative",
      overflow: "hidden",
      py: 12,
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      background: "radial-gradient(circle at top left, #0070f3 20%, transparent 60%)"
    }}
  >
    <svg style={{ position: "absolute", top: 0, left: 0, opacity: 0.08 }} width="100%" height="100%">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 H0 V40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Hi, I'm {name}.
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }} href="#contact">
          Me contacter
        </Button>
      </motion.div>
    </Container>
  </Box>
);
