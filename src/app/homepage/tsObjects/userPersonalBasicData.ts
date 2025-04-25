import { EducationStatus } from "../molecules/education-status-item/education-status-item.component";

export const userPersonalBasicData: KeyValue[] = [
    {
        id: 'personalId',
        key: 'תעודת זהות',
        value: '123456789'
    },
    {
        id: 'militaryId',
        key: 'מספר אישי',
        value: '1234589'
    },
    {
        id: 'rank',
        key: 'דרגה',
        value: 'רב"ט'
    },
    {
        id: 'profession',
        key: 'מקצוע צבאי',
        value: 'חוקר'
    },
    {
        id: 'birthDate',
        key: 'תאריך לידה',
        value: '17/08/1999'
    }
]

export type KeyValue = {
    id: string;
    key: string;
    value: string;
};
