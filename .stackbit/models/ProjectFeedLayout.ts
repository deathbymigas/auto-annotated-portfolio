import { Model } from '@stackbit/types';
import { seoFields, seoFieldGroups } from './seo-fields';

export const ProjectFeedLayoutModel: Model = {
    type: 'page',
    name: 'ProjectFeedLayout',
    label: 'Projects',
    hideContent: true,
    singleInstance: true,
    urlPath: '/projects',
    file: 'content/pages/projects/index.md',
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
            default: 'This is a page title'
        },
        {
            type: 'model',
            name: 'projectFeed',
            readOnly: true,
            label: 'Project feed',
            models: ['ProjectFeedSection'],
            default: {
                title: null,
                subtitle: null,
                showDescription: true,
                variant: 'variant-a'
            }
        },
        {
            type: 'list',
            name: 'topSections',
            label: 'Top Sections',
            items: {
                type: 'model',
                models: [],
                groups: ['SectionModels']
            }
        },
        {
            type: 'list',
            name: 'bottomSections',
            label: 'Bottom Sections',
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
            label: 'Page background image',
            models: ['BackgroundImage']
        },
        {
            type: 'style',
            name: 'styles',
            styles: {
                title: {
                    fontWeight: ['400', '500'],
                    fontStyle: ['italic'],
                    textAlign: ['left', 'center', 'right'],
                    textDecoration: ['underline']
                }
            },
            default: {
                title: {
                    textAlign: 'center'
                }
            }
        }
    ]
};
