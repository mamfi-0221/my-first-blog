import S from '@sanity/desk-tool/structure-builder'

import { GoBell } from "react-icons/go"

export default S.listItem()
  .title('Quizzer')
  .schemaType('quiz')
  .icon(GoBell)
  .child(
    S.documentList('quiz')
    .title('Your Quizzes')
    .menuItems(S.documentTypeList('quiz').getMenuItems())
    .filter('_type == "quiz" && _id != "frontpage"')
  )