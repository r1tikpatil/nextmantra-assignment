import type { Schema, Struct } from '@strapi/strapi';

export interface BlogContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_text_blocks';
  info: {
    displayName: 'text-block';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-content.text-block': BlogContentTextBlock;
    }
  }
}
