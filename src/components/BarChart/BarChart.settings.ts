import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  { key: 'enableLabel', label: 'Enable label', type: ESetting.CHECKBOX, defaultValue: true },
  { key: 'isInteractive', label: 'Is interactive', type: ESetting.CHECKBOX, defaultValue: true },
  { key: 'enableTotals', label: 'Enable totals', type: ESetting.CHECKBOX, defaultValue: true },
  { key: 'showPattern', label: 'Show pattern', type: ESetting.CHECKBOX, defaultValue: true },
  { key: 'showLegend', label: 'Show legend', type: ESetting.CHECKBOX, defaultValue: true },
  { key: 'innerPadding', label: 'Inner padding', type: ESetting.NUMBER_FIELD, defaultValue: 0 },
  { key: 'maxValue', label: 'Max value', type: ESetting.NUMBER_FIELD, defaultValue: 1000 },
  {
    key: 'layout',
    label: 'Layout',
    type: ESetting.SELECT,
    options: [
      {
        label: 'Vertical',
        value: 'vertical',
      },
      {
        label: 'Horizontal',
        value: 'horizontal',
      },
    ],
    defaultValue: 'vertical',
  },
  {
    key: 'groupMode',
    label: 'Group mode',
    type: ESetting.SELECT,
    options: [
      {
        label: 'Stacked',
        value: 'stacked',
      },
      {
        label: 'Grouped',
        value: 'grouped',
      },
    ],
    defaultValue: 'stacked',
  },
  {
    key: 'colorScheme',
    label: 'Color Scheme',
    type: ESetting.SELECT,
    options: [
      {
        label: 'Nivo',
        value: 'nivo',
      },
      {
        label: 'Reds',
        value: 'reds',
      },
      {
        label: 'Blues',
        value: 'blues',
      },
      {
        label: 'Greys',
        value: 'greys',
      },
      {
        label: 'Oranges',
        value: 'oranges',
      },
      {
        label: 'Greens',
        value: 'greens',
      },
      {
        label: 'Purples',
        value: 'purples',
      },
      {
        label: 'Category10',
        value: 'category10',
      },
      {
        label: 'Dark2',
        value: 'dark2',
      },
      {
        label: 'Pastel1',
        value: 'pastel1',
      },
      {
        label: 'Pastel2',
        value: 'pastel2',
      },
      {
        label: 'Set1',
        value: 'set1',
      },
      {
        label: 'Set2',
        value: 'set2',
      },
      {
        label: 'Set3',
        value: 'set3',
      },
      {
        label: 'Red-Yellow-Green',
        value: 'red_yellow_green',
      },
      {
        label: 'Red-Yellow-Blue',
        value: 'red_yellow_blue',
      },
      {
        label: 'PurpleRed-Green',
        value: 'purpleRed_green',
      },
      {
        label: 'Pink-YellowGreen',
        value: 'pink_yellowGreen',
      },
      {
        label: 'Purple-Orange',
        value: 'purple_orange',
      },
    ],
    defaultValue: 'nivo',
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
