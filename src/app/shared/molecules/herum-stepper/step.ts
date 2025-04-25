import { StepStatus } from "./stepperStatus";

export type Step = {
    index: number,
    label: string,
    status: StepStatus, 
}