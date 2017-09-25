import React, { Component } from "react";
import PropTypes from "prop-types";

import { colors } from "../theme";

export default class Logo extends Component {
  static propTypes = {
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    height: PropTypes.number
  };

  static defaultProps = {
    startColor: colors.purple[300],
    endColor: colors.purple[700],
    height: 70
  };

  render() {
    const { startColor, endColor, height } = this.props;

    return (
      <svg
        width={height * 195 / 70}
        height={height}
        viewBox="0 0 195 70"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="50%" x2="100%" y2="50%">
            <stop stopColor={startColor} offset="0%" />
            <stop stopColor={endColor} offset="100%" />
          </linearGradient>
        </defs>
        <g>
          <g fill="url(#gradient)">
            <path d="M85.8875934,0 L96.305908,0 L99.8023075,18.5330433 L104.921276,0 L114.605463,0 L119.735583,18.508649 L123.23965,0 L132.905367,0 L125.606942,33.106544 L115.576704,33.106544 L109.76912,12.2626639 L103.983838,33.106544 L92.2830622,33.106544 L86.9300674,0 L85.8875934,2.07983834e-17 Z M93.0742848,38 L112.039476,38 L112.039476,43.2252503 L105.370811,43.2252503 L105.370811,59.1611722 L98.832009,59.1611722 L98.832009,43.2252503 L93.9191551,43.2252503 L93.0742848,38 Z M113.086826,38 L130.610504,38 L130.610504,42.5180216 L119.64033,42.5180216 L119.64033,45.8813115 L129.816626,45.8813115 L129.816626,50.1972996 L119.64033,50.1972996 L119.64033,54.3689463 L130.928145,54.3689463 L130.928145,59.1611722 L113.086826,59.1611722 L113.086826,38 Z M145.350596,50.4369778 L150.89215,52.1120516 C150.519937,53.6661726 149.933661,54.9643548 149.133323,56.0063755 C148.333208,57.0488417 147.339747,57.8349235 146.153384,58.3655121 C144.9668,58.8958779 143.457006,59.1611722 141.62378,59.1611722 C139.399629,59.1611722 137.582664,58.8377403 136.172885,58.1922132 C134.763105,57.5453496 133.546449,56.409106 132.522694,54.7817005 C131.498939,53.154295 130.987506,51.0709219 130.987506,48.5315813 C130.987506,45.1466847 131.887859,42.5458653 133.68834,40.72645 C135.489045,38.9097077 138.036404,38 141.330642,38 C143.908295,38 145.934645,38.5210103 147.409467,39.5632537 C148.884512,40.6054972 149.980215,42.2061728 150.696799,44.3650578 L145.113591,45.60733 C144.918017,44.9838551 144.713311,44.5278875 144.499249,44.2394273 C144.145523,43.7553933 143.712722,43.3831794 143.201067,43.1227857 C142.689412,42.8621691 142.116946,42.7318608 141.484339,42.7318608 C140.051171,42.7318608 138.953017,43.309004 138.190101,44.4603945 C137.612958,45.3166423 137.324498,46.6589289 137.324498,48.4897044 C137.324498,50.7579593 137.668868,52.3120804 138.357386,53.1531813 C139.045904,53.9940594 140.013971,54.4152781 141.260921,54.4152781 C142.470449,54.4152781 143.384835,54.0755856 144.003632,53.3962006 C144.622429,52.7168156 145.071492,51.7304822 145.350596,50.4369778 Z M151.911211,38 L158.450013,38 L158.450013,45.4050738 L165.595362,45.4050738 L165.595362,38 L172.163121,38 L172.163121,59.1611722 L165.595362,59.1611722 L165.595362,50.6013666 L158.450013,50.6013666 L158.450013,59.1611722 L151.911211,59.1611722 L151.911211,38 Z M134.703032,0 L162.118735,0 L162.118735,7.06842139 L144.955954,7.06842139 L144.955954,12.3302709 L160.876717,12.3302709 L160.876717,19.082612 L144.955954,19.082612 L144.955954,25.6091315 L162.615682,25.6091315 L162.615682,33.106544 L134.703032,33.106544 L134.703032,0 Z M164.245612,0.000139395975 L183.395831,0.000139395975 C186.587302,0.000139395975 189.037535,0.790514573 190.746529,2.37126493 C192.455175,3.95201528 193.309673,5.90913476 193.309673,8.24262338 C193.309673,10.2000914 192.699815,11.8787674 191.480449,13.2786515 C190.667422,14.212256 189.478026,14.9500092 187.912261,15.491911 C190.291053,16.0641315 192.041169,17.0465247 193.16261,18.4390904 C194.284399,19.8316562 194.845119,21.5817727 194.845119,23.6894398 C194.845119,25.4057528 194.446447,26.9488662 193.648405,28.3187801 C192.850363,29.6890426 191.758893,30.7728463 190.373645,31.5708882 C189.515663,32.0678349 188.221023,32.429219 186.489725,32.6550404 C184.185858,32.9557872 182.658078,33.1066834 181.90534,33.1066834 L164.245612,33.1066834 L164.245612,0.000139395975 Z M174.565793,25.9929583 L179.782687,25.9929583 C181.543607,25.9929583 182.785974,25.6807113 183.508742,25.0558689 C184.231161,24.4310264 184.592545,23.5915142 184.592545,22.5376806 C184.592545,21.5591208 184.234995,20.7725791 183.519893,20.1777067 C182.804792,19.5831829 181.551622,19.2855725 179.759687,19.2855725 L174.565793,19.2855725 L174.565793,25.9929583 Z M174.565793,12.9852229 L179.014616,12.9852229 C180.610699,12.9852229 181.72064,12.7102644 182.345482,12.1610442 C182.970325,11.6114756 183.28292,10.817267 183.28292,9.77841853 C183.28292,8.81484386 182.970325,8.06210559 182.345482,7.52020374 C181.72064,6.97830189 180.633003,6.70717672 179.082571,6.70717672 L174.565793,6.70717672 L174.565793,12.9852229 Z M29.03915,18.5262348 C26.3319,24.1748848 24.2522,30.0636348 24.3782,34.6566848 C24.3782,46.3893848 33.9675,55.9002848 45.7961,55.9002848 C57.6247,55.9002848 67.214,46.3893848 67.214,34.6566848 C67.214,28.9331348 64.932,23.7384348 61.22095,19.9188848 L80.27355,3.48258707e-05 L91.5922,70.0000348 L68.78095,70.0000348 L66.16925,48.4078348 L45.7961,70.0000348 L25.42295,48.4078348 L22.81125,70.0000348 L0,70.0000348 L11.31865,3.48258707e-05 L29.03915,18.5262348 Z M45.5682587,43.8405821 C40.3530846,43.8405821 36.1255721,39.6127214 36.1255721,34.3975473 C36.1255721,29.1823731 40.3530846,24.9548607 45.5682587,24.9548607 C50.7834328,24.9548607 55.0109453,29.1823731 55.0109453,34.3975473 C55.0109453,39.6127214 50.7834328,43.8405821 45.5682587,43.8405821 Z" />
          </g>
        </g>
      </svg>
    );
  }
}