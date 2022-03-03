 export const config = {
    responsive: true,
    displayModeBar: false,

  }

  export const layout = {
    autosize: true,
    showlegend: false,
    dragmode: 'zoom', 

    margin: {
      r: 10, 
      t: 0, 
      b: 40, 
      l: 40
    }, 
     
    
    xaxis: {
      autorange: true, 
      rangeslider: {visible:false}, 
      title: 'Date', 
      type: 'date'
    }, 
  
    yaxis: {
      autorange: true, 
      type: 'linear',
      tickformat: '$'
    }
  
  };