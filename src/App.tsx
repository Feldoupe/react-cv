import React, { useEffect, useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery
} from "@mui/material";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeData } from "./types/resume";
import resumeTemplate from "./assets/resume.template.json";
import { Languages } from "./components/Languages";
import { Activities } from "./components/Activities";


const App: React.FC = () => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(prefersDark);
  const [resume, setResume] = useState<ResumeData | null>(null);

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
          primary: { main: "#0070f3" },
          background: {
            default: darkMode ? "#0a192f" : "#f7f9fc"
          }
        },
        typography: {
          fontFamily: "'Inter', sans-serif"
        },
        shape: {
          borderRadius: 12
        }
      }),
    [darkMode]
  );

  if (!resume) return null;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero name={resume.name} title={resume.title} />
        <About text={resume.about} />
        <Skills skills={resume.skills} />
        <Languages languages={resume.languages} />
        <Activities activities={resume.activities} />

        <Experience experience={resume.experience} />
        <Education education={resume.education} />
        <Contact email={resume.contact.email} github={resume.contact.github} />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
