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
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  let data: any = [
    {
      statement: "it's good", //id aka xAxis
      participation: 9, //value aka yAxis
      stronglyAgree: 15,
      agree: 9,
      disagree: 22,
      stronglyDisagree: 20,
    },
    {
      statement: "it's sweet",
      participation: 12,
      stronglyAgree: 28,
      agree: 0,
      disagree: 3,
      stronglyDisagree: 26,
    },
    {
      statement: "it's spicy",
      participation: 10,
      stronglyAgree: 27,
      agree: 24,
      disagree: 20,
      stronglyDisagree: 12,
    },
    {
      statement: 'worth eating',
      participation: 11,
      stronglyAgree: 20,
      agree: 20,
      disagree: 19,
      stronglyDisagree: 14,
    },
    {
      statement: 'worth buying',
      participation: 25,
      stronglyAgree: 30,
      agree: 14,
      disagree: 15,
      stronglyDisagree: 5,
    },
  ];

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
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
            id: 'disagree strongly',
            value: 'stronglyDisagree',
          },
          {
            id: 'disagree',
            value: 'disagree',
          },
          {
            id: 'agree',
            value: 'agree',
          },
          {
            id: 'agree strongly',
            value: 'stronglyAgree',
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
                    id: 'agree strongly',
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: 'disagree strongly',
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
      />
    </div>
  );
};

export default MekkoChart;
