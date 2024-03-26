import Head from "next/head";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { BASEPATH } from "@/config";

export default function Blogpage({ blogpages }) {
  console.log("blogpages ", blogpages);

  if (blogpages.data.page !== null) {
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href={`https://wp.jointviews.com/wp-content/uploads/elementor/css/post-${Blogpage?.data?.page?.pageId}.css`}
            media="all"
          />

          <link
            rel="stylesheet"
            id="elementor-icons-css"
            href="https://wp.jointviews.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.29.0"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-common-css"
            href="https://wp.jointviews.com/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.20.1"
            media="all"
          />
          <link
            rel="stylesheet"
            id="e-theme-ui-light-css"
            href="https://wp.jointviews.com/wp-content/plugins/elementor/assets/css/theme-light.min.css?ver=3.20.1"
            media="all"
          />
          <link
            rel="stylesheet"
            id="dashicons-css"
            href="https://wp.jointviews.com/wp-includes/css/dashicons.min.css?ver=6.4.3"
            media="all"
          />
          <link
            rel="stylesheet"
            id="admin-bar-css"
            href="https://wp.jointviews.com/wp-includes/css/admin-bar.min.css?ver=6.4.3"
            media="all"
          />

          <link
            rel="stylesheet"
            id="wifiattendance-style-css"
            href="https://wp.jointviews.com/wp-content/themes/wifiattendance/style.css?ver=1.0.0"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-frontend-css"
            href="https://wp.jointviews.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.20.1"
            media="all"
          />
          <link
            rel="stylesheet"
            id="swiper-css"
            href="https://wp.jointviews.com/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=8.4.5"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-post-8-css"
            href="https://wp.jointviews.com/wp-content/uploads/elementor/css/post-8.css?ver=1710916301"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-global-css"
            href="https://wp.jointviews.com/wp-content/uploads/elementor/css/global.css?ver=1710916302"
            media="all"
          />
          <link
            rel="stylesheet"
            id="elementor-post-3570-css"
            href="https://wp.jointviews.com/wp-content/uploads/elementor/css/post-3570.css?ver=1711432882"
            media="all"
          />
          <link
            rel="stylesheet"
            id="google-fonts-1-css"
            href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.4.3"
            media="all"
          />
        </Head>
        <div className="inner-page">
          {blogpages?.data?.page?.content !== null && (
            <div
              dangerouslySetInnerHTML={{
                __html: `${blogpages?.data?.page?.content}`,
              }}
            ></div>
          )}
        </div>
      </>
    );
  }
}

export async function getStaticPaths() {
  const resourceAPI = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages {
          nodes {
           
            slug
            
            
          }
        }
      }
             `,
    }),
  });
  const resourceAPIList = await resourceAPI.json();
  const paths = resourceAPIList.data.pages.nodes.map((list) => ({
    params: { blogpages: list.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const currentApi = await fetch(`${BASEPATH}graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
          query NewQuery {
              page(id: "${params.blogpages}" ,idType: URI) {
                pageId
                slug
                title
                
                content
              }
            }
          `,
    }),
  });

  const blogpages = await currentApi.json();

  return {
    props: {
      blogpages,
    },
    revalidate: 10,
  };
}
