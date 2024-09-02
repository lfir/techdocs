import React from "react";
import styles from "./HomepageWelcome.module.css";

const Welcome = () => (
  <div id={styles.welcomerow}>
    <div className="col">
      <h1>Welcome to Sci & Tech docs!</h1>
      <p>
        <img
          className={styles.rightimg}
          src={require("../../static/img/tux-books.png").default}
        />
        This site contains excerpts from useful technical documentation I found
        online or wrote myself,
        <br />
        and uses syntax highlighting and cross document search to deliver a more
        efficient experience.
        <br />
        It can also be used offline by{" "}
        <a href="/techdocs/blog/2022/03/20/docusaurusv2-migration-complete">
          installing
        </a>{" "}
        the <b>PWA</b> (Progressive web app) from the website.
        <br />
        Found an <b>error</b> or a <b>better way</b> to achieve something?
        <br />
        Pull requests can be sent through the <b>Edit</b> button at the end of
        each document.
      </p>
    </div>
  </div>
);

export default function HomepageWelcome() {
  return (
    <section>
      <div className="container">
        <Welcome />
      </div>
    </section>
  );
}
