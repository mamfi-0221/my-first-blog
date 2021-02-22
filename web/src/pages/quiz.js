import React from "react";
import { Link } from 'gatsby';
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styles from '../components/blog-post-preview-list.module.css'
import Container from "../components/container";
import QuizPage from "../components/quiz-page";

export const query = graphql`
  {
    allSanityQuiz {
      edges {
        node {
          slug {
            _key
            _type
            current
          }
          id
          quizName
          items {
            question
            answer
          }
        }
      }
    }
  }
`

const quizListPage = ({ data }) => (
    <Layout textWhite={false}>
        <Container>
        <div className={styles.root}>
        <h1 className={styles.headline}>Your Quizzes</h1>
          <ul className={styles.grid}>
            {data.allSanityQuiz.edges.map(({ node: project }) => (
            <li key={project.slug.current}>
                <Link to={`/quiz/${project.slug.current || project.slug}/`}>
                    {project.quizName} 
                </Link>
            </li>
            ))}
          </ul>
        </div>
        </Container>
    </Layout>
);
export default quizListPage