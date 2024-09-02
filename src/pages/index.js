import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageWelcome from "../components/HomepageWelcome";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <img
          width="100"
          src={"/" + siteConfig.projectName + "/img/shelf1.png"}
          alt="Bookshelf"
        />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageWelcome />
      </main>
    </Layout>
  );
}
