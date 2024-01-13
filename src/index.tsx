/* Copyright Tincre (Musicfox, Inc)
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React, { Dispatch } from 'react';

export type CloudinaryOptions = {
  cloudName: string;
  uploadPreset: string;
  folder: string;
  multiple: boolean;
};

export type HowItWorksContent = {
  steps: [
    { title: string; subtitle: string },
    { title: string; subtitle: string },
    { title: string; subtitle: string }
  ];
  title: string;
  subtitle: string;
  submittedSubtitle: string;
  submittedTitle: string;
  footerCloseMessage?: string;
};
export type InputPlaceholders = InputValues & {};

export type InputValues = {
  adTitle?: string;
  budget?: number | string;
  target?: string;
  adCopy?: string;
  adCallToAction?: string;
  buttonText?: string;
  creativeUri?: object[];
  creativeUrls?: string[];
  isFlat?: boolean;
};
export type InputConfig = {
  minSpend?: number;
  maxSpend?: number;
  rangeStep?: number;
};

export type PromoOptions = {
  cloudinary?: CloudinaryOptions;
  howItWorksContent?: HowItWorksContent;
  inputValues?: InputValues;
  inputPlaceholders?: InputPlaceholders;
  inputConfig?: InputConfig;
  setPromoData?: Dispatch<InputValues | null>;
  paymentType?: string;
  targetLinkIcons?: SocialsType;
  adDisplayImageCropMessageText?: string;
};
export type ButtonFormElements = HTMLFormControlsCollection & {
  target: HTMLInputElement;
  budget: HTMLInputElement;
  adTitle: HTMLInputElement;
  buttonText: HTMLInputElement;
  adCallToActionText: HTMLInputElement;
  adCopyInputText: HTMLInputElement;
  paymentTypeInput: HTMLInputElement;
};
export type ButtonFormSubmission = HTMLFormElement & {
  readonly elements: ButtonFormElements;
};
export type SocialKey =
  | 'LinkedIn'
  | 'Spotify'
  | 'Twitter'
  | 'Facebook'
  | 'Github'
  | 'Instagram'
  | 'Snapchat'
  | 'Apple'
  | 'YouTube'
  | 'Web Url'
  | 'TikTok'
  | '';
export type SocialsType = {
  Instagram?: SocialKey;
  Spotify?: SocialKey;
  Facebook?: SocialKey;
  'Web Url'?: SocialKey;
  YouTube?: SocialKey;
  Apple?: SocialKey;
  Twitter?: SocialKey;
  TikTok?: SocialKey;
};
export type HeroiconIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

export type DownloadableCampaignStatsSample = PromoApiCampaignStatsSample & {
  pid: string;
};

export type DownloadableCampaignMetadataSample =
  DownloadableCampaignStatsSample & {
    adTitle?: string;
    budget?: number | string;
    target?: string;
    isActive?: boolean;
    adCallToAction?: string;
    buttonText?: string;
    creativeUrl: string;
  };

export type PromoApiCampaignStatsSample = {
  updatedTime?: string;
  updated_time?: string;
  spend?: number | string | null;
  reach?: number | string | null;
  views?: number | string | null;
  clicks?: number | string | null;
  cpc?: number | string | null;
  ctr?: number | string | null;
  cpm?: number | string | null;
  cpv?: number | string | null;
};

export type CampaignStatsSample = {
  name: string;
};

export type PromoApiCampaignStatsData = {
  totals?: PromoApiCampaignStatsSample[];
  google?: PromoApiCampaignStatsSample[];
  meta?: PromoApiCampaignStatsSample[];
};

export type DownloadableCampaignStats = {
  updatedTime: (string | null)[];
  spend?: (number | string | null)[];
  reach?: (number | string | null)[];
  views?: (number | string | null)[];
  clicks?: (number | string | null)[];
  cpc?: (number | string | null)[];
  cpm?: (number | string | null)[];
  ctr?: (number | string | null)[];
  cpv?: (number | string | null)[];
  pid: (string | null)[];
};

export type CampaignMetrics =
  | 'Spend'
  | 'Clicks'
  | 'Views'
  | 'Reach'
  | 'CPM'
  | 'CTR'
  | 'CPC'
  | 'CPV'
  | string;

export type CampaignStatsData = {
  id: number | undefined;
  name: CampaignMetrics;
  stat: string;
  isActive?: boolean;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  change: string | number;
  changeType: string;
  chartData: {
    labels: (string | null)[];
    data: (string | number | null)[];
  };
};

export type CampaignMetadata = {
  pid?: string;
  email?: string;
  adTitle?: string;
  budget?: string | number;
  description?: string;
  target?: string;
  adCopy?: string;
  creativeUrls?: string[];
  adCallToAction?: string;
  buttonText?: string;
  isActive?: boolean;
  receiptId?: string;
  currency?: string;
  isFlat?: boolean;
  usageFee?: string | number;
  startDate?: string;
  createdAt?: string;
};

export type CampaignData = CampaignMetadata & {
  stats?: CampaignStatsData[];
  data?: PromoApiCampaignStatsData;
};

export type CampaignDummyData = CampaignMetadata & {
  stats?: CampaignStatsData[];
  data?: CampaignStatsData[];
};

export type CampaignSortedData = CampaignDummyData & {};

export type Settings = {
  fullName?: string;
  image?: string;
  userName?: string;
  email?: string;
};

export type CampaignType = {
  name: string;
  description?: string;
  icon?:
    | 'eye'
    | 'magnifying-glass'
    | 'rocket-launch'
    | 'calendar'
    | 'newspaper'
    | 'arrow-uturn-left'
    | 'user-group'
    | 'video-camera'
    | 'tag'
    | 'heart'
    | 'megaphone';
  color?: string;
};

export type DashboardOptions = {
  emailDomain?: string;
  emailLocalPart?: string;
  isTableCollapsed?: boolean;
  promoChatApiRoute?: string;
  promoChatStartingAgentMessage?: string;
  promoChatAgentName?: string;
  promoChatInputMessagePlaceholder?: string;
  promoChatExecuteRecaptcha?: (action: string) => Promise<string>;
  campaignTypes?: CampaignType[];
};
