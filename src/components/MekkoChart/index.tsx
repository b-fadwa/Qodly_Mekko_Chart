import config, { IMekkoChartProps } from './MekkoChart.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './MekkoChart.build';
import Render from './MekkoChart.render';

const MekkoChart: T4DComponent<IMekkoChartProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

MekkoChart.craft = config.craft;
MekkoChart.info = config.info;
MekkoChart.defaultProps = config.defaultProps;

export default MekkoChart;
