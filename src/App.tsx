import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { Resume } from "./components/Resume";
import { ResumeData } from "./types/resume";
import resumeTemplate from "./assets/resume.template.json";

const App: React.FC = () => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDark);
  const [resume, setResume] = useState<ResumeData | null>(null);

  // Try loading the private version; fall back to template
  useEffect(() => {
    import("./assets/resume.private.json")
      .then((mod) => setResume(mod.default as ResumeData))
      .catch(() => setResume(resumeTemplate as ResumeData));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#007fff",
          },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: "'Inter', 'Roboto', sans-serif",
        },
      }),
    [darkMode]
  );

  if (!resume) return <p>Loading resume...</p>;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Resume data={resume} />
    </ThemeProvider>
  );
};

export default App;
