import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'Project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'GithubLink',
      type: 'url',
    }),
    defineField({
      name: 'DemoLink',
      type: 'url',
    }),
    defineField({
      name: 'CoverImage',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tools',
      title: 'Tools & Technologies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'Tools'}]
        }
      ]
    }),
    defineField({
      name: 'status',
      type: 'reference',
      to: [{type: 'Status'}],
    }),
  ],
})