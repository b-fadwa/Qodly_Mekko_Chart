import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { ResponsiveMarimekko } from '@nivo/marimekko';
import { IMekkoChartProps } from './MekkoChart.config';

const MekkoChart: FC<IMekkoChartProps> = ({
  layout,
  offset,
  innerPadding,
  outerPadding,
  isInteractive,
  showPatternUse,
  colorScheme,
  displayLabel,
  displayTotal,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  let data: any = [
    {
      statement: 'Statement 1', // id aka xAxis
      participation: 9, // value aka yAxis
      dimension1: 15,
      dimension2: 9,
      dimension3: 22,
      dimension4: 20,
    },
    {
      statement: 'Statement 2',
      participation: 12,
      dimension1: 28,
      dimension2: 0,
      dimension3: 3,
      dimension4: 26,
    },
    {
      statement: 'Statement 3',
      participation: 10,
      dimension1: 27,
      dimension2: 24,
      dimension3: 20,
      dimension4: 12,
    },
    {
      statement: 'Statement 4',
      participation: 11,
      dimension1: 20,
      dimension2: 20,
      dimension3: 19,
      dimension4: 14,
    },
    {
      statement: 'Statement 5',
      participation: 25,
      dimension1: 30,
      dimension2: 14,
      dimension3: 15,
      dimension4: 5,
    },
  ];

  const barLabel = ({ bars }: any) => {
    return (
      <>
        {bars.map((bar: any) => (
          <text
            key={bar.key}
            x={bar.x + bar.width / 2}
            y={bar.y + bar.height / 2}
            textAnchor="middle"
            alignmentBaseline="middle"
            className="bar-content text-sm font-medium text-inherit"
          >
            {bar.value === 0 ? '' : bar.value}
          </text>
        ))}
      </>
    );
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      {displayTotal && <span className="bars-total text-l font-bold">Total: 0</span>}
      <ResponsiveMarimekko
        data={data}
        id="statement"
        value="participation"
        gridXValues={[]}
        gridYValues={[]}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          truncateTickAt: 0,
        }}
        dimensions={[
          {
            id: 'Dimension 1',
            value: 'dimension1',
          },
          {
            id: 'Dimension 2',
            value: 'dimension2',
          },
          {
            id: 'Dimension 3',
            value: 'dimension3',
          },
          {
            id: 'Dimension 4',
            value: 'dimension4',
          },
        ]}
        isInteractive={isInteractive}
        innerPadding={innerPadding}
        outerPadding={outerPadding}
        margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
        colors={{ scheme: colorScheme }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        defs={
          showPatternUse
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
          showPatternUse
            ? [
                {
                  match: {
                    id: 'Dimension 3',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'Dimension 1',
                  },
                  id: 'lines',
                },
              ]
            : []
        }
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 80,
            itemsSpacing: 0,
            itemWidth: 140,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'right-to-left',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'square',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
        layout={layout}
        offset={offset}
        layers={displayLabel ? ['grid', 'axes', 'bars', barLabel] : ['grid', 'axes', 'bars']}
      />
    </div>
  );
};

export default MekkoChart;
