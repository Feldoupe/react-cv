import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer: React.FC = () => (
  <Box sx={{ py: 4, textAlign: "center" }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Gabriel Paiva A. Fernandes. Tous droits réservés.
    </Typography>
  </Box>
);
