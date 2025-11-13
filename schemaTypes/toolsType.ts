import {defineField, defineType} from 'sanity'
export const toolsType = defineType({
  name: 'Tools',
  title: 'Tools',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})