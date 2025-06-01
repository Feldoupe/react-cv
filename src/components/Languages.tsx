import React from "react";
import { Box, Typography, Container, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import TranslateIcon from "@mui/icons-material/Translate";

interface LanguagesProps {
  languages: string[];
}

export const Languages: React.FC<LanguagesProps> = ({ languages }) => (
  <Box sx={{ py: 8 }} id="languages">
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" gutterBottom>
          Langues
        </Typography>
        <Stack spacing={2}>
          {languages.map((lang, i) => (
            <Paper
              key={i}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                backgroundColor: "background.paper",
              }}
            >
              <TranslateIcon color="primary" />
              <Typography>{lang}</Typography>
            </Paper>
          ))}
        </Stack>
      </motion.div>
    </Container>
  </Box>
);
