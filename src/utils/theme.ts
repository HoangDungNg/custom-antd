import { CSSProperties } from 'styled-components';
import { ThemeConfig } from 'antd';
export type SeedTokenProps = {
  token: {
    borderRadius?: number;
    colorBgBase?: string;
    colorError?: string;
    colorInfo?: string;
    colorPrimary?: string;
    colorSuccess?: string;
    colorTextBase?: string;
    colorWarning?: string;
    controlHeight?: number;
    fontFamily?: string;
    fontFamilyCode?: string;
    fontSize?: number;
    lineType?: string;
    lineWidth?: number;
    motionBase?: number;
    motionEaseInBack?: string;
    motionEaseInOut?: string;
    motionEaseInOutCirc?: string;
    motionEaseInQuint?: string;
    motionEaseOut?: string;
    motionEaseOutBack?: string;
    motionEaseOutCirc?: string;
    motionEaseOutQuint?: string;
    motionUnit?: number;
    opacityImage?: number;
    sizePopupArrow?: number;
    sizeStep?: number;
    sizeUnit?: number;
    wireframe?: boolean;
    zIndexBase?: number;
    zIndexPopupBase?: number;
  };
};

export const mapSeedNames = (seeds: CSSProperties) => {
  const theme: ThemeConfig = {
    token: {},
  };

  const styleArray: Array<[string, string]> = Object.entries(seeds);
  styleArray.forEach((styl) => {
    switch (styl[0]) {
      case 'color': {
        theme.token ? (theme.token.colorPrimary = styl[1]) : undefined;
      }
    }
  });

  return theme;
};
