import type { Attribute, Schema } from '@strapi/strapi';

export interface ShareImg extends Schema.Component {
  collectionName: 'components_share_imgs';
  info: {
    displayName: 'Img';
  };
  attributes: {
    alt: Attribute.String;
    src: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ShareOptions extends Schema.Component {
  collectionName: 'components_share_options';
  info: {
    description: '';
    displayName: 'options';
  };
  attributes: {
    label: Attribute.Text;
    type: Attribute.Enumeration<
      ['none', 'I', 'E', 'S', 'N', 'T', 'F', 'J', 'P']
    >;
  };
}

export interface ShareOptions2 extends Schema.Component {
  collectionName: 'components_share_options_2s';
  info: {
    displayName: 'Options 2';
  };
  attributes: {
    label: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5video.CKEditor5Video',
        {
          preset: 'toolbarBaloon';
        }
      >;
    type: Attribute.Enumeration<
      ['none', 'I', 'E', 'S', 'N', 'T', 'F', 'J', 'P']
    >;
  };
}

export interface ShareQuestions extends Schema.Component {
  collectionName: 'components_share_questions';
  info: {
    description: '';
    displayName: 'questions';
    icon: 'alien';
  };
  attributes: {
    columns: Attribute.Integer;
    options: Attribute.Component<'share.options', true>;
    question: Attribute.Text;
  };
}

export interface ShareSeo extends Schema.Component {
  collectionName: 'components_share_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    keyword: Attribute.Text;
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'share.img': ShareImg;
      'share.options': ShareOptions;
      'share.options-2': ShareOptions2;
      'share.questions': ShareQuestions;
      'share.seo': ShareSeo;
    }
  }
}
