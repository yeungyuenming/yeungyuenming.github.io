import type { Lang } from '@i18n/ui';

export type ResearchAreaId = 'research-area-1' | 'research-area-2' | 'research-area-3';

export interface ResearchArea {
  id: ResearchAreaId;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

// 单一数据源：首页与 Research 页面共用，确保卡片数量/顺序一致
export const researchAreas: ResearchArea[] = [
  {
    id: 'research-area-1',
    title: { en: 'Research Area 1', zh: '研究方向一' },
    description: { en: 'Description of your first research area...', zh: '中医药防治消化道疾病' },
  },
  {
    id: 'research-area-2',
    title: { en: 'Research Area 2', zh: '研究方向二' },
    description: { en: 'Description of your second research area...', zh: '计算生物学' },
  },
  {
    id: 'research-area-3',
    title: { en: 'Research Area 3', zh: '研究方向三' },
    description: { en: 'Description of your third research area...', zh: '敬请期待，未来可期' },
  },
];


