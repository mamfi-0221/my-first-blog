export default {
    name: "tasks",
    type: "document",
    fields: [
        {
            name: "taskName",
            type: "string"
        },
        {
           title: "Not Started",
           name: "Not_Started",
           type: "boolean",
        },
        {
           title: "In Progress",
           name: "In_Progress",
           type: "boolean",
        },
        {
           title: "For Review",
           name: "For_Review",
           type: "boolean",
        },
        {
           title: "Completed",
           name: "Completed",
           type: "boolean",
        }
    ],
}