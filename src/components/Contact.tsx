import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

interface ContactProps {
  email: string;
  github: string;
}

export const Contact: React.FC<ContactProps> = ({ email, github }) => (
  <Box sx={{ py: 8 }} id="contact">
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" gutterBottom>
          Me contacter
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Email :</strong> <a href={`mailto:${email}`}>{email}</a>
        </Typography>
        <Typography sx={{ mb: 3 }}>
          <strong>GitHub :</strong> <a href={github}>{github}</a>
        </Typography>
        <Button variant="contained" size="large" href={`mailto:${email}`}>
          Envoyer un mail
        </Button>
      </motion.div>
    </Container>
  </Box>
);
