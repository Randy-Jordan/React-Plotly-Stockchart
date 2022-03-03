/* eslint-disable no-unused-vars */
import React, { useEffect} from 'react';
import Plot from 'react-plotly.js';
import { layout, config} from '../src/contstants/constants';
import { createTrace } from './utils/utils';
import useFetch from './hooks/useFetch';
import './Chart.css'

function Chart() {
  const [{ response, error, isLoading }, doFetch] = useFetch('./fakeJSON/timeseries.json');

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (response) {
    return (
        <>
        <h2>{response["Meta Data"]["2. Symbol"]}</h2>
        <main>
        <Plot
            data={[createTrace(response)]}
            layout={layout}
            config={config}
            divId="chart"
            style={{ display: 'grid', width: '100%'}}
            useResizeHandler
        />
      </main>
        </>
    );
  }

  return (<h2>Loading</h2>);
}
export default Chart;