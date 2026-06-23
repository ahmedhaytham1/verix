export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'object', fields: [
      { name: 'ar', title: 'Arabic', type: 'string' },
      { name: 'en', title: 'English', type: 'string' },
      { name: 'fr', title: 'French', type: 'string' }
    ]},
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en' } },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['hotels', 'mixed', 'residential', 'commercial', 'infrastructure', 'fuel'] } },
    { name: 'description', title: 'Description', type: 'object', fields: [
      { name: 'ar', title: 'Arabic', type: 'text' },
      { name: 'en', title: 'English', type: 'text' },
      { name: 'fr', title: 'French', type: 'text' }
    ]},
    { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Project Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'order', title: 'Order', type: 'number' }
  ]
};
