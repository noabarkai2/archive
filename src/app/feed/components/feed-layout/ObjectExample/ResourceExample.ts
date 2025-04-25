import { Resource } from "src/app/models/Resource/Resource";

export const ResourceExample: Resource = {
    id: "12345א",
    name: "שם המשאב",
    title: "כותרת המשאב",
    description: 'בארץ התקווה שבאפריקה שולט אריה אציל בשם מופסה על בעלי החיים כמלך החיות. למופסה וזוגתו סאראבי נולד בן, סימבה, שעתיד לרשת את הממלכה אחרי שמופסה ימות וכל החיות מגיעות להשתחוות לו בעודו נישא בידי הקוף הזקן',
    subtitle: "תת כותרת המשאב",
    views: 500,
    lastUpdateTime: new Date(),
    comments: [
        {
            publisherName: "משתמש א",
            content: "זוהי תגובה ראשונה",
            postTime: new Date(),
        },
        {
            publisherName: "משתמש ב",
            content: "תגובה נוספת כאן",
            postTime: new Date(),
        },
        {
            publisherName: "משתמש ג",
            content: "זוהי תגובה שלישית",
            postTime: new Date(),
        },
        {
            publisherName: "משתמש ד",
            content: "תגובה נוספת כאן",
            postTime: new Date(),
        },
    ],
    isDelete: false,
    resourceType: "סוג המשאב",
    link: "https://example.com",
    fileId: "abcde12345",
}