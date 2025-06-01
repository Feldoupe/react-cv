import React from "react";
import { Container, Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";

interface SkillsProps {
  skills: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <Box sx={{ py: 8 }} id="skills">
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom>
          Compétences
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {skills.map((skill, i) => (
            <Chip key={i} label={skill} variant="outlined" />
          ))}
        </Box>
      </motion.div>
    </Container>
  </Box>
);
