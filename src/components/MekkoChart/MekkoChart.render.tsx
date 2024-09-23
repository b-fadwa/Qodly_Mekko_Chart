import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { DatumPropertyAccessor, ResponsiveMarimekko } from '@nivo/marimekko';
import { IDimension, IMekkoChartProps } from './MekkoChart.config';

const MekkoChart: FC<IMekkoChartProps> = ({
  layout,
  offset,
  innerPadding,
  outerPadding,
  isInteractive,
  colorScheme,
  showPatternUse,
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
  const [loaded, setLoaded] = useState<boolean>(false);

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<any[]>();
      setData(v);
      setLoaded(true);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  //setting the id/value accessors + dimensions dynamically
  useEffect(() => {
    if (data.length != 0 && loaded) {
      const idAccessor = Object.keys(data[0])[0];
      const valueAccessor = Object.keys(data[0])[1];
      const dimensions = Object.keys(data[0]).filter(
        (key) => key !== idAccessor && key !== valueAccessor,
      );
      const updatedArray = dimensions.map((item) => ({
        id: item,
        value: item,
      }));
      if (idAccessor && valueAccessor) {
        setXasis(idAccessor);
        setYasis(valueAccessor);
      }
      setDimensions(updatedArray);
    }
  }, [loaded]);

  //getting a random pair of dimensions for the pattern visibility
  useEffect(() => {
    if (dimensionData.length > 1) {
      let d1: string;
      let d2: string;
      do {
        d1 = dimensionData[Math.floor(Math.random() * dimensionData.length)].id;
        d2 = dimensionData[Math.floor(Math.random() * dimensionData.length)].id;
      } while (d1 === d2);

      if (d1 && d2) {
        setRandomDim1(d1);
        setRandomDim2(d2);
      }
    }
  }, [dimensionData]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ResponsiveMarimekko
        data={data}
        id={id}
        value={value}
        dimensions={dimensionData}
        enableGridX={true}
        gridYValues={[]}
        enableGridY={true}
        gridXValues={[]}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          truncateTickAt: 0,
        }}
        innerPadding={innerPadding}
        outerPadding={outerPadding}
        isInteractive={isInteractive}
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
