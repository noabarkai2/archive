export enum FeedPriority {
    NotSubscribed = -1,
    NotShown = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Immidiate = 4
}

export const priorityDisplayNames = [
    "לא נראה",
    "העשרה / רשות",
    "עדיפות נמוכה",
    "עדיפות בינונית",
    "עדיפות גבוהה"
]