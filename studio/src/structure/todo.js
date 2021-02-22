import S from '@sanity/desk-tool/structure-builder'

import { GoChecklist } from "react-icons/go"

export default S.listItem()
  .title('To Do')
  .schemaType('tasks')
  .icon(GoChecklist)
  .child(
    S.documentList('tasks')
    .title('Your Tasks')
    .menuItems(S.documentTypeList('tasks').getMenuItems())
    .filter('_type == "tasks"')
  )