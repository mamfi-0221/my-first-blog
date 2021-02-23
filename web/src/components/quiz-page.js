import React from 'react';
import Container from "../components/container";
import styles from './blog-post.module.css'


function QuizPage (props) {
  const { items } = props

  return(
    <Container>
      <div>
        <ol>
          {items.map(quiz => (
            <li key={quiz.id} style={{listStyle: 'decimal', marginBottom: '20px'}}>
                {quiz.question}
              <br /><input id="userAnswer" type="text" style={{border: '3px solid gray', width: '100px'}} />
            </li>
          ))}
        </ol>
      </div>
      <input type="button" id="userAnswer" value="Finish Quiz"/>
    </Container>
  );
}
export default QuizPage