import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import QuizPage from "../components/quiz-page";
import { TopWave } from "../components/wave";

export const query = graphql`
query QuizPageTemplateQuery($id: String!) {
  quiz: sanityQuiz(id: { eq: $id }) {
    id
    quizName
    items {
      question
      answer
    }
    slug{
      current
    } 
  }
}`

const QuizPageTemplate = (props) => {
  const { data } = props;
  const quiz = data && data.quiz;

  return(
    <Layout textWhite={false}>
      <TopWave />
        {quiz && <QuizPage {...quiz}/>}
    </Layout>
  );
};

export default QuizPageTemplate;