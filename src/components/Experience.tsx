import React from "react";
import { Container, Typography, Box, Paper, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  dates: string;
  details: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => (
  <Box sx={{ py: 8 }} id="experience">
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom>
          Expérience
        </Typography>
        {experience.map((job, index) => (
          <Paper key={index} sx={{ p: 3, mt: 2 }}>
            <Typography variant="h6">{job.title} – {job.company}</Typography>
            <Typography variant="body2" color="text.secondary">{job.dates}</Typography>
            <List dense>
              {job.details.map((detail, i) => (
                <ListItem key={i}>{detail}</ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </motion.div>
    </Container>
  </Box>
);
