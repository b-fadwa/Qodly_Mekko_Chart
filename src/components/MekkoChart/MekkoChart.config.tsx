import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlineTextSnippet } from 'react-icons/md';

import MekkoChartSettings, { BasicSettings } from './MekkoChart.settings';
import { DatumPropertyAccessor } from '@nivo/marimekko';
import { ColorSchemeId } from '@nivo/colors';

export default {
  craft: {
    displayName: 'MekkoChart',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(MekkoChartSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'MekkoChart',
    exposed: true,
    icon: MdOutlineTextSnippet,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['array'],
    },
  },
  defaultProps: {
    style: {
      width: '100%',
      height: '500px',
    },
    colorScheme: 'nivo',
  },
} as T4DComponentConfig<IMekkoChartProps>;

export interface IMekkoChartProps extends webforms.ComponentProps {
  layout: any;
  offset: any;
  xAxis: string;
  yAxis: string;
  dimensions: any[];
  innerPadding: number;
  outerPadding: number;
  showPatternUse: boolean;
  isInteractive: boolean;
  axisBottomLegend: string;
  axisLeftLegend: string;
  axisRightLegend: string;
  colorScheme: ColorSchemeId;
  legendPosition: AxisLegendPosition;
}

export interface IDimension {
  id: string;
  value: string | number | DatumPropertyAccessor<any, number>;
}

type AxisLegendPosition = 'start' | 'middle' | 'end';
