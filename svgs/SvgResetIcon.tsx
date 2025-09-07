import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} {...props}>
    <G
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
    >
      <Path d="M12 3a9 9 0 1 1-5.657 2" />
      <Path d="M3 4.5h4v4" />
    </G>
  </Svg>
);
export default SvgComponent;
