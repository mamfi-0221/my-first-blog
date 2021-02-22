import React from "react";
import { Link } from 'gatsby';
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styles from '../components/blog-post-preview-list.module.css'
import Container from "../components/container";
import { TopWave, BottomWave } from "../components/wave";
import { getQuizUrl } from "../lib/helpers";


export const query = graphql`
  {
    allSanityQuiz {
      edges {
        node {
          slug {
            current
          }
          quizName
        }
      }
    }
  }
`


const quizListPage = ({ data }) => (
    <Layout textWhite={false}>
    <TopWave />
      <Container>
      <div className={styles.root}>
      <h1 className={styles.headline}>Your Quizzes</h1>
        <ul className={styles.grid}>
          {data.allSanityQuiz.edges.map(({ node: project }) => (
          <li>
              <Link to={getQuizUrl(project.slug.current)}>
                  {project.quizName} 
              </Link>
          </li>
          ))}
        </ul>
      </div>
      </Container>
    <BottomWave />
  </Layout>
);
export default quizListPage