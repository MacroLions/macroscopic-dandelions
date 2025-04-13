// src/app/items-data.ts
export interface ItemData {
  name: string;
  icon: string;
  style: string;
}

export const ITEMS_DATA: ItemData[] = [
  { name: 'Dandelion', icon: 'material-symbols-light:book-4', style:"text-purple-500"},
  { name: 'Scopisch', icon: 'lucide:file-pen-line', style: "text-fuchsia-200" },
  { name: 'Regan', icon: 'material-symbols:file-copy-off', style: "text-violet-950/90" },
  { name: 'Macro', icon: 'mdi:microphone', style: "text-blue-500" },
  { name: 'Dear Writer', icon: 'mdi:pen', style: "text-fuchsia-200" },
  { name: 'Dear Reader', icon: 'mdi:book-open', style: "text-yellow-950" },
  { name: 'Lion', icon: 'mdi:paw', style: "text-green-500" },
  { name: '???', icon: 'mdi:help-circle', style: "text-black" },
];
