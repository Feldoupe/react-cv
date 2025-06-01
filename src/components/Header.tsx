import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useScrollTrigger,
  Slide,
  Box,
  Link as MuiLink
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const HideOnScroll: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <HideOnScroll>
      <AppBar color="default" elevation={1} position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyResume
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
            {sections.map(({ id, label }) => (
              <MuiLink
                key={id}
                href={`#${id}`}
                underline="none"
                color="text.primary"
                sx={{ fontWeight: 500 }}
              >
                {label}
              </MuiLink>
            ))}
          </Box>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
