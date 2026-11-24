export type EnergyLevel='LOW'|'MODERATE'|'HIGH';
export function suggestedPriorityCount(energy:EnergyLevel){return energy==='LOW'?1:energy==='HIGH'?3:2}
