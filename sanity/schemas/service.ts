export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'object', fields: [
      { name: 'ar', title: 'Arabic', type: 'string' },
      { name: 'en', title: 'English', type: 'string' },
      { name: 'fr', title: 'French', type: 'string' }
    ]},
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en' } },
    { name: 'description', title: 'Description', type: 'object', fields: [
      { name: 'ar', title: 'Arabic', type: 'text' },
      { name: 'en', title: 'English', type: 'text' },
      { name: 'fr', title: 'French', type: 'text' }
    ]},
    { name: 'order', title: 'Order', type: 'number' }
  ]
};
