import React from 'react'
import PortableText from './portableText'
import Container from './container'

import styles from './blog-post.module.css'

function QuizPage (props) {
  const {_rawBody, quizName, items, question, answer} = props
  return (
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{quizName}</h1>
          </div>
          <aside className={styles.metaContent}>
            {items && (
              <div className={styles.items}>
                <ul>
                  {items.map(quizItem => (
                    <li key={quizItem._id}>{quizItem.items.question}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
  )
}

export default QuizPage
