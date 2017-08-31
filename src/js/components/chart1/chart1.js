import React from 'react';
import createG2 from 'g2-react';
import G2 from 'g2';

class Chart1 extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const state = {
			data: [
        {'month':0,'tem':7,'city':'tokyo'},
        {'month':1,'tem':6.9,'city':'tokyo'},
        {'month':2,'tem':9.5,'city':'tokyo'},
        {'month':3,'tem':14.5,'city':'tokyo'},
        {'month':4,'tem':18.2,'city':'tokyo'},
        {'month':5,'tem':21.5,'city':'tokyo'},
        {'month':6,'tem':25.2,'city':'tokyo'},
        {'month':7,'tem':26.5,'city':'tokyo'},
        {'month':8,'tem':23.3,'city':'tokyo'},
        {'month':9,'tem':18.3,'city':'tokyo'},
        {'month':10,'tem':13.9,'city':'tokyo'},
        {'month':11,'tem':9.6,'city':'tokyo'},
        {'month':0,'tem':-0.2,'city':'newYork'},
        {'month':1,'tem':0.8,'city':'newYork'},
        {'month':2,'tem':5.7,'city':'newYork'},
        {'month':3,'tem':11.3,'city':'newYork'},
        {'month':4,'tem':17,'city':'newYork'},
        {'month':5,'tem':22,'city':'newYork'},
        {'month':6,'tem':24.8,'city':'newYork'},
        {'month':7,'tem':24.1,'city':'newYork'},
        {'month':8,'tem':20.1,'city':'newYork'},
        {'month':9,'tem':14.1,'city':'newYork'},
        {'month':10,'tem':8.6,'city':'newYork'},
        {'month':11,'tem':2.5,'city':'newYork'},
        {'month':0,'tem':-0.9,'city':'berlin'},
        {'month':1,'tem':0.6,'city':'berlin'},
        {'month':2,'tem':3.5,'city':'berlin'},
        {'month':3,'tem':8.4,'city':'berlin'},
        {'month':4,'tem':13.5,'city':'berlin'},
        {'month':5,'tem':17,'city':'berlin'},
        {'month':6,'tem':18.6,'city':'berlin'},
        {'month':7,'tem':17.9,'city':'berlin'},
        {'month':8,'tem':14.3,'city':'berlin'},
        {'month':9,'tem':9,'city':'berlin'},
        {'month':10,'tem':3.9,'city':'berlin'},
        {'month':11,'tem':1,'city':'berlin'},
        {'month':0,'tem':7,'city':'beijing'},
        {'month':1,'tem':6.9,'city':'beijing'},
        {'month':2,'tem':9.5,'city':'beijing'},
        {'month':3,'tem':18.5,'city':'beijing'},
        {'month':4,'tem':20.2,'city':'beijing'},
        {'month':5,'tem':28.5,'city':'beijing'},
        {'month':6,'tem':30.2,'city':'beijing'},
        {'month':7,'tem':35.5,'city':'beijing'},
        {'month':8,'tem':29.3,'city':'beijing'},
        {'month':9,'tem':20.3,'city':'beijing'},
        {'month':10,'tem':18.9,'city':'beijing'},
        {'month':11,'tem':10.6,'city':'beijing'},
      ],
      forceFit: true,
      width: 450,
      height: 450,
      plotCfg: {
        margin: [60,100,60,80]
      },
		};
		const Chart = createG2(chart => {
      chart.col('month', {
        type: 'cat',
        values: [
          '一月','二月','三月','四月','五月','六月',
          '七月','八月','九月','十月','十一月','十二月']
      });
      chart.tooltip(true, {
        custom: true, // 使用自定义的 tooltip
        offset: 50
      });
      chart.line().position('month*tem').color('city');
      chart.render();
    });
		return (
			<div className='chart'>
				<div className='chart-title'>
					图表1
				</div>
				<div className='chart-body'>
            <Chart
              data={state.data}
              width={state.width}
              height={state.height}
              plotCfg={state.plotCfg}
              forceFit={state.forceFit} />
				</div>
			</div>
		);
	}
}

export default Chart1;