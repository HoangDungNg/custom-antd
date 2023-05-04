import React, { ReactNode, CSSProperties, useMemo } from 'react';
import { ConfigProvider } from 'antd';
import { mapSeedNames } from '../../utils';

interface ISampleCustom extends CSSProperties {
  children?: ReactNode;
}

const SampleCustom: React.FC<ISampleCustom> = (props) => {
  const { children, ...restProps } = props;
  const memoTheme = useMemo(() => mapSeedNames(restProps), [restProps]);

  return <ConfigProvider theme={memoTheme}>{children}</ConfigProvider>;
};

export default SampleCustom;
