class Adapter {
  line(data) {
    const { xAxis, yAxis, series } = data;
    const seriesData = [];
    series.map(item => {
      const ele = {
        data: item,
        type: "line",
        smooth: true
      };
      seriesData.push(ele);
    });
    const option = {
      xAxis: {
        type: "category",
        data: xAxis.data,
        axisLabel: {
          color: "rgba(255,255,255.7)"
        }
      },
      color: ["#6195FF"],

      yAxis: {
        type: "value",
        name: yAxis.name,
        axisLabel: {
          color: "rgba(255,255,255.7)"
        }
      },
      series: seriesData
    };
    return option;
  }
}

const adapter = new Adapter()

const getOption = function(value) {
    const { type, data } = value;
    // 适配器
    return adapter()
    
};

export getOption