import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

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
  showLegend,
  showPattern,
  maxValue,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState([]);
  const [keys, setKeys] = useState<string[]>([]);
  const [index, setIndex] = useState<string>('');
  const [key1, setKey1] = useState<string>('');
  const [key2, setKey2] = useState<string>('');

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<any>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  useEffect(() => {
    if (value.length != 0) {
      const idAccessor = Object.keys(value[0])[0];
      setIndex(idAccessor);
      const dimensions = Object.keys(value[0]).filter((key) => key !== idAccessor);
      setKeys(dimensions);
    }
  }, [value]);

  useEffect(() => {
    if (keys.length > 1) {
      let d1: string;
      let d2: string;
      do {
        d1 = keys[Math.floor(Math.random() * keys.length)];
        d2 = keys[Math.floor(Math.random() * keys.length)];
      } while (d1 === d2);

      if (d1 && d2) {
        setKey1(d1);
        setKey2(d2);
      }
    }
  }, [keys]);

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <ResponsiveBar
        data={value}
        keys={keys}
        indexBy={index}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        innerPadding={innerPadding}
        padding={0.3}
        layout={layout}
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
                    id: key1,
                  },
                  id: 'lines',
                },
                {
                  match: {
                    id: key2,
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
