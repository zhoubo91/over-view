const data = {
  // type pie：饼图，line: 折线图
  type: "line",
  // 当前图例出现多条折线图的时候
  legend: {
    data: ["存款", "贷款"]
  },
  // X轴配置数据
  xAxis: {
    // X 轴单位
    name: "亿",
    // X轴单位数据
    data: [
      "0301",
      "0302",
      "0303",
      "0304",
      "0305",
      "0306",
      "0307",
      "0308",
      "0309",
      "0310",
      "0311",
      "0312",
      "0313",
      "0314",
      "0315",
      "0316",
      "0317",
      "0318",
      "0319",
      "0320"
    ]
  },
  yAxis: {
    name: "亿元" // Y轴单位
  },
  series: [
    {
      // 数据对应字段
      name: "存款",
      // Y 轴数据
      // 如果是饼图，保证对应数据的顺序和xAxis 的data里面的数据顺序对应上，前端自己格式化
      data: [
        245,
        246,
        356,
        672,
        782,
        907,
        638,
        240,
        263,
        649,
        462,
        739,
        651,
        537,
        253,
        566,
        463,
        628,
        634,
        357
      ]
    },
    {
      // 数据对应字段
      name: "贷款",
      // Y 轴数据
      // 如果是饼图，保证对应数据的顺序和xAxis 的data里面的数据顺序对应上，前端自己格式化
      data: [
        245,
        246,
        356,
        672,
        782,
        907,
        638,
        240,
        263,
        649,
        462,
        739,
        651,
        537,
        253,
        566,
        463,
        628,
        634,
        357
      ]
    }
  ]
};

const res = {
  code: 0,
  data: [
    {
      type: "line",
      data: {
        xAxis: {
          type: "category",
          data: data.xAxis.data,
          axisLabel: {
            color: "rgba(255,255,255.7)"
          }
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#fff"
          },
          name: data.series.name,
          axisLabel: {
            color: "rgba(255,255,255.7)"
          }
        },
        color: ["#6195FF"],
        series: [
          {
            data: data.series[0],
            //   data: getYaxis(Ydata),
            type: "line",
            smooth: true,
            symbolSize: 4
          },
          {
            data: data.series[1],
            //   data: getYaxis(Ydata),
            type: "line",
            smooth: true,
            symbolSize: 4
          }
        ]
      }
    },
    {
      type: "pie",
      data: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "55%",
            center: ["40%", "50%"],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    },
    {
      type: "diviedtable",
      data: {}
    }

    // {
    //   title: {
    //     text: "同名数量统计",
    //     subtext: "纯属虚构",
    //     left: "center"
    //   },
    //   tooltip: {
    //     trigger: "item",
    //     formatter: "{a} <br/>{b} : {c} ({d}%)"
    //   },
    //   legend: {
    //     type: "scroll",
    //     orient: "vertical",
    //     right: 10,
    //     top: 20,
    //     bottom: 20
    //   },
    //   series: [
    //     {
    //       name: "姓名",
    //       type: "pie",
    //       radius: "55%",
    //       center: ["40%", "50%"],
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: "rgba(0, 0, 0, 0.5)"
    //         }
    //       }
    //     }
    //   ]
    // }
  ]
};
/**
 * @description 返回默认的最大值和最小值，并五等分
 * @param {*} data
 */
function getYaxis(data) {
  const min = Math.max.apply(null, data);
  const max = Math.min.apply(null, data);
  const step = (max - min) / 5;
  const result = [];
  for (let index = 0; index < 5; index++) {
    const ele = min + index * step;
    result.push(ele);
  }
  return result;
}

const Ydata = [243.5, 231.6, 678.6, 298.6, 510.5, 390.1];
console.log(getYaxis(Ydata));

export default res;
