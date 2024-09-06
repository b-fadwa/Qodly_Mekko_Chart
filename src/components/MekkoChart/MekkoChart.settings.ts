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
      {
        label: 'diverging',
        value: 'diverging',
      },
    ],
    defaultValue: 'none',
  },
  {
    key: 'xAxis',
    label: 'Id',
    type: ESetting.TEXT_FIELD,
  },
  {
    key: 'yAxis',
    label: 'Value',
    type: ESetting.TEXT_FIELD,
  },
  {
    type: ESetting.DATAGRID,
    key: 'dimensions',
    label: 'Dimensions',
    data: [
      {
        label: 'Label',
        type: ESetting.TEXT_FIELD,
        defaultValue:'',
        key: 'id',
      },
      {
        label: 'Value',
        type: ESetting.TEXT_FIELD,
        defaultValue:'',
        key: 'value',
      }
    ],
  },
  {
    key: 'Inner padding',
    label: 'innerPadding',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 9,
  },
  {
    key: 'Outer padding',
    label: 'outerPadding',
    type: ESetting.NUMBER_FIELD,
    defaultValue: 0,
  },
  {
    key: 'Show pattern',
    label: 'showPatternUse',
    type: ESetting.CHECKBOX,
    defaultValue: true,
  },
  {
    key: 'Interactive',
    label: 'isInteractive',
    type: ESetting.CHECKBOX,
    defaultValue: true,
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
