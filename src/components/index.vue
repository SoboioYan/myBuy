<template>
    <div class="index">
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item, index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(itemSon, i) in item.subcates" :key="itemSon.id">
                                                {{itemSon.title}}&nbsp;
                                            </span>

                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a v-for="(itemSon, i) in item.subcates" :key="itemSon.id" href="/goods/43.html">{{itemSon.title}}</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <el-carousel height="341px">
                            <el-carousel-item v-for="(item, index) in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | cutTime }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in goodlist" :key="item.level1cateid">
                <div class="main-tit">
                    <h2>{{item.catetitle}}</h2>
                    <p>
                        <a href="/goods/43.html" v-for="(itemSon, i) in item.level2catelist" >{{itemSon.subcatetitle}}</a>
                        <a href="/goods/40.html">更多
                            <i>+</i>
                        </a>
                    </p>
                </div>
                <div class="wrapper clearfix">
                    <div class="wrap-box">
                        <ul class="img-list">
                            <li v-for="(itemSon, i) in item.datas" :key="itemSon.artID">
                                 <router-link :to="'/goodsInfo/'+itemSon.artID">
                                    <div class="img-box">
                                        <img v-lazy="itemSon.img_url">
                                    </div>
                                    <div class="info">
                                        <h3>{{itemSon.artTitle}}</h3>
                                        <p class="price">
                                            <b>{{itemSon.sell_price}}</b>元</p>
                                        <p>
                                            <strong>库存 {{itemSon.stock_quantity}}</strong>
                                            <span>市场价：
                                                <s>{{itemSon.market_price}}</s>
                                            </span>
                                        </p>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
    export default {
        // 数据
        data: function () {
            return {
                catelist: [],
                sliderlist: [],
                toplist: [],
                goodlist: []
            }
        },

        beforeMount() {
            this.axios.get('/site/goods/gettopdata/goods')
                .then((response) => {
                    // console.log(response);
                    this.catelist = response.data.message.catelist;
                    this.sliderlist = response.data.message.sliderlist;
                    this.toplist = response.data.message.toplist;
                    // console.log(this);
                })
                .catch(response => {})
            // 获取底部的商品列表数据
            this.axios.get(`http://47.106.148.205:8899/site/goods/getgoodsgroup`)
                .then((response) => {
                    console.log(response);
                    this.goodlist = response.data.message;
                    console.log(this.goodlist);
                })
                .catch(response => {

                })
        },
        mounted() {

        },
    }
</script>
<style scoped>
.el-carousel img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>