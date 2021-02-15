export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6029c2dbd15e456d185c4ead',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ywy24ikk',
                  apiId: 'e37b444f-6c7f-4039-b95b-f90cb619c2a7'
                },
                {
                  buildHookId: '6029c2db4c422e130bb7455c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1bk69hyq',
                  apiId: '384a8790-7113-4c57-a29d-dc732ae99551'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mamfi-0221/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1bk69hyq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
