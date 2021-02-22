export default {
    name: "tasks",
    type: "document",
    fields: [
        {
            name: "taskName",
            type: "string"
        },
        {
            title: "Status",
            name: "status",
            type: "string",
            validation: Rule => Rule.required(),
            options: {
                layout: 'radio',
                list: ['Not Started', 'In Progress', 'For Review', 'Completed']
            }      
        }],
}