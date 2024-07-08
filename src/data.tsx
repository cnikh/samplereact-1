export interface SubRecordType {
  code: string;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  subRecordTypes: SubRecordType[];
}

export interface FunctionWithCategories {
  id: number;
  name: string;
  code: string;
  categories: Category[];
}

const functionsWithCategories: FunctionWithCategories[] = [
  {
    id: 1,
    name: 'Bequests, gifts and donations',
    code: 'Z1',
    categories: [
      {
        id: 1,
        name: 'Strategic documentation and management of bequests, gifts and donations to Council',
        subRecordTypes: [
          { code: 'Z1.1.1', name: 'Strategic records' },
          {
            code: 'Z1.1.2',
            name: 'Summary records of bequests, gifts and donations',
          },
        ],
      },
      {
        id: 2,
        name: 'Routine administration of bequests, gifts and donations to Council',
        subRecordTypes: [
          { code: 'Z1.2.1', name: 'Routine financial administration records' },
          { code: 'Z1.2.2', name: 'Non-financial administration records' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'CCOs, Trusts and commercial enterprises',
    code: 'Z2',
    categories: [
      {
        id: 3,
        name: 'Establishment/disestablishment',
        subRecordTypes: [
          { code: 'Z2.1.1', name: 'Establishment' },
          { code: 'Z2.1.2', name: 'Disestablishment/ sale' },
          { code: 'Z2.1.3', name: 'Membership and remuneration' },
        ],
      },
      {
        id: 4,
        name: 'Governance and accountability',
        subRecordTypes: [
          { code: 'Z2.2.1', name: 'Accountability final documents' },
          { code: 'Z2.2.2', name: 'Accountability working documents' },
          { code: 'Z2.2.3', name: 'Meetings records - final' },
          { code: 'Z2.2.4', name: 'Meetings records - drafts and duplicates' },
          { code: 'Z2.2.5', name: 'Reviews' },
        ],
      },
      {
        id: 5,
        name: 'Reporting to council',
        subRecordTypes: [
          { code: 'Z2.3.1', name: 'Reporting to council officers' },
          { code: 'Z2.3.2', name: 'Reporting to council committees' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Cemetery and crematoria management',
    code: 'Z3',
    categories: [
      {
        id: 6,
        name: 'Cemetery and crematoria management',
        subRecordTypes: [
          {
            code: 'Z3.1.1',
            name: 'Burial and cremation administration records',
          },
          { code: 'Z3.1.2', name: 'Burial and cremation information requests' },
          { code: 'Z3.1.3', name: 'Historic cemetery management' },
        ],
      },
      {
        id: 7,
        name: 'Cemetery, burial and cremation records',
        subRecordTypes: [
          { code: 'Z3.2.1', name: 'Burial records' },
          { code: 'Z3.2.2', name: 'War graves' },
          { code: 'Z3.2.3', name: 'Cremation Records including applications' },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Communications management',
    code: 'Z4',
    categories: [
      {
        id: 8,
        name: 'Branding, brand management and corporate identity',
        subRecordTypes: [
          { code: 'Z4.1.1', name: 'Branding advice' },
          { code: 'Z4.1.2', name: 'Approved corporate identity/brand' },
          {
            code: 'Z4.1.3',
            name: 'Corporate identity/brand working and support papers',
          },
          { code: 'Z4.1.4', name: 'Exterior signage' },
        ],
      },
      {
        id: 9,
        name: 'Communications projects',
        subRecordTypes: [
          {
            code: 'Z4.2.1',
            name: 'Significant/major communications projects strategic documents',
          },
          { code: 'Z4.2.2', name: 'Routine communications projects' },
        ],
      },
      {
        id: 10,
        name: 'Council gifts',
        subRecordTypes: [
          {
            code: 'Z4.3.1',
            name: 'Valuable and/or significant gifts presented by council',
          },
          {
            code: 'Z4.3.2',
            name: 'Low value and insignificant gifts presented by council',
          },
        ],
      },
      {
        id: 11,
        name: 'Media analysis and newspaper clippings',
        subRecordTypes: [
          { code: 'Z4.4.1', name: 'Media analysis' },
          { code: 'Z4.4.2', name: 'Newspaper clippings' },
        ],
      },
      {
        id: 12,
        name: 'Media releases, enquiries and responses',
        subRecordTypes: [
          { code: 'Z4.5.1', name: 'Media enquiries and responses' },
          { code: 'Z4.5.2', name: 'Media releases' },
        ],
      },
      {
        id: 13,
        name: 'Publications for external use',
        subRecordTypes: [
          { code: 'Z4.6.1', name: 'Council hardcopy publications - finals' },
          { code: 'Z4.6.2', name: 'Council digital publications - finals' },
        ],
      },
      {
        id: 14,
        name: 'Publications for internal use',
        subRecordTypes: [
          { code: 'Z4.7.1', name: 'Council hardcopy publications - finals' },
          { code: 'Z4.7.2', name: 'Council digital publications - finals' },
        ],
      },
      {
        id: 15,
        name: 'Publications development and management',
        subRecordTypes: [
          {
            code: 'Z4.8.1',
            name: 'Council publications development, production and supply',
          },
        ],
      },
      {
        id: 16,
        name: 'Routine communications administration',
        subRecordTypes: [
          {
            code: 'Z4.9.1',
            name: 'Routine communications administration records',
          },
          { code: 'Z4.9.2', name: 'Advertising' },
        ],
      },
      {
        id: 17,
        name: 'Sponsorship',
        subRecordTypes: [
          { code: 'Z4.10.1', name: 'Sponsorship  - minor relationships' },
          { code: 'Z4.10.2', name: 'Sponsorship - major and ongoing' },
          { code: 'Z4.10.3', name: 'Sponsorship - planning' },
        ],
      },
      {
        id: 18,
        name: 'Visitor centre operations',
        subRecordTypes: [
          { code: 'Z4.11.1', name: 'Visitor centre operations' },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Community support and housing',
    code: 'Z5',
    categories: [
      {
        id: 19,
        name: 'Community support services',
        subRecordTypes: [
          {
            code: 'Z5.1.1',
            name: 'Community support and coordination projects and initiatives strategic records',
          },
          {
            code: 'Z5.1.2',
            name: 'Community support and coordination projects and initiatives routine records',
          },
          { code: 'Z5.1.3', name: 'Community programmes administration' },
          {
            code: 'Z5.1.4',
            name: 'Community programmes planning and development',
          },
          { code: 'Z5.1.5', name: 'Community group liaison and contacts' },
        ],
      },
      {
        id: 20,
        name: 'Provision of council housing',
        subRecordTypes: [
          { code: 'Z5.2.1', name: 'Housing lending' },
          { code: 'Z5.2.2', name: 'Housing application process' },
          { code: 'Z5.2.3', name: 'Rent reviews' },
          { code: 'Z5.2.4', name: 'Tenants correspondence' },
          {
            code: 'Z5.2.5',
            name: 'Disputes, prosecution and litigation - significant',
          },
          {
            code: 'Z5.2.6',
            name: 'Disputes, prosecution and litigation - routine',
          },
        ],
      },
    ],
  },
];

export default functionsWithCategories;
