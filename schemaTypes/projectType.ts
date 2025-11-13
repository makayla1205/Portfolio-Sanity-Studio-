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
      name: 'linkGithub',
      type: 'url',
    }),
    defineField({
      name: 'linkDemo',
      type: 'url',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'tools',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})