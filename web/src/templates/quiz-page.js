import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Container from '../components/container'

// export const query = graphql`
//   {
//     sanityQuiz(id: {eq: "$id"}) {
//       id
//       quizName
//       items {
//         question
//         answer
//       }
//       slug {
//         current
//       }
//     }
//   }
// `

// const QuizPageTemplate = (props) => {
//     const { data, errors } = props;
//     const post = data && data.sanityQuiz;

//     return(
//         <Layout textWhite={false}>
//             {errors && <SEO title="GraphQL Error"/>}

//             {errors && (
//                 <Container>
//                 <GraphQLErrorList errors={errors} />
//                 </Container>
//             )}

//             {post && <QuizPage {...post} />}
//         </Layout>
//     );
// };

export default function QuizPageTemplate() {
  return (
    <Layout>
      <div>Hello Quiz Page!</div>
    </Layout>
  )
}