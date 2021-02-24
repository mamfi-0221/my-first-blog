import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Container from "../components/container";
import styles from '../components/blog-post-preview-list.module.css';
import { TopWave } from "../components/wave";

export const query = graphql`
query TaskManagerQuery {
  notStarted: allSanityTasks(filter: {Not_Started: {eq: true}}) {
    edges {
      node {
        taskName
      }
    }
  }
  
  inProgress: allSanityTasks(filter: {In_Progress: {eq: true}}){
		edges {
			node{
				taskName
      }
    }
  }
  
  forReview: allSanityTasks(filter: {For_Review: {eq: true}}){
		edges {
			node{
				taskName
      }
    }
  }
  
  completed: allSanityTasks(filter: {Completed: {eq: true}}){
		edges {
			node{
				taskName
      }
    }
  }
}`

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
                {data.notStarted.edges.map(({ node }) => (                
                <li> {node.taskName}
                  <select name="notStartedTasks" style={{width: '20px'}}>
                    <option></option>
                    <option id="opt2">In Progress</option>
                    <option id="opt3">For Review</option>
                    <option id="opt4">Completed</option>
                  </select>
                </li>
                ))} 
              </ul>    
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>In Progress</p>
              <ul>
                {data.inProgress.edges.map(({ node }) => (
                <li> {node.taskName}
                  <select name="inProgTasks" style={{width: '20px'}}>
                    <option></option>
                    <option>Not Started</option>
                    <option>For Review</option>
                    <option>Completed</option>
                  </select>
                </li>
                ))} 
              </ul> 
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>For Review</p>
              <ul>
                {data.forReview.edges.map(({ node }) => (
                <li> {node.taskName}
                  <select name="forReviewTasks" style={{width: '20px'}}>
                    <option></option>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </li>
                ))}
              </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-800 md:mb-6" style={{fontWeight: 'bold'}}>Completed</p>
              <ul>
                {data.completed.edges.map(({ node }) => (
                <li> {node.taskName}
                  <select name="completedTasks" style={{width: '20px'}}>
                    <option></option>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>For Review</option>
                  </select>
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