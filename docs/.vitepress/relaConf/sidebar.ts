import { DefaultTheme } from 'vitepress';
import {
  algorithmSidebarDetail,
  interviewSidebarDetail,
  computerKnowledgeSidebarDetail,
  frontendSidebarDetail,
  backendSidebarDetail,
  otherLangSidebarDetail,
  talentSidebarDetail,
  growingSidebarDetail,
  productSidebarDetail,
  MLSidebarDetail,
  LLMSidebarDetail
} from './sidebarDetail';

export const sidebar: DefaultTheme.Sidebar = {
  ...algorithmSidebarDetail,
  ...interviewSidebarDetail,
  ...computerKnowledgeSidebarDetail,
  ...frontendSidebarDetail,
  ...backendSidebarDetail,
  ...otherLangSidebarDetail,
  ...talentSidebarDetail,
  ...growingSidebarDetail,
  ...productSidebarDetail,
  ...MLSidebarDetail,
  ...LLMSidebarDetail
};
