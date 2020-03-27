const res = {
  code: 0,
  data: [
    {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value",
        nameTextStyle: {
          color: "#fff"
        },
        axisLabel: {
          color: "rgba(255,255,255.7)"
        }
      },
      color: ["#6195FF"],
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          //   data: getYaxis(Ydata),
          type: "line",
          smooth: true,
          symbolSize: 4
        }
      ]
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
