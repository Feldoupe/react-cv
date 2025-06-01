import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

interface AboutProps {
  text: string;
}

export const About: React.FC<AboutProps> = ({ text }) => (
  <Box sx={{ py: 8 }} id="about">
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom>
          À propos de moi
        </Typography>
        <Typography>{text}</Typography>
      </motion.div>
    </Container>
  </Box>
);
