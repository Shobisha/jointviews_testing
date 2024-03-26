import Head from "next/head";
import LeftContact from "../../components/LeftContact";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import { BASEPATH } from "@/config";

export default function Marketpage({ marketsagent }) {
  console.log("marketsagent ", marketsagent);

  if (marketsagent.data.page !== null) {
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href={`https://wp.jointviews.com/wp-content/uploads/elementor/css/post-${Marketpage?.data?.page?.pageId}.css`}
            media="all"
          />
        </Head>

        <div className="market">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="inner-page">
                  {marketsagent?.data?.page?.content !== null && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${marketsagent?.data?.page?.content}`,
                      }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <LeftContact />
              </div>
            </div>
          </div>
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
    params: { marketslug: list.slug },
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
              page(id: "${params.marketslug}" ,idType: URI) {
                pageId
                slug
                title
                
                content
              }
            }
          `,
    }),
  });

  const marketsagent = await currentApi.json();

  return {
    props: {
      marketsagent,
    },
    revalidate: 10,
  };
}
