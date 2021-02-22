import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "../components/container";
import styles from '../components/blog-post-preview-list.module.css'


export const query = graphql`
  {
    allSanityTasks {
      edges {
        node {
          Not_Started
          In_Progress
          For_Review
          Completed
          taskName
        }
      }
    }
  }
`

export default function taskMgrPage({ data }){
  return(
    <Layout>
      <Container>
      <div className={styles.root}>
        <h1 className={styles.headline} style={{textAlign: 'center'}}>Your Tasks</h1>
        <table style={{width: '100%'}}>
          <thead style={{backgroundColor: '#cce'}}>
            <tr>
              <th>Not Started</th>
              <th>In Progress</th>
              <th>For Review</th>
              <th>Completed</th>
            </tr>
          </thead>
          {data.allSanityTasks.edges.map(({ node }) => (
          <tbody>
              <tr style={{textAlign: 'center'}}>
                <td>{node.Not_Started && node.taskName}</td>
                <td>{node.In_Progress && node.taskName}</td>
                <td>{node.For_Review && node.taskName}</td>
                <td>{node.Completed && node.taskName}</td>
              </tr>
          </tbody>
          ))}
        </table>
      </div>
      </Container>
    </Layout>
  );
}


