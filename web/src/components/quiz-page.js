import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";
import Container from "../components/container";
import { TopWave, BottomWave } from "../components/wave"
import styles from './blog-post.module.css'


export default function QuizPage(props) {
  const {slug, quizName, items} = props
  return (
    <Container>
      <div className={styles.categories}>
        <ul key={slug.current}>
            {quizName && items.question}
        </ul>
      </div>
    </Container>
  )
}