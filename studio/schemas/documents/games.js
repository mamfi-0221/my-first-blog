export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ],
  
  fields: [
    {
      type: 'string',
      name: 'question'
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'addQstn' }]
    }
  ]
  
}
