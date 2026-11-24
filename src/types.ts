export type ItemType='BRAIN_DUMP'|'GOAL'|'TASK'|'HABIT';
export interface Category{id:string;name:string;color:string;icon:string}
export interface LifeItem{id:string;type:ItemType;title:string;description?:string;status:string;priority?:string;energy?:string;scheduledDate?:string;dueDate?:string;minimumAction?:string;recurrence?:string;processed:boolean;createdAt:string}
export interface Checkin{id:string;mood?:number;energy:string;stress?:number;note?:string;recordedAt:string}
export interface Dashboard{today:LifeItem[];latestCheckin?:Checkin;counts:Record<string,number>;suggestion:string}
