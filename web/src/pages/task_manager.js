import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "../components/container";
import styles from '../components/blog-post-preview-list.module.css';
import { TopWave, BottomWave } from "../components/wave";

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
    <Layout textWhite={false}> 
     <TopWave />
      <Container>
      <h1 className={styles.headline} style={{textAlign: 'center'}}>Your Tasks</h1>
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6" style={{textAlign: 'center', fontFamily: 'Trebuchet MS'}}>
          <div className="flex-1">
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>Not Started</p>
            <ul>
              {data.allSanityTasks.edges.map(({ node }) => (
              <li>
                {node.Not_Started && node.taskName}
              </li>
              ))}
            </ul>
          </div>
          <div className="flex-1" >
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>In Progress</p>
            <ul>
              {data.allSanityTasks.edges.map(({ node }) => (
              <li>
                {node.In_Progress && node.taskName}
              </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>For Review</p>
            <ul>
              {data.allSanityTasks.edges.map(({ node }) => (
              <li>
                {node.For_Review && node.taskName}
              </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>Completed</p>
            <ul>
              {data.allSanityTasks.edges.map(({ node }) => (
              <li>
                {node.Completed && node.taskName}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </Container>
    </Layout>
  );
}

