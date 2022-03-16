export default {
  title: 'Service',
  name: 'service',
  type: 'document',
  groups: [
    { name: 'summary', title: 'Landing Page Summary' },
    { name: 'details', title: 'Full Page' }
  ],
  fields: [
    { 
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Google Fonts Icon',
      description: 'Icon selector from https://fonts.google.com/icons?selected=Material+Icons',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      description: 'Visual description of the service',
      type: 'image',
      group: 'summary'
    },
    {
      name: 'description',
      title: 'Description',
      description: 'A short description of the service',
      type: 'blockContent',
      group: 'summary'
    },
  ]
}