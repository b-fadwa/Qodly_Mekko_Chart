import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
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
    key: 'offset',
    label: 'Offset',
    type: ESetting.SELECT,
    options: [
      {
        label: 'none',
        value: 'none',
      },
      {
        label: 'expand',
        value: 'expand',
      },
    ],
    defaultValue: 'none',
  },
  {
    key: 'innerPadding',
    label: 'Inner padding',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 9,
  },
  {
    key: 'outerPadding',
    label: 'Outer padding',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 0,
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
  {
    key: 'showPatternUse',
    label: 'Show Pattern',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'isInteractive',
    label: 'Is Interactive',
    type: ESetting.CHECKBOX,
    defaultValue: false,
  },
  {
    key: 'displayLabel',
    label: 'Display label',
    type: ESetting.CHECKBOX,
    defaultValue: false,
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
