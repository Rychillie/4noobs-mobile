import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

//https://react-svgr.com/playground/?native=true

export const NotificationIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#prefix__clip0)" fill="#4775f2">
      <Path d="M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z" />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CoursesIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#prefix__clip0)">
      <Path
        d="M6 12h2c.6 0 1-.4 1-1V3.5l3.2 7.9c.2.5.8.8 1.3.5l1.9-.8c.5-.2.8-.8.5-1.3L12.1.5c-.2-.5-.8-.8-1.3-.5L9 .8C8.9.4 8.5 0 8 0H6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1z"
        fill="#7D8FFF"
      />
      <Path
        d="M1 12h2c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1z"
        fill="#546BFB"
      />
      <Path d="M16 14H0v2h16v-2z" fill="#D7DCFF" />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const StarIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#prefix__clip0)">
      <Path
        d="M15.144 5.439l-4.317-.628L8.9.9a1.041 1.041 0 00-1.8 0L5.173 4.812l-4.317.627A1 1 0 00.3 7.145l3.123 3.045-.737 4.3a1 1 0 001.451 1.054L8 13.513l3.861 2.029a1 1 0 001.451-1.054l-.737-4.3L15.7 7.145a1 1 0 00-.554-1.705l-.002-.001z"
        fill="#546BFB"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const RefreshIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.5 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.3.4 5.9.4 3.1 3.1L.9.9.2 7.3l6.4-.7-2.1-2.1z"
      fill="#546BFB"
    />
    <Path
      d="M15.8 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z"
      fill="#D7DCFF"
    />
  </Svg>
);
