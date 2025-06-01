import React from "react";
import {
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  List,
  ListItem,
  Box
} from "@mui/material";
import { motion } from "framer-motion";
import { ResumeData } from "../types/resume";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    style={{ marginBottom: "2rem" }}
  >
    <Typography variant="h5" gutterBottom>{title}</Typography>
    {children}
  </motion.div>
);

export const Resume: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <Container maxWidth="md" sx={{ pt: 6, pb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h3" fontWeight={600}>{data.name}</Typography>
        </Grid>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {data.title} • {data.contact.location} • {data.contact.email}
        </Typography>

        <Section title="À propos de moi">
          <Typography>{data.about}</Typography>
        </Section>

        <Section title="Compétences">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {data.skills.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" />
            ))}
          </Box>
        </Section>

        <Section title="Expérience">
          {data.experience.map((exp, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle1">
                <strong>{exp.title}</strong> – {exp.company} ({exp.dates})
              </Typography>
              <List dense>
                {exp.details.map((detail, i) => (
                  <ListItem key={i}>{detail}</ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Section>

        <Section title="Formation">
          {data.education.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">
                <strong>{edu.degree}</strong> – {edu.school} ({edu.dates})
              </Typography>
              {edu.details.length > 0 && (
                <List dense>
                  {edu.details.map((d, i) => (
                    <ListItem key={i}>{d}</ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </Section>

        <Section title="Langues">
          <List dense>
            {data.languages.map((lang, index) => (
              <ListItem key={index}>{lang}</ListItem>
            ))}
          </List>
        </Section>

        <Section title="Activités personnelles">
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {data.activities.map((activity, index) => (
              <Chip key={index} label={activity} />
            ))}
          </Box>
        </Section>
      </motion.div>
    </Container>
  );
};
