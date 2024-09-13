import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { DatumPropertyAccessor, ResponsiveMarimekko } from '@nivo/marimekko';
import { IDimension, IMekkoChartProps } from './MekkoChart.config';

const MekkoChart: FC<IMekkoChartProps> = ({
  layout,
  offset,
  xAxis,
  yAxis,
  dimensions,
  innerPadding,
  outerPadding,
  isInteractive,
  axisBottomLegend,
  axisLeftLegend,
  colorScheme,
  showPatternUse,
  axisRightLegend,
  legendPosition,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [data, setData] = useState<any[]>([]);
  const [id, setXasis] = useState<string | number | DatumPropertyAccessor<any, number>>('');
  const [value, setYasis] = useState<string | number | DatumPropertyAccessor<any, number>>('');
  const [dimensionData, setDimensions] = useState<IDimension[]>([]);
  const [randomDim1, setRandomDim1] = useState<string>('');
  const [randomDim2, setRandomDim2] = useState<string>('');

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<any[]>();
      setData(v);
      //set the properties
      setXasis(xAxis);
      setYasis(yAxis);
      const updatedArray = dimensions.map((item) => ({
        id: item.label,
        value: item.content,
      }));
      setDimensions(updatedArray);
      //to recheck
      if (dimensionData.length > 0) {
        const d1: string = dimensionData[Math.floor(Math.random() * dimensionData.length)].id;
        setRandomDim1(d1);
        const d2: string = dimensionData[Math.floor(Math.random() * dimensionData.length)].id;
        setRandomDim2(d2);
      }
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ResponsiveMarimekko
        data={data}
        id={id}
        value={value}
        dimensions={dimensionData}
        innerPadding={innerPadding}
        outerPadding={outerPadding}
        isInteractive={isInteractive}
        axisTop={null}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisRightLegend,
          legendOffset: 0,
          truncateTickAt: 0,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisBottomLegend,
          legendOffset: 36,
          legendPosition: legendPosition,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisLeftLegend,
          legendOffset: -40,
          legendPosition: legendPosition,
          truncateTickAt: 0,
        }}
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
                    id: randomDim1,
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: randomDim2,
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
