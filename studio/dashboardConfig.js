export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '600c3b51bc194eee29ad7dc3',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-r4cqa2q1',
                  apiId: 'b6bbd640-2f0e-41ba-8c1d-6c54c42d93db'
                },
                {
                  buildHookId: '600c3b515dcdeabe54954150',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-odcv9zsq',
                  apiId: '276cb00d-cb70-4382-80c3-18e6c976a3fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ObiWanMaxim/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-odcv9zsq.netlify.app', category: 'apps'}
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
