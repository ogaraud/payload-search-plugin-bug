import type { CollectionConfig } from 'payload'

export const contactsSlug = 'contacts'

export const ContactsCollection: CollectionConfig = {
  slug: contactsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
