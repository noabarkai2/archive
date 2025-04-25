import { EducationStatus } from "../molecules/education-status-item/education-status-item.component";

export const educationStatuses: EducationStatus[] = [{
    id: 'collections',
    color: '#7A9AAC',
    currentValue: 0,
    type: 'מארזי למידה',
    total: 0,
    totalType: 'מארזי למידה',
    iconPath: 'string'
},
{
    id: 'hours',
    color: '#4174D6',
    currentValue: 0,
    type: 'שעות',
    total: 0,
    totalType: 'שעות למידה',
    iconPath: 'string'
},
{
    id: 'exams',
    color: '#E08702',
    currentValue: 0,
    type: 'מבחנים',
    total: 0,
    totalType: 'מבחנים',
    iconPath: 'string'
},
{
    id: 'resources',
    color: '#26C593',
    currentValue: 0,
    type: 'שיעורים',
    total: 0,
    totalType: 'שיעורים',
    iconPath: 'string'
}]