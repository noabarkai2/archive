import { FeedPriority } from 'src/app/models/Enums/FeedPriority';
import { Gender } from 'src/app/models/Enums/Gender';
import { SubscriptionStatus } from 'src/app/models/Enums/SubscriptionStatus';
import { User } from 'src/app/models/User/User';

export const usersExample: User[] = [
  {
    _id: '1',
    personalId: '123456789',
    militaryId: '987654321',
    firstName: 'אבי',
    lastName: 'לוי',
    email: 'avi@example.com',
    phoneNumber: '050-1234567',
    city: 'תל אביב',
    street: 'רחוב הציונות',
    houseNumber: '12',
    password: 'securePassword1',
    groups: [],
    logins: [{ time: new Date() }],
    note: 'הערה 1',
    referringUser: 'משתמש מפנה 1',
    gender: Gender.Male,
    birthDate: new Date('1990-01-01'),
    isDelete: false,
    profession: 'מתכנת',
    assignments: [],
    collectionsActivitiesHistory: [
      {
        collectionPreview: {
            id:'eef',
            name:'אטלס',
            imageUrl:"https://www.shutterstock.com/image-photo/explosion-colored-powder-isolated-on-600nw-1610196106.jpg",
            description:'טיפות טיפות על החלון <br> תראה הזמן עצר מלעת <br> יש עוד מילים לשיר שאינני זוכר'
        },
        resourceSubscriptions: [
          {
            resourcePreview: {
              id: '1',
              title: 'Resource 1',
              description: 'Description 1',
              grade: 4,
              resourceType: 'video'
            },
            positionInCollection: 1,
            subscriptionStatus: SubscriptionStatus.New,
            lastActivityTime: new Date(),
            grade: 99,
          },
          {
            resourcePreview: {
              id: '2',
              title: 'Resource 2',
              description: 'Description 2',
              grade: 3,
              resourceType: 'video'
            },
            positionInCollection: 2,
            subscriptionStatus: SubscriptionStatus.InProgress,
            lastActivityTime: new Date(),
            grade: 2,
          },
        ],
        subscriptionStatus: SubscriptionStatus.Done,
        feedPriority: FeedPriority.High,
        subscriptionTime: new Date(),
        lastActivityTime: new Date(),
        grade: 78,
      },
      {
        collectionPreview: {
          id:'fdsfz',
          imageUrl:"https://www.shutterstock.com/image-photo/explosion-colored-powder-isolated-on-600nw-1610196106.jpg",
          name:'פלואו',
          description:'טיפות טיפות על החלון <br> תראה הזמן עצר מלעת <br> יש עוד מילים לשיר שאינני זוכר'
        },
        resourceSubscriptions: [
          {
            resourcePreview: {
              id: '3',
              title: 'Resource 3',
              description: 'Description 3',
              grade: 23,
              resourceType: 'video'
            },
            positionInCollection: 1,
            subscriptionStatus: SubscriptionStatus.Done,
            lastActivityTime: new Date(),
            grade: 63,
          },
          {
            resourcePreview: {
              id: '4',
              title: 'Resource 4',
              description: 'Description 4',
              grade: 45,
              resourceType: 'video'
            },
            positionInCollection: 2,
            subscriptionStatus: SubscriptionStatus.InProgress,
            lastActivityTime: new Date(),
            grade: 49,
          },
        ],
        subscriptionStatus: SubscriptionStatus.New,
        feedPriority: FeedPriority.Medium,
        subscriptionTime: new Date(),
        lastActivityTime: new Date(),
        grade: 93,
      },
    ],
    subscribedCollections: [
      {
        collectionPreview: {
            id:'eef',
            imageUrl:"https://www.shutterstock.com/image-photo/explosion-colored-powder-isolated-on-600nw-1610196106.jpg",
            name:'מייפל',
            description:'טיפות טיפות על החלון <br> תראה הזמן עצר מלעת <br> יש עוד מילים לשיר שאינני זוכר'
        },
        resourceSubscriptions: [
          {
            resourcePreview: {
              id: '1',
              title: 'Resource 1',
              description: 'Description 1',
              grade: 4,
              resourceType: 'video'
            },
            positionInCollection: 1,
            subscriptionStatus: SubscriptionStatus.New,
            lastActivityTime: new Date(),
            grade: 99,
          },
          {
            resourcePreview: {
              id: '2',
              title: 'Resource 2',
              description: 'Description 2',
              grade: 3,
              resourceType: 'video'
            },
            positionInCollection: 2,
            subscriptionStatus: SubscriptionStatus.InProgress,
            lastActivityTime: new Date(),
            grade: 2,
          },
        ],
        subscriptionStatus: SubscriptionStatus.Done,
        feedPriority: FeedPriority.Immidiate,
        subscriptionTime: new Date(),
        lastActivityTime: new Date(),
        grade: 78,
      },
      {
        collectionPreview: {
          id:'fdsfz',
          imageUrl:"https://www.shutterstock.com/image-photo/explosion-colored-powder-isolated-on-600nw-1610196106.jpg",
          name:'אוגוסטוס',
          description:'טיפות טיפות על החלון <br> תראה הזמן עצר מלעת <br> יש עוד מילים לשיר שאינני זוכר'
        },
        resourceSubscriptions: [
          {
            resourcePreview: {
              id: '3',
              title: 'Resource 3',
              description: 'Description 3',
              grade: 23,
              resourceType: 'video'
            },
            positionInCollection: 1,
            subscriptionStatus: SubscriptionStatus.Done,
            lastActivityTime: new Date(),
            grade: 63,
          },
          {
            resourcePreview: {
              id: '4',
              title: 'Resource 4',
              description: 'Description 4',
              grade: 45,
              resourceType: 'video'
            },
            positionInCollection: 2,
            subscriptionStatus: SubscriptionStatus.InProgress,
            lastActivityTime: new Date(),
            grade: 49,
          },
        ],
        subscriptionStatus: SubscriptionStatus.New,
        feedPriority: FeedPriority.Medium,
        subscriptionTime: new Date(),
        lastActivityTime: new Date(),
        grade: 93,
      },
      {
        collectionPreview: {
            id:'eef',
            imageUrl:"https://www.shutterstock.com/image-photo/explosion-colored-powder-isolated-on-600nw-1610196106.jpg",
            name:'פלואו',
            description:'טיפות טיפות על החלון <br> תראה הזמן עצר מלעת <br> יש עוד מילים לשיר שאינני זוכר'
        },
        resourceSubscriptions: [
          {
            resourcePreview: {
              id: '1',
              title: 'המארז הראשון שלי',
              description: 'תיאור רציני של משאב הלמידה הזה. במקרה שלנו מדובר במארז פלואו הראשון',
              grade: 46,
              resourceType: 'video'
            },
            positionInCollection: 1,
            subscriptionStatus: SubscriptionStatus.Done,
            lastActivityTime: new Date(),
            grade: 65,
          },
          {
            resourcePreview: {
              id: '2',
              title: 'השאילתא הראשונה',
              description: 'תיאור רציני של משאב הלמידה הזה. במקרה שלנו מדובר בשאילתא הראשונה שנעשה בה שימוש. מדובר במעמד מרגש',
              grade: 23,
              resourceType: 'presentation'
            },
            positionInCollection: 2,
            subscriptionStatus: SubscriptionStatus.InProgress,
            lastActivityTime: new Date(),
            grade: 92,
          },
          {
            resourcePreview: {
              id: '3',
              title: 'הקובייה הראשונה',
              description: 'תיאור רציני של משאב הלמידה הזה. במקרה שלנו מדובר בשאילתא הראשונה שנעשה בה שימוש. מדובר במעמד מרגש',
              grade: 23,
              resourceType: 'pdf'
            },
            positionInCollection: 3,
            subscriptionStatus: SubscriptionStatus.New,
            lastActivityTime: new Date(),
            grade: 92,
          },
          {
            resourcePreview: {
              id: '4',
              title: 'מבחן',
              description: 'תיאור רציני של משאב הלמידה הזה. במקרה שלנו מדובר בשאילתא הראשונה שנעשה בה שימוש. מדובר במעמד מרגש',
              grade: 23,
              resourceType: 'quiz'
            },
            positionInCollection: 4,
            subscriptionStatus: SubscriptionStatus.New,
            lastActivityTime: new Date(),
            grade: 92,
          },
          {
            resourcePreview: {
              id: '5',
              title: 'לומדה',
              description: 'תיאור רציני של משאב הלמידה הזה. במקרה שלנו מדובר בשאילתא הראשונה שנעשה בה שימוש. מדובר במעמד מרגש',
              grade: 23,
              resourceType: 'story'
            },
            positionInCollection: 5,
            subscriptionStatus: SubscriptionStatus.New,
            lastActivityTime: new Date(),
            grade: 92,
          },
        ],
        subscriptionStatus: SubscriptionStatus.Done,
        feedPriority: FeedPriority.High,
        subscriptionTime: new Date(),
        lastActivityTime: new Date(),
        grade: 84,
      },
      {
        collectionPreview: {
          id:'fdsfz',
          name:'אטלס',
          imageUrl:"https://www.shutterstock.com/image-photo/explosion-colored-powder-isolated-on-600nw-1610196106.jpg",
          description:'טיפות טיפות על החלון <br> תראה הזמן עצר מלעת <br> יש עוד מילים לשיר שאינני זוכר'
        },
        resourceSubscriptions: [
          {
            resourcePreview: {
              id: '3',
              title: 'Resource 3',
              description: 'Description 3',
              grade: 52,
              resourceType: 'video'
            },
            positionInCollection: 1,
            subscriptionStatus: SubscriptionStatus.Done,
            lastActivityTime: new Date(),
            grade: 73,
          },
          {
            resourcePreview: {
              id: '4',
              title: 'Resource 4',
              description: 'Description 4',
              grade: 45,
              resourceType: 'video'
            },
            positionInCollection: 2,
            subscriptionStatus: SubscriptionStatus.InProgress,
            lastActivityTime: new Date(),
            grade: 74,
          },
        ],
        subscriptionStatus: SubscriptionStatus.New,
        feedPriority: FeedPriority.Medium,
        subscriptionTime: new Date(),
        lastActivityTime: new Date(),
        grade: 53,
      },
    ],
  },
  {
    _id: '2',
    personalId: '987654321',
    militaryId: '123456789',
    firstName: 'שרה',
    lastName: 'כהן',
    email: 'sarah@example.com',
    phoneNumber: '052-9876543',
    city: 'ירושלים',
    street: 'רחוב המלך דוד',
    houseNumber: '5',
    password: 'securePassword2',
    groups: [],
    logins: [{ time: new Date() }],
    note: 'הערה 2',
    referringUser: 'משתמש מפנה 2',
    gender: Gender.Female,
    birthDate: new Date('1985-05-15'),
    isDelete: false,
    profession: 'רואה חשבון',
    assignments: [],
    collectionsActivitiesHistory: [],
    subscribedCollections: [],
  },
];
