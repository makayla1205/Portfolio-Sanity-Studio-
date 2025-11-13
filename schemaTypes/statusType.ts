import {defineField, defineType} from 'sanity'
export const statusType = defineType({
  name: 'Status',
  title: 'Status',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})