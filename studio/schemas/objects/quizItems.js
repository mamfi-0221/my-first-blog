export default 
{
    title: 'Quiz Items',
    name: 'quizItems',
    type: 'object',
    fields: [
    {
        title: 'Question',
        description: 'Add quiz item',
        name: 'question',
        type: 'string'
    },
    {
        title: 'Answer',
        description: 'Add the correct answer for this item',
        name: 'answer',
        type: 'string'
    }],
    preview: {
        select: {
            title: 'question',
            ans: 'answer'
        },
        prepare ({title, ans}){
            let subtitle = 'not set'
            if(title){
                subtitle = `${ans}`
            }
            return{
                title,
                subtitle
            }
        }
    }
}


