import{describe,expect,it}from'vitest';import{suggestedPriorityCount}from'./energy';
describe('energy-aware planning',()=>{it.each([['LOW',1],['MODERATE',2],['HIGH',3]] as const)('suggests a deterministic, overridable workload for %s energy',(energy,count)=>{expect(suggestedPriorityCount(energy)).toBe(count)})});
