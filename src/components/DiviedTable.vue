<template>
  <div class="diviedtable">
    <table>
      <colgroup>
        <col width="200" align="left" class="thead-col" />
        <col width="100" />
        <col width="100" />
        <col width="100" />
        <col width="100" />
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="(item, index) in thead"
            :key="item.id"
            :class="{ 'text-l': index === 0 }"
            class="text-c"
          >
            {{ item.value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in tableData"
          :key="index"
          :class="{
            'step-1': item.level === 1,
            'step-2': item.level === 2,
            'step-3': item.level === 3
          }"
        >
          <th>{{ item.title }}</th>
          <td v-for="(child, childIndex) in item.values" :key="childIndex">
            {{ child }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      thead: [
        {
          value: "指标/亿",
          id: 1
        },
        {
          value: "余额",
          id: 2
        },
        {
          value: "比上日",
          id: 3
        },
        {
          value: "比上月",
          id: 4
        },
        {
          value: "比年初",
          id: 5
        }
      ],
      tableData: [
        {
          title: "一般贷款",
          level: 1,
          values: [2000, 45, 45, 40]
        },
        {
          title: "零售贷款",
          level: 1,
          values: [2000, 45, 45, 40]
        },
        {
          title: "信用卡",
          level: 2,
          values: [2000, -45, -45, 40]
        },
        {
          title: "汽融",
          level: 2,
          values: [2000, -45, -45, 40]
        },
        {
          title: "消费金融",
          level: 2,
          values: [2000, -45, -45, 40]
        },
        {
          title: "新一贷",
          level: 3,
          values: [2000, -45, -45, 40]
        },
        {
          title: "住房按揭",
          level: 3,
          values: [2000, -45, -45, 40]
        },
        {
          title: "持证抵押",
          level: 2,
          values: [2000, -45, -45, 40]
        },
        {
          title: "公司贷款",
          level: 1,
          values: [2000, -45, -45, 40]
        }
      ]
    };
  }
};
</script>

<style lang="less">
.text-l {
  text-align: left;
}
.text-c {
  text-align: center;
}
.text-r {
  text-align: right;
}
</style>

<style lang="less" scoped>
.diviedtable {
  margin: 20px;
  background: #2e3036;
  border-radius: 20px;
  table {
    padding: 24px;
    padding-top: 50px;
    td {
      height: 66px;
      line-height: 66px;
      font-family: PingFangSC-Regular;
      font-size: 28px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: right;
    }
    .thead-col {
      text-align: left;
    }
    th {
      font-weight: normal;
    }
    thead {
      th {
        font-family: PingFangSC-Semibold;
        font-size: 28px;
        color: #8799be;
        letter-spacing: 0;
      }
    }
    tbody {
      th {
        color: #ffffff;
        text-align: left;
        font-size: 28px;
      }
      .step-1 {
        th,
        td {
          border-bottom: 4px solid #212228;
        }
      }
      .step-2 {
        opacity: 0.7;
        th {
          padding-left: 16px;
        }
        // th,
        // td {
        //   // border-bottom:2px solid #292929;
        // }
      }
      .step-3 {
        opacity: 0.7;
        th {
          padding-left: 32px;
        }
      }
    }
  }
}
</style>
