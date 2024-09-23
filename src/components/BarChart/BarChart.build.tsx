import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IBarChartProps } from './BarChart.config';
import { ResponsiveBar } from '@nivo/bar';

const BarChart: FC<IBarChartProps> = ({
  colorScheme,
  enableLabel,
  isInteractive,
  groupMode,
  layout,
  innerPadding,
  enableTotals,
  showPattern,
  showLegend,
  maxValue,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const data = [
    {
      country: 'AD',
      'Serie 1': 181,
      'Serie 2': 178,
      'Serie 3': 178,
      'Serie 4': 59,
      'Serie 5': 46,
      'Serie 6': 79,
    },
    {
      country: 'AE',
      'Serie 1': 42,
      'Serie 2': 58,
      'Serie 3': 42,
      'Serie 4': 169,
      'Serie 5': 200,
      'Serie 6': 173,
    },
    {
      country: 'AF',
      'Serie 1': 29,
      'Serie 2': 116,
      'Serie 3': 147,
      'Serie 4': 154,
      'Serie 5': 150,
      'Serie 6': 40,
    },
    {
      country: 'AG',
      'Serie 1': 126,
      'Serie 2': 56,
      'Serie 3': 128,
      'Serie 4': 20,
      'Serie 5': 121,
      'Serie 6': 94,
    },
    {
      country: 'AI',
      'Serie 1': 191,
      'Serie 2': 23,
      'Serie 3': 174,
      'Serie 4': 119,
      'Serie 5': 137,
      'Serie 6': 160,
    },
    {
      country: 'AL',
      'Serie 1': 52,
      'Serie 2': 106,
      'Serie 3': 42,
      'Serie 4': 114,
      'Serie 5': 193,
      'Serie 6': 16,
    },
    {
      country: 'AM',
      'Serie 1': 197,
      'Serie 2': 196,
      'Serie 3': 71,
      'Serie 4': 165,
      'Serie 5': 137,
      'Serie 6': 100,
    },
  ];

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ResponsiveBar
        data={data}
        keys={['Serie 1', 'Serie 2', 'Serie 3', 'Serie 4', 'Serie 5', 'Serie 6']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        layout={layout}
        innerPadding={innerPadding}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: colorScheme }}
        gridXValues={[]}
        gridYValues={[]}
        isInteractive={isInteractive}
        groupMode={groupMode}
        enableTotals={enableTotals}
        defs={
          showPattern
            ? [
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'rgba(0, 0, 0, 0)',
                  color: 'inherit',
                  rotation: -45,
                  lineWidth: 4,
                  spacing: 8,
                },
              ]
            : []
        }
        fill={
          showPattern
            ? [
                {
                  match: {
                    id: 'Serie 1',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'Serie 2',
                  },
                  id: 'lines',
                },
              ]
            : []
        }
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={null}
        maxValue={maxValue}
        enableLabel={enableLabel}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={
          showLegend
            ? [
                {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : []
        }
      />
    </div>
  );
};

export default BarChart;
