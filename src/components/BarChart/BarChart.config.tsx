import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { HiChartBar } from 'react-icons/hi';

import BarChartSettings, { BasicSettings } from './BarChart.settings';
import { ColorSchemeId } from '@nivo/colors';

export default {
  craft: {
    displayName: 'BarChart',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(BarChartSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'BarChart',
    exposed: true,
    icon: HiChartBar,
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
    colorScheme: 'nivo',
    enableLabel: true,
    isInteractive: true,
    style: {
      height: '500px',
      width: '100%',
    },
    groupMode: 'stacked',
    layout: 'vertical',
    innerPadding: 0,
    enableTotals: true,
    showPattern: true,
    showLegend: true,
    maxValue: 1000,
  },
} as T4DComponentConfig<IBarChartProps>;

export interface IBarChartProps extends webforms.ComponentProps {
  colorScheme: ColorSchemeId;
  enableLabel: boolean;
  isInteractive: boolean;
  groupMode: mode;
  layout: any;
  innerPadding: number;
  enableTotals: boolean;
  showPattern: boolean;
  showLegend: boolean;
  maxValue: number;
}

type mode = 'stacked' | 'grouped' | undefined;
