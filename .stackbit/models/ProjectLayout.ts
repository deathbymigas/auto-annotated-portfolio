import { Model } from '@stackbit/types';
import { seoFields, seoFieldGroups } from './seo-fields';

export const ProjectLayoutModel: Model = {
    type: 'page',
    name: 'ProjectLayout',
    label: 'Project page',
    urlPath: '/projects/{slug}',
    filePath: 'content/pages/projects/{slug}.md',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    fieldGroups: [
        ...seoFieldGroups,
        {
            name: 'styles',
            label: 'Styles',
            icon: 'palette'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'title',
            label: 'Title',
            default: 'This is a project title',
            required: true
        },
        {
            type: 'string',
            name: 'date',
            label: 'Date',
            required: true
        },
        {
            type: 'string',
            name: 'client',
            label: 'Client',
            default: 'Awesome client'
        },
        {
            type: 'string',
            name: 'description',
            label: 'Description',
            default: 'Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer condimentum dignissim justo vel faucibus.'
        },
        {
            type: 'model',
            name: 'featuredImage',
            label: 'Featured image',
            models: ['ImageBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Project thumbnail image',
                caption: ''
            }
        },
        {
            type: 'model',
            name: 'media',
            label: 'Media',
            models: ['ImageBlock', 'VideoBlock'],
            default: {
                type: 'ImageBlock',
                url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg',
                altText: 'Project image'
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['SectionModels']
            }
        },
        ...seoFields,
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            description: 'The color theme of the page',
            group: 'styles',
            controlType: 'palette',
            options: [
                {
                    label: 'Colors A',
                    value: 'colors-a',
                    textColor: '$onDark',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors B',
                    value: 'colors-b',
                    textColor: '$onLight',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors C',
                    value: 'colors-c',
                    textColor: '$onPrimary',
                    backgroundColor: '$primary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors D',
                    value: 'colors-d',
                    textColor: '$onSecondary',
                    backgroundColor: '$secondary',
                    borderColor: '#ececec'
                },
                {
                    label: 'Colors E',
                    value: 'colors-e',
                    textColor: '$onComplementary',
                    backgroundColor: '$complementary',
                    borderColor: '#ececec'
                }
            ],
            default: 'colors-a'
        },
        {
            type: 'model',
            name: 'backgroundImage',
            group: 'styles',
            label: 'Project background image',
            models: ['BackgroundImage'],
            default: {
                type: 'BackgroundImage',
                url: '/images/bg2.jpg'
            }
        }
    ]
};
