export default {
    name: 'quiz',
    type: 'document',
    fields: [
    {
        name: 'quizName',
        type: 'string'
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Some frontends will require a slug to be set to be able to show the post',
        options: {
          source: 'quizName',
          maxLength: 96
        }
    },
    {
        type: 'array',
        name: 'items',
        of: [{ type: 'quizItems' }]
    }
  ],
  preview: {
    select: {
        title: 'quizName',
        slug: 'slug'
    },
    prepare ({title = 'No quiz name', slug = {}}){
        const path = `/quiz/${slug.current}`
        return{
            title
        }
    }
}
}

