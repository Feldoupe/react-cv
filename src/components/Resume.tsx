import React from "react";
import {
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import { motion } from "framer-motion";
import { ResumeData } from "../types/resume";

export const Resume: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <Container maxWidth="md" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h3" fontWeight={600}>{data.name}</Typography>
        </Grid>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {data.title} | {data.contact.email} | {data.contact.github}
        </Typography>

        <Section title="About Me">
          <Typography>{data.about}</Typography>
        </Section>

        <Section title="Skills">
          {data.skills.map((skill, index) => (
            <Chip key={index} label={skill} style={{ margin: 4 }} />
          ))}
        </Section>

        <Section title="Experience">
          {data.experience.map((exp, index) => (
            <Paper key={index} style={{ padding: "1rem", marginBottom: "1rem" }}>
              <Typography variant="subtitle1"><strong>{exp.title}</strong> – {exp.company} ({exp.dates})</Typography>
              <List dense>
                {exp.details.map((detail, i) => (
                  <ListItem key={i} style={{ paddingLeft: 0 }}>{detail}</ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </Section>

        <Section title="Education">
          {data.education.map((edu, index) => (
            <Typography key={index}>
              <strong>{edu.degree}</strong> – {edu.school} ({edu.dates})
            </Typography>
          ))}
        </Section>
      </motion.div>
    </Container>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    style={{ marginBottom: "2rem" }}
  >
    <Typography variant="h6" gutterBottom>{title}</Typography>
    {children}
  </motion.div>
);
