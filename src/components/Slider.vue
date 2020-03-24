<template>
  <div class="slider">
    <div class="content">
      <ul>
        <li v-for="item in list" :key='item.id'>
          <h4 class="title">{{item.title}}</h4>
          <div class="main">
            {{item.content.value}}
            <span class="small"> {{item.content.unit}}</span>
          </div>
          <div class="desc">
            <div class="item" v-for="(i,index) in  item.describe" :key='index'>
              <span>{{i.des}}</span>
              <span class="icon" :class="{'up':i.status===1,'down':i.status ===0}">{{i.unit}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="bootom">更新时间：{{updatetime}}</div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data(){
    return {
      list:[{
        id:1,
        title:'一般贷款',
        content:{
          value:'2000',
          unit:'亿'
        }  ,
        describe:[{
          des:'比上日',
          unit:'100亿',
          status:0
        },{
          des:'比上月',
          unit:'100亿',
          status:0
        },{
          des:'比年初',
          unit:'100亿',
          status:1
        },]
      },{
        id:2,
        title:'一般贷款',
        content:{
          value:'1204',
          unit:'亿'
        }  ,
        describe:[{
          des:'比上日',
          unit:'100亿',
          status:0
        },{
          des:'比上月',
          unit:'100亿',
          status:1
        },{
          des:'比年初',
          unit:'100亿',
          status:0
        },]
      }],
      updatetime:'2020-03-11'
    }
  },

}
</script>

<style lang='less'>
.small{
  font-size: 30px;
}
.slider{
  display: flex;
  height: 510px;
  padding: 50px 0 40px;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.8);
  margin: 20px;
  background: #2E3036;
  border-radius: 20px;
  .content{
    flex: 1;
    ul{
      display: flex;
      li{
        flex: 1;
        align-items: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        h4.title{
          opacity: 0.8;
          font-family: PingFangSC-Regular;
          font-size: 28px;
          color: #FFFFFF;
          letter-spacing: 0;
          height: 40px;
          line-height: 40px;
        }
        .main{
          height: 100px;
          line-height: 100px;
          margin-top: 36px;
          font-family: BebasNeue;
          font-size: 84px;
          color: #6195FF;
          letter-spacing: -0.22px;
          text-align: justify;
        }
        .desc{
          .item{
            height:38px ;
            line-height: 38px;
            margin: 32px 0;
            .up{
              color: #F73563;
            }
            .down{
              color: #0DCD87 ;
            }
            .icon{
              margin-left: 40px;
            }
          }
        }
      }
    }
  }
}
</style>