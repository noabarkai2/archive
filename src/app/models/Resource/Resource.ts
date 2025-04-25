import { ResourceComment } from "../Shared/ResourceComment";

export type Resource = {
    id: string;
    name: string;
    title: string;
    description: string;
    subtitle: string;
    views: number;
    lastUpdateTime: Date;
    comments: ResourceComment[];
    isDelete: boolean;
    resourceType: string;
    link: string;
    fileId: string;
    // quiz: QuizData;
    // EXERCISE: Exercise; 
}