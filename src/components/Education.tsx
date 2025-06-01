import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  school: string;
  dates: string;
  details: string[];
}

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => (
  <Box sx={{ py: 8 }} id="education">
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" gutterBottom>
          Formation
        </Typography>
        {education.map((edu, index) => (
          <Paper key={index} sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {edu.degree}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {edu.school} • {edu.dates}
            </Typography>
            {edu.details.length > 0 && (
              <List dense>
                {edu.details.map((d, i) => (
                  <ListItem key={i}>{d}</ListItem>
                ))}
              </List>
            )}
          </Paper>
        ))}
      </motion.div>
    </Container>
  </Box>
);
