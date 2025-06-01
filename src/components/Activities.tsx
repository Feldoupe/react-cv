import React from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import { motion } from "framer-motion";

interface ActivitiesProps {
  activities: string[];
}

export const Activities: React.FC<ActivitiesProps> = ({ activities }) => (
  <Box sx={{ py: 8 }} id="activities">
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom>
          Activités
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
          {activities.map((activity, i) => (
            <Chip key={i} label={activity} />
          ))}
        </Box>
      </motion.div>
    </Container>
  </Box>
);
