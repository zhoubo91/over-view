const adapter = {
  line(data) {
    const { xAxis, yAxis, series, legend } = data;
    const seriesData = [];
    series.map(item => {
      const ele = {
        data: item.data,
        type: "line",
        smooth: true
      };
      seriesData.push(ele);
    });
    const option = {
      legend,
      xAxis: {
        type: "category",
        data: xAxis.data,
        axisLabel: {
          color: "rgba(255,255,255,.7)"
        }
      },
      color: ["#6195FF"],
      yAxis: {
        type: "value",
        name: yAxis.name,
        axisLabel: {
          color: "rgba(255,255,255,.7)"
        }
      },
      series: seriesData
    };
    console.log(option.yAxis);
    return option;
  }
};

// const adapter = new Adapter();

const getOption = function(value) {
  const { type, data } = value;
  // 适配器
  // 判断当前的适配器类型是否存在
  try {
    // eslint-disable-next-line no-prototype-builtins
    if (adapter.hasOwnProperty(type)) {
      console.log(adapter[type](data));
      return adapter[type](data);
    }
  } catch (error) {
    throw new Error("this type is not exit on Adapter");
  }
};

export { getOption };
