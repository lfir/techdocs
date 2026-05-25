import React from "react";
import BlogPostPaginator from "@theme-original/BlogPostPaginator";
import { DiscussionEmbed } from "disqus-react";
import BrowserOnly from "@docusaurus/BrowserOnly";

// window and document are not available during the static site generation process.
// Docusaurus provides a <BrowserOnly> component to ensure that certain code only runs in
// a client-side / browser environment.
export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
      <BrowserOnly>
        {() => {
          const currPath = window.location.pathname;
          const disqusConfig = {
            shortname: "maybelambda", // Replace with your Disqus shortname
            config: {
              // With hardcoded baseUrl getting localhost when running locally is avoided.
              // Otherwise threads with wrong links might be created on Disqus.
              url: "https://leasys.baselinux.net" + currPath,
              identifier: currPath.substring(currPath.lastIndexOf("/") + 1),
            },
          };

          return (
            <div style={{ marginTop: "2rem" }}>
              <DiscussionEmbed {...disqusConfig} />
            </div>
          );
        }}
      </BrowserOnly>
    </>
  );
}
