import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { ResponsiveMarimekko } from '@nivo/marimekko';
import { IMekkoChartProps } from './MekkoChart.config';

const MekkoChart: FC<IMekkoChartProps> = ({
  layout,
  offset,
  xAxis,
  yAxis,
  dimensions,
  innerPadding,
  outerPadding,
  isInteractive,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<any[]>([]);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<any[]>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  console.log({innerPadding},{outerPadding},{xAxis},{yAxis},{isInteractive},{offset},{layout},{dimensions})

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ResponsiveMarimekko
        data={value}
        id={xAxis}
        value={yAxis}
        dimensions={dimensions}
        innerPadding={innerPadding}
        outerPadding={outerPadding}
        isInteractive={isInteractive}
        axisTop={null}
        axisRight={{
          // orient: 'right',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 0,
          truncateTickAt: 0,
        }}
        axisBottom={{
          // orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'participation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={{
          // orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'opinions',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
        colors={{ scheme: 'spectral' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        defs={[
          {
            id: 'lines',
            type: 'patternLines',
            background: 'rgba(0, 0, 0, 0)',
            color: 'inherit',
            rotation: -45,
            lineWidth: 4,
            spacing: 8,
          },
        ]}
        fill={[
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
        ]}
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
