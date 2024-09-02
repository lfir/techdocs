import clsx from "clsx";
import React from "react";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Docs",
    path: require("../../static/img/undrawFiles1.png").default,
    description: <>Technical documentation.</>,
    dest: "/techdocs/docs/apache/",
  },
  {
    title: "Blog",
    path: require("../../static/img/undrawPosts1.png").default,
    description: <>Update history and more in depth guides.</>,
    dest: "/techdocs/blog/",
  },
];

function Feature({ path, title, description, dest }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={path} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={dest}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
