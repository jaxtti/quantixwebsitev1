// app/types.ts
export interface Plan {
  id: number;
  name: string;
  category: 'Budget VPS' | 'Premium VPS' | 'Dedicated Servers' | 'Web Hosting' | 'Game Servers';
  price: number;
  tags: string[];
  availableLocations: ('US' | 'UK' | 'DE' | 'AU' | 'SG' | 'ZA')[] | 'ALL';
  specifications: ServerSpecs;
  discount?: number;
}

export interface ServerSpecs {
  cpu?: string;
  cpuCores?: number;
  cpuThreads?: number;
  cpuSpeed?: string;
  ram: number;
  ramGeneration?: 'DDR4' | 'DDR5';
  storage: number;
  storageType?: string;
  bandwidth?: number;
  networkSpeed?: number;
  playerSlots?: string;
  websites?: number;
  emailAccounts?: number;
  databases?: number;
}

export interface FilterState {
  location: ('US' | 'UK' | 'DE' | 'AU' | 'SG' | 'ZA')[];
  service: ('Budget VPS' | 'Premium VPS' | 'Dedicated Servers' | 'Web Hosting' | 'Game Servers')[];
  priceRange: { min: number; max: number };
  generation: ('DDR4' | 'DDR5')[];
}

export interface LocationOption {
  code: 'US' | 'UK' | 'DE' | 'AU' | 'SG' | 'ZA';
  name: string;
  flag: string;
}

// app/types.ts - Add these interfaces
export interface WizardState {
  purpose?: 'game' | 'infrastructure';
  game?: 'GTA Modded' | 'ARK: Survival Evolved' | 'Minecraft' | 'Palworld' | 'Rust' | 'Unturned';
  playerRange?: '1-20' | '20-50' | '50-80' | '80-120' | '120+';
  vehicleCount?: 'Low (1-50)' | 'Medium (50-200)' | 'High (200-500)' | 'Very High (500+)';
  location?: 'US' | 'UK' | 'DE' | 'AU' | 'SG' | 'ZA';
  selectedPlan?: number;
}

export interface WizardStep {
  id: number;
  title: string;
  description?: string;
  type: 'dropdown' | 'buttons' | 'location';
  options?: WizardOption[];
}

export interface WizardOption {
  value: string;
  label: string;
  icon?: string;
  description?: string;
}
