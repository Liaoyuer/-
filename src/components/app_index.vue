<template>
  <div>
    <!-- header -->
    <van-row>
      <van-col>
        <img class="logo" src="../assets/logo_img.png" />
      </van-col>
      <van-col>
        <van-search 
        class="index_header_search"
        placeholder="请输入搜索关键词" 
        v-model="search_v" />
      </van-col>
      <van-col>
        <div class="loginBtn">登录</div>
      </van-col>
    </van-row>
    <!-- 滚动的Tab按钮 -->
    <van-tabs style="margin:0 auto">
      <van-tab v-for="(item,index) in tabBtnList" :key="index" :title='item'>
        <!-- {{ item }} -->
      </van-tab>
    </van-tabs>
    <!-- 轮播图 -->
    <van-swipe class="lunbo" :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="(a,index) in imgObj" :key="index" >
        <img :src='a'/>
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播图下的广告 -->
    <van-row class="service_info">
      <van-col span="8">
        <i class="icon i1"></i>
        <span>网易自营品牌</span>
      </van-col>
      <van-col span="8">
        <i class="icon i2"></i>
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <i class="icon i3"></i>
        <span>48小时快速退款</span>
      </van-col>
    </van-row>
    <!-- grid宫格 -->
    <van-grid :column-num="5">
      <van-grid-item v-for='(n,idx) in goods_icon' :key='idx' >
        <img :src='n.imgurl' />
        <div>{{n.goods_txt}}</div>
      </van-grid-item>
    </van-grid>
    <!-- 商品列表 -->
    <div class="goodsListDiv">
      <h3>
        <label>新品首发</label>
        <a href="#">更多</a>
      </h3>
      <van-grid :center="false" :border="false" :column-num="3">
        <van-grid-item v-for='(n,idx) in goods_list' :key='idx' >
          <div class="goodsDiv">
          <img :src='n.imgurl' />
          </div>
          <div>{{n.text}}<span style="color:red;">{{n.price}}</span></div>
        </van-grid-item>
    </van-grid>
    <div style="height:.6rem; background-color:pink;font-size:.2rem; color:#fff; text-align:center;">
      footer div
    </div>
    </div>
    <!-- footer -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">识物</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">个人</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app_index',
  data () {
    return {
      search_v:'',
      tabBtnList:'',
      imgObj:[
        'https://yanxuan.nosdn.127.net/89255c0d98bdcec9a58a941acd71c186.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/7a8521b4fe3f7fe364a814f651787876.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/5c56187c3f37bfa548ddac3653458daf.jpg?imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/6c2e29432ee1dbefb2693c9824dd42ef.jpg?imageView&quality=75&thumbnail=750x0'
      ],
      active:0,
      goods_icon:[
        {
          imgurl:require('../assets/goods_icon/g1.png'),
          goods_txt:'新品首发'
        },{
          imgurl:require('../assets/goods_icon/g2.png'),
          goods_txt:'居家生活'
        },{
          imgurl:require('../assets/goods_icon/g3.png'),
          goods_txt:'服饰鞋包'
        },{
          imgurl:require('../assets/goods_icon/g4.png'),
          goods_txt:'美食酒水'
        },{
          imgurl:require('../assets/goods_icon/g5.png'),
          goods_txt:'个护清洁'
        },{
          imgurl:require('../assets/goods_icon/g6.png'),
          goods_txt:'母婴亲子'
        },{
          imgurl:require('../assets/goods_icon/g7.png'),
          goods_txt:'运动旅行'
        },{
          imgurl:require('../assets/goods_icon/g8.png'),
          goods_txt:'数码家电'
        },{
          imgurl:require('../assets/goods_icon/g9.png'),
          goods_txt:'全球特色'
        },{
          imgurl:require('../assets/goods_icon/g10.gif'),
          goods_txt:'超级会员'
        }
        
      ],
      goods_list:[
        {
          imgurl:require('../assets/goods_list/gl1.png'),
          text:'网易有道词典笔 2.0',
          price:'￥794',
          gradientPrice:1
        },{
          imgurl:require('../assets/goods_list/gl2.png'),
          text:'男式基础休闲裤',
          price:'￥99.9',
          gradientPrice:2
        },{
          imgurl:require('../assets/goods_list/gl3.png'),
          text:'男式舒软通勤商务正装鞋',
          price:'￥299',
          gradientPrice:3
        },{
          imgurl:require('../assets/goods_list/gl4.png'),
          text:'磁控双轨智能划船机',
          price:'￥1899',
          gradientPrice:0
        },{
          imgurl:require('../assets/goods_list/gl5.png'),
          text:'家用除湿机',
          price:'￥2788',
          gradientPrice:4
        },{
          imgurl:require('../assets/goods_list/gl6.png'),
          text:'黄油华夫饼1千克',
          price:'￥749',
          gradientPrice:0
        }
      ]
    }
  },
  created(){
    axios.get('http://localhost:5632/get_tabbtn_list')
    .then(_d=>{
      console.log(_d.data);
      this.tabBtnList=_d.data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  width: .7rem;
  display:inline-block;
  margin: .16rem 0 0 .04rem;
}
.index_header_search{
  width: 4.6rem;
  margin: .1rem 0 0 .1rem;
  
}
.van-search__content{
  background: #ededed;
  border-radius: .08rem;
  /* color: #666; */
}
.loginBtn{
  margin: .17rem 0 0 .1rem;
  width: .2rem;height: .12rem;
  line-height: .12rem;text-align: center;
  font-size: .06rem;border-radius: .04rem;
  color: #f00;
  border: 1px solid #f00;
}
.lunbo{
  margin: 0;padding: 0;
}
.service_info{
  text-align: center;
  height: .25rem;line-height: .25rem;
  font-size: 0.12rem;
  color: #333;
}
.service_info i.icon{
  display:inline-block;
  background: no-repeat;
  background-size:100% ;
  vertical-align: middle;
  width: .18rem;height: .18rem;
}
.service_info i.i1{
  background-image: url('../assets/i1.png');
}
.service_info i.i2{
  background-image: url('../assets/i2.png');
}
.service_info i.i3{
  background-image: url('../assets/i3.png');
}
.goodsListDiv{
  clear: both;
}
.goodsListDiv h3{
  display: block;clear: both;
  margin: 0 .2rem;
  height: .25rem;line-height: .25rem;
}
.goodsListDiv h3 label{
  float: left;font-size: .1rem;
}
.goodsListDiv h3 a{
  float: right;font-size: .08rem;
}
.goodsDiv{
  width: 100%;background: #f5f5f5;
}
</style>
