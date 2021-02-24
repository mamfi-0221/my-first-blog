import React from 'react';
import Container from "../components/container";

function QuizPage (props) {
  const { items } = props

  const submitQuiz = (form) => {
    let processQuiz = form.answer.value;
    if(processQuiz == ""){
      return false;
    }
  };

  return(
    <Container>
      <div>
        <form name="thisQuiz" action="" method="get">
        <ol>
          {items.map(quiz => (
            <li key={quiz.id} style={{listStyle: 'decimal', marginBottom: '20px'}}>
                {quiz.question}
              <br /><input id="answer" name="answer" type="text" style={{border: '3px solid gray', width: '100px'}} required/>
            </li>
          ))}
        </ol>
        <input type="submit" value="Finish Quiz" onClick={submitQuiz}/>
        </form>
      </div>
    </Container>
  );
}
export default QuizPage