import { Collection } from 'src/app/models/Collection/Collection';

export const collectionsExample: Collection[] = [
  {
    id: '1',
    name: 'פלואו',
    description:
      'תיאור הכשירותתיאור הכשירותתיאור הכשירותתיאור הכשירותתיאור הכשירות',
    resources: [
      {
        id: 'lala1',
        title: 'שיעור ראשון בפלואו',
        description: 'תיאור השיעוררר',
        grade:87
      },
      {
        id: 'lala2',
        title: 'היכרות עם הקנבס',
        description: 'תיאור השיעוררר',
        grade:12
      },
      {
        id: 'lala3',
        title: 'חיפוש מארזים',
        description: 'תיאור השיעוררר',
        grade: 38
      },
    ],
  },
  {
    id: '2',
    name: 'אטלס',
    description:
      'תיאור המארז של אטלס חפירות ללא עצירה',
    resources: [
      {
        id: 'lala1',
        title: 'שיעור ראשון בפלואו',
        description: 'תיאור השיעוררר',
        grade:93
      },
      {
        id: 'lala2',
        title: 'היכרות עם הקנבס',
        description: 'תיאור השיעוררר',
        grade:56
      },
      {
        id: 'lala3',
        title: 'חיפוש מארזים',
        description: 'תיאור השיעוררר',
        grade:77
      },
    ],
  },
];
