import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import QPComponent from "../components/quiz-page";

export const query = graphql`
{
  allSanityQuiz {
    edges {
      node {
        slug {
          current
        }
        quizName
        items {
          question
          answer
        }
      }
    }
  }
}`


export default function QuizPageTemplate({ data }) {
  return (
    <Layout textWhite={false}>
      {data.allSanityQuiz.edges.map(({ node }) => (
        <div>{<QPComponent {...node} />}</div>
      ))}
    </Layout>
  );
}