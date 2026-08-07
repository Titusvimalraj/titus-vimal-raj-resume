import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Leadership } from "../components/Leadership";
import { Contact } from "../components/Contact";
import { resume } from "../data/resume";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Leadership />
    <Contact />
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>{resume.name} | {resume.headline}</title>
    <meta name="description" content={resume.summary} />
    <meta name="theme-color" content="#0b1220" />
    <meta property="og:title" content={`${resume.name} | Lead Full Stack & AI Solutions Architect`} />
    <meta property="og:description" content={resume.tagline} />
    <meta property="og:type" content="website" />
  </>
);
