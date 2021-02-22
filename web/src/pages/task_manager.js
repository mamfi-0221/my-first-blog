import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styles from '../components/blog-post-preview-list.module.css'
import Container from "../components/container";

export const query = graphql`
  {
    allSanityTasks {
      group(field: status) {
        edges {
          node {
            taskName
            status
          }
        }
      }
    }
  }
`

const taskMgrPage = ({ data }) =>(
  <Layout textWhite={false}>
    <Container>
    <div className={styles.root}>
    <h1 className={styles.headline}>Your Tasks</h1>
      <ul style={{display: 'flex', alignItems: 'space-between', flexDirection: 'row', width: '100%', padding: 0}}>
        {data.allSanityTasks.group.map(node => (
             <li style={{ flex: '1 45%', maxWidth: '45%'}}>
                <h2>{node.taskName}</h2>
            </li>
        ))}  
      </ul>
    </div>
    </Container>
  </Layout>
);

export default taskMgrPage
