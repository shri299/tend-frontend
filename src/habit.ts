import type{HabitState,LifeItem}from'./types';
export const habitStates:HabitState[]=['COMPLETED','PARTIAL','SKIPPED','MISSED'];
export function nextHabitState(current?:HabitState){return habitStates[(current?habitStates.indexOf(current)+1:0)%habitStates.length]}
export function isHabitScheduled(habit:LifeItem,date:Date){return!habit.selectedWeekdays?.length||habit.selectedWeekdays.includes(((date.getDay()+6)%7)+1)}
