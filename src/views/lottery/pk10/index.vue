<template>
  <div class="w1000-center k3">
    <div class="betTitle clearf">
      <div class="betLogo">
        <h2>{{pageAllData[routerId].name}}</h2>
        <i class="iconfont icon-xuan"></i>
      </div>
      <div class="time">
        <div class="timeTitle" style="opacity: 1;">
          距
          <b>{{period}}</b>
          期投注截止还有：
        </div>
        <em>00:07:57</em>
      </div>
      <div class="announced" id="Results">
        <div class="announcedTitle">
          第
          <b>{{period - 1}}</b>
          期开奖号码：
        </div>
        <ul class="announcedNo clearf" style="display: none;">
          <img src="//imagess-google.com/system/pc/k3/open_num.gif" width="61" height="71">
          <img src="//imagess-google.com/system/pc/k3/open_num.gif" width="61" height="71">
          <img src="//imagess-google.com/system/pc/k3/open_num.gif" width="61" height="71">
        </ul>
        <ul class="announcedNo clearf">
          <li class="announcedNo4"></li>
          <li class="announcedNo5"></li>
          <li class="announcedNo6"></li>
        </ul>
        <ul class="announcedNo announcedNoText clearf" style="display: none">
          <li class="announcedNo4">4</li>
          <li class="announcedNo5">5</li>
          <li class="announcedNo6">6</li>
        </ul>
      </div>
    </div>
    <div class="betContent clearf">
      <div class="betLeft">
        <div>
          <div class="betNavCon">
            <ul class="betNav clearf" style="width: 1232px;" :style="{ transform: `translateX(${navNum}px)`}">
              <li v-for="(item, index) in navItems" :class="{active: +routerId === index}" @click="togglePageId(index)">
                {{item}}
              </li>
            </ul>
          </div>
          <a class="betNavtab left" @click="toLeft">
            <span>
              <em></em>
            </span>
          </a>
          <a class="betNavtab right" @click="toRight">
            <span>
              <em></em>
            </span>
          </a>
        </div>
        <div>
          <playSortMore @playBoardType="playBoardType" :tagToPlayMap="tagToPlayMap" v-show="true" @tagSelected="tagSelected" v-model="playBoardData"></playSortMore>
          <div>
            <!--<ul class="betFilter">-->
            <!--<li v-for="(item, index) in playItems" :class="{curr: currentPlayIndex === index}"-->
            <!--@click="filterPlay(index)">{{item}}-->
            <!--</li>-->
            <!--</ul>-->
            <!--<ul class="betFilterAnd">-->
            <!--<li>-->
            <!--<span>{{currentPlayDetial}}</span>-->
            <!--<div>-->
            <!--&lt;!&ndash;之前的&ndash;&gt;-->
            <!--&lt;!&ndash;<a v-for="(item, index) in playDetials[currentPlayIndex]" @click="filterDetailPlay(item)">{{item}}</a>&ndash;&gt;-->
            <!--&lt;!&ndash;现在的&ndash;&gt;-->
            <!--<a v-for="(item, index) in playDetials" @click="filterDetailPlay(item)" :class="{curr: currentPlayName === item}">{{item}}</a>-->
            <!--</div>-->
            <!--</li>-->
            <!--</ul>-->
            <div class="betTip">
              <i class="iconfont icon-zhuyi"></i>
              {{betTips[this.currentPlayIndex]}}
            </div>
          </div>
          <!--十一选五组件-->
          <div class="sscCheckNumber">
            <playBoard ref="playBoard" @playBoardType="playBoardType" :playBoardData="playBoardData" v-model="selectedNumberData" @change="selectedNumberDataMethod"></playBoard>
            <!--<ul>-->
            <!--<li>-->
            <!--<div class="clearf selectSYX5" v-for="(item, index1) in checkNumberItems" :key="item.title">-->
            <!--<span class="buyNumberTitle">-->
            <!--{{item.title}}-->
            <!--<i></i>-->
            <!--</span>-->
            <!--<div class="buyNumber clearf">-->
            <!--&lt;!&ndash;<a v-for="(item, index) in 11">{{item < 10 ? '0' + item : item}}</a>&ndash;&gt;-->
            <!--<a v-for="(list, index2) in item.numberArr" :key="index2" :class="{curr: item.mulActive[index2]}"-->
            <!--@click="toggleSelected(item, index2)">{{list}}</a>-->
            <!--</div>-->
            <!--<div class="buyNumberFilter">-->
            <!--<a href="javascript:;" @click="selectAll(item)">全</a>-->
            <!--<a href="javascript:;" @click="selectBig(item)">大</a>-->
            <!--<a href="javascript:;" @click="selectLittle(item)">小</a>-->
            <!--<a href="javascript:;" @click="selectOdd(item)">奇</a>-->
            <!--<a href="javascript:;" @click="selectEven(item)">偶</a>-->
            <!--<a href="javascript:;" @click="selectClear(item)">清</a>-->
            <!--</div>-->
            <!--</div>-->
            <!--</li>-->
            <!--</ul>-->
          </div>
          <!--十一选五组件-->
          <div class="Panel">
            <p class="betTotal">
              您选择了
              <em>{{this.selectedInfo.bittingNumber || 0}}</em>
              注,
              <em class="inputAdd clearf">
                <i :class="{off: this.inputValue === 1}" @click="reduceInputValue">-</i>
                <input type="text" v-model="inputValue">
                <i style="float:right;" @click="addInputValue">+</i>
              </em>
              倍
              <select name="" id="" v-model="YJF">
                <option value="1">元</option>
                <option value="0.1">角</option>
                <option value="0.01">分</option>
              </select>
              共
              <!--<i>{{qrxhData.total}}.00</i>-->
              <!--<i>{{qrxhDataTotal}}.00</i>-->
              <i>{{this.selectedInfo.bittingNumber * inputValue * 2 * YJF|| 0}}</i>
              元
            </p>
            <!--<a class="betBtn ClickShade" @click="confirm">确认选号</a>-->
            <a class="betBtn ClickShade" @click="addDataToBox">确认选号</a>
          </div>
          <numberBox></numberBox>
          <!--<div class="checkedList">-->
          <!--&lt;!&ndash;这块准备自写组件，不按他的来&ndash;&gt;-->
          <!--<bat-item :propsData="propsData" @delPropsData="delPropsData"></bat-item>-->
          <!--</div>-->
          <!--<div class="Bet">-->
          <!--<p class="betTotal">-->
          <!--方案注数-->
          <!--<em>{{betNum}}</em>-->
          <!--注，金额-->
          <!--<i class="money">{{betMoneyTotal}}</i>-->
          <!--元-->
          <!--</p>-->
          <!--<a class="betBtn ClickShade">马上投注</a>-->
          <!--</div>-->
        </div>
      </div>
      <div class="betRight">
        <div class="today box">
          <h3>今日开奖</h3>
          <div class="more">
            <a href="javascript:;">玩法说明</a>
          </div>
          <div class="ResultsList">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" id="fn_getoPenGame"
                   class="ty_table_gameBet curr">
              <tbody>
              <tr>
                <th scope="col">期号</th>
                <th scope="col">开奖号</th>
                <th scope="col">开奖时间</th>
                <!--<th scope="col">形态</th>-->
              </tr>
              </tbody>
              <tbody>
              <tr v-for="(item, index) in todayResultList">
                <td class="c_green">
                  <i>{{item.codeName}}</i>
                </td>
                <td>
                  <i>{{item.winningNumbers}}</i>
                </td>
                <td>{{item.addValue}}</td>
                <!--<td>-->
                <!--<em :class="item.class1[0]">{{item.class1[1]}}</em>-->
                <!--<em :class="item.class2[0]">{{item.class2[1]}}</em>-->
                <!--</td>-->
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mybet box">
          <h3>我的投注</h3>
          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="_mybetContent">
            <tbody>
            <tr>
              <th>期号</th>
              <th>投注金额</th>
              <th>奖金</th>
            </tr>
            <tr v-for="(item, index) in 4">
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
          <div class="more">
            <a href="">更多>></a>
          </div>
        </div>
        <div class="winningList box">
          <h3>中奖信息</h3>
          <h3 class="notSelect">昨日盈利榜</h3>
          <div id="Ranking" class="winnerListSlide" style="width: 100%; box-sizing: content-box">
            <div id="lotteryInfo" style="width: 100%;">
              <div class="winner-title">中奖信息实时更新</div>
              <div class="bd">
                <div class="tempWrap" style="overflow: hidden; height: 510px;">
                  <ul class="winnerList" style="cursor: pointer; transition: all 0.3s linear 0s; position: relative"
                      :style="{top: topNumPx}">
                    <li v-for="(item, idnex) in rankingLists">
                      <img :src="item.url" alt="">
                      <p class="color">
                        {{item.info}}
                        <br>
                        喜中
                        <span>{{item.num}}</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="moneyList" style="width: 100%; display: none;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BatItem from './batItem'
  import { tagToPlayMapPK10 as tagToPlayMap} from '../components/tagToPlayMapPK10'
  import playMethodsSyx5 from '../../../api/playMethodsSyx5'
  import playSortMore from '../components/playSortMore'
  import playBoard from '../components/playBoard'
  import numberBox from '../components/numberBox'
  import playMethods from '../../../utils/playMethodsPk10'

  export default {
    data() {
      return {
        tagToPlayMap: tagToPlayMap, //映射关系
        playBoardData: [], //选中的面板数据
        tagSelectedData: [], //选中的标签
        selectedNumberData: [], //选中的号码
        selectedInfo: {},
        playBoardTypeValue: '',//页面是选择||输入
        choseType: 1,
        startTime: new Date().getTime() - 999,
        endTime: new Date().getTime(),
        currentTime: new Date().getTime(),
        period: 1, //当前期号
        checkedList: [],
        betTopDetailShow: false,
        betTopDetailSelected: 1,
        arae: [],
        areaShow: false,
        araeSelected: '',
        YJF: 1,

        money: 1930.5,
        qrxhData: {
          num: 0,
          total: 0,
          selectNumArr: []
        },
        selectedInfo: {},
        currentPlayDetial: '', //当前玩法的细分玩法
        playDetials: [
          // ['前三直选复式', '前三直选单式', '前三组选复式', '前三组选复式', '前三组选胆拖'],
          // ['前二直选复式', '前二直选单式', '前二组选复式', '前二组选复式', '前二组选胆拖'],
          // ['前三一码不定位'],
          // ['复式'],
          // ['定单双', '猜中位'],
          // ['一中一', '二中二', '三中三', '四中四', '五中五', '六中五', '七中五', '八中五'],
          // ['一中一', '二中二', '三中三', '四中四', '五中五', '六中五', '七中五', '八中五'],
          // ['二中二', '三中三', '四中四', '五中五', '六中五', '七中五', '八中五']
        ], // 所有玩法的细分玩法
        filterPlayArr: [2, 3, 5, 6, 7], //用来决定什么时候显示确认选号模块，及区分点击添加数据还是确认选号后添加
        routerId: '',
        pageAllData: [
          {
            name: '北京PK10',
          },
          {
            name: '大发PK10',
          },
        ],
        navNum: 0,
        period: '116389', //期号
        navItems: ['北京PK10', '大发PK10',], // 导航菜单
        playItems: ['三码', '二码', '不定位', '定位胆', '趣味型', '任选复式', '任选单式', '任选胆拖'],
        betTips: ['猜3个开奖号相加的和，3-10为小，11-18为大。赔率1.95-189.00倍。', '对所有相同的三个号码(111、222、333、444、555、666)进行投注，任意号码开出，即为中奖。赔率31.50倍。', '对相同的三个号码(111、222、333、444、555、666)中的任意一个或多个进行投注，所选号码开出，即为中奖。赔率189.00倍。', '从1-6中任选3个或多个号码,所选号码与开奖号码的3个号码相同,即为中奖。赔率31.50倍。', '对所有的3个相连号码(123、234、345、456)进行投注，任意号码开出，即为中奖。赔率7.87倍。', '从11-66中任选1个或多个号码，选号与奖号(包含11-66，不限顺序)相同，即为中奖（不含豹子）。赔率12.60倍。', '选择1对相同号码和1个不同号码投注，选号与奖号相同，即为中奖。赔率63.00倍。', '从1-6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即为中奖。赔率6.30倍。'],
        currentPlayIndex: 0, //当前玩法
        currentPlayName: '前三直选复式', // 当前玩法对应的名字
        playCheckNumbers: [], // 当前玩法对应的最终号码
        playNumberData: [
          {
            playCheckNumber: [
              {
                num: 3,
                odds: '189.00',
                play: '和值',
                selected: false
              },
              {
                num: 4,
                odds: '63.00',
                play: '和值',
                selected: false
              },
              {
                num: 5,
                odds: '31.50',
                play: '和值',
                selected: false
              },
              {
                num: 6,
                odds: '18.90',
                play: '和值',
                selected: false
              },
              {
                num: 7,
                odds: '12.60',
                play: '和值',
                selected: false
              },
              {
                num: 8,
                odds: '9.00',
                play: '和值',
                selected: false
              },
              {
                num: 9,
                odds: '7.56',
                play: '和值',
                selected: false
              },
              {
                num: 10,
                odds: '7.00',
                play: '和值',
                selected: false
              },
              {
                num: 11,
                odds: '7.00',
                play: '和值',
                selected: false
              },
              {
                num: 12,
                odds: '7.56',
                play: '和值',
                selected: false
              },
              {
                num: 13,
                odds: '9.00',
                play: '和值',
                selected: false
              },
              {
                num: 14,
                odds: '12.60',
                play: '和值',
                selected: false
              },
              {
                num: 15,
                odds: '18.90',
                play: '和值',
                selected: false
              },
              {
                num: 16,
                odds: '31.50',
                play: '和值',
                selected: false
              },
              {
                num: 17,
                odds: '63.00',
                play: '和值',
                selected: false
              },
              {
                num: 18,
                odds: '189.00',
                play: '和值',
                selected: false
              },
              {
                num: '大',
                odds: '1.95',
                play: '和值',
                selected: false
              },
              {
                num: '小',
                odds: '1.95',
                play: '和值',
                selected: false
              },
              {
                num: '单',
                odds: '1.95',
                play: '和值',
                selected: false
              },
              {
                num: '双',
                odds: '1.95',
                play: '和值',
                selected: false
              }
            ],
          },
          {
            playCheckNumber: [
              {
                num: '三同号通选',
                odds: '31.50',
                play: '三同号通选',
                selected: false
              }
            ],
          },
          {
            playCheckNumber: [
              {
                num: '111',
                odds: '189.00',
                play: '三同号单选',
                selected: false
              },
              {
                num: '222',
                odds: '189.00',
                play: '三同号单选',
                selected: false
              },
              {
                num: '333',
                odds: '189.00',
                play: '三同号单选',
                selected: false
              },
              {
                num: '444',
                odds: '189.00',
                play: '三同号单选',
                selected: false
              },
              {
                num: '555',
                odds: '189.00',
                play: '三同号单选',
                selected: false
              },
              {
                num: '666',
                odds: '189.00',
                play: '三同号单选',
                selected: false
              },
            ],
          },
          {
            playCheckNumber: [
              {
                num: '1',
                odds: '31.50',
                play: '三不同号',
                selected: false
              },
              {
                num: '2',
                odds: '31.50',
                play: '三不同号',
                selected: false
              },
              {
                num: '3',
                odds: '31.50',
                play: '三不同号',
                selected: false
              },
              {
                num: '4',
                odds: '31.50',
                play: '三不同号',
                selected: false
              },
              {
                num: '5',
                odds: '31.50',
                play: '三不同号',
                selected: false
              },
              {
                num: '6',
                odds: '31.50',
                play: '三不同号',
                selected: false
              },
            ],
          },
          {
            playCheckNumber: [
              {
                num: '三连号通选',
                odds: '7.87',
                play: '三连号通选',
                selected: false
              }
            ],
          },
          {
            playCheckNumber: [
              {
                num: '11',
                odds: '12.60',
                play: '二同号复选',
                selected: false
              },
              {
                num: '22',
                odds: '12.60',
                play: '二同号复选',
                selected: false
              },
              {
                num: '33',
                odds: '12.60',
                play: '二同号复选',
                selected: false
              },
              {
                num: '44',
                odds: '12.60',
                play: '二同号复选',
                selected: false
              },
              {
                num: '55',
                odds: '12.60',
                play: '二同号复选',
                selected: false
              },
              {
                num: '66',
                odds: '12.60',
                play: '二同号复选',
                selected: false
              }
            ],
          },
          {
            playCheckNumber: [
              {
                num: '11',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '22',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '33',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '44',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '55',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '66',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '1',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '2',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '3',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '4',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '5',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
              {
                num: '6',
                odds: '63.00',
                play: '二同号单选',
                selected: false
              },
            ],
          },
          {
            playCheckNumber: [
              {
                num: '1',
                odds: '6.30',
                play: '二不同号',
                selected: false
              },
              {
                num: '2',
                odds: '6.30',
                play: '二不同号',
                selected: false
              },
              {
                num: '3',
                odds: '6.30',
                play: '二不同号',
                selected: false
              },
              {
                num: '4',
                odds: '6.30',
                play: '二不同号',
                selected: false
              },
              {
                num: '5',
                odds: '6.30',
                play: '二不同号',
                selected: false
              },
              {
                num: '6',
                odds: '6.30',
                play: '二不同号',
                selected: false
              },
            ],
          }
        ],
        betNum: 0, // 投注
        betMoneyTotal: 0, // 总钱数
        todayResultList: [
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          },
          {
            codeName: '116481',
            winningNumbers: '1,2,3',
            addValue: '20:11:14',
            class1: ['xiao', '小'],
            class2: ['shuang', '双']
          }
        ],
        topNumPx: '0px', // 右侧中奖信息ul顶部距离
        rankingLists: [
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
          {
            url: '//imagess-google.com/system/common/headimg/A9734CC321C8B363.jpg',
            info: '哏哈 在UU快三',
            num: '547.12'
          },
        ],
        propsData: [], // 传给batItem子组件的数据
        submitLotteryData: [], //最终的投注数据
        // initNumData: [], //初始保存的数据
        checkNumberItems: [
          // {
          //   title: '第一位',
          //   numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          //   mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
          // },
          // {
          //   title: '第二位',
          //   numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          //   mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
          // },
          // {
          //   title: '第三位',
          //   numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          //   mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
          // }
        ],
        jsonData: [
          {
            tag: '三码',
            checked: true,
            play: [
              {
                value: '前三直选复式',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第二位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第三位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  }
                ]
              },
              {
                value: '前三直选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前三组选复式',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '前三组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前三组选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '前三组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              // {
              //   value: '前三组选胆拖',
              //   checked: false,
              //   type: 'input',
              //   detailContent: [
              //     {
              //       title: '第一位',
              //       numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              //       mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
              //     },
              //   ]
              // }
            ]
          },
          {
            tag: '二码',
            checked: false,
            play: [
              {
                value: '前二直选复式',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第二位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前二直选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前二组选复式',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '前二组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前二组选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '前二组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              // {
              //   value: '前三组选胆拖',
              //   checked: false,
              //   type: 'input',
              //   detailContent: [
              //     {
              //       title: '第一位',
              //       numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              //       mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
              //     },
              //   ]
              // }
            ]
          },

          {
            tag: '不定位',
            checked: false,
            play: [
              {
                value: '前三一码不定位',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '不定位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  }
                ]
              },
            ]
          },
          {
            tag: '定位胆',
            checked: false,
            play: [
              {
                value: '复式',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第二位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第三位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              // {
              //   value: '前三组选胆拖',
              //   checked: false,
              //   type: 'input',
              //   detailContent: [
              //     {
              //       title: '第一位',
              //       numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              //       mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
              //     },
              //   ]
              // }
            ]
          },
          {
            tag: '趣味型',
            checked: false,
            play: [
              {
                value: '定单双',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '定单双',
                    numberArr: ['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'],
                    mulActive: [false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '猜中位',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '猜中位',
                    numberArr: ['03', '04', '05', '06', '07', '08', '09'],
                    mulActive: [false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
            ]
          },
          {
            tag: '任选复式',
            checked: true,
            play: [
              {
                value: '一中一',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '选一中一',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '二中二',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选二中二',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '三中三',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选三中三',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '四中四',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选四中四',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '五中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选五中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '六中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选六中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '七中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选七中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '八中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选八中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
            ]
          },
          {
            tag: '任选单式',
            checked: false,
            play: [
              {
                value: '一中一',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '选一中一',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '二中二',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '二中二',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '三中三',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '三中三',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '四中四',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '四中四',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '五中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '五中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '六中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '六中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '七中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '七中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '八中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '八中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
            ]
          },
        ], // 不改变
        detailJsonData: [
          {
            tag: '三码',
            checked: true,
            play: [
              {
                value: '前三直选复式',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第二位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第三位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  }
                ]
              },
              {
                value: '前三直选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前三组选复式',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '前三组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前三组选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '前三组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              // {
              //   value: '前三组选胆拖',
              //   checked: false,
              //   type: 'input',
              //   detailContent: [
              //     {
              //       title: '第一位',
              //       numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              //       mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
              //     },
              //   ]
              // }
            ]
          },
          {
            tag: '二码',
            checked: false,
            play: [
              {
                value: '前二直选复式',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第二位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前二直选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前二组选复式',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '前二组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '前二组选单式',
                checked: false,
                type: 'input',
                detailContent: [
                  {
                    title: '前三组选',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              // {
              //   value: '前三组选胆拖',
              //   checked: false,
              //   type: 'input',
              //   detailContent: [
              //     {
              //       title: '第一位',
              //       numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              //       mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
              //     },
              //   ]
              // }
            ]
          },

          {
            tag: '不定位',
            checked: false,
            play: [
              {
                value: '前三一码不定位',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '不定位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  }
                ]
              },
            ]
          },
          {
            tag: '定位胆',
            checked: false,
            play: [
              {
                value: '复式',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '第一位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第二位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                  {
                    title: '第三位',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              // {
              //   value: '前三组选胆拖',
              //   checked: false,
              //   type: 'input',
              //   detailContent: [
              //     {
              //       title: '第一位',
              //       numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
              //       mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
              //     },
              //   ]
              // }
            ]
          },
          {
            tag: '趣味型',
            checked: false,
            play: [
              {
                value: '定单双',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '定单双',
                    numberArr: ['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双'],
                    mulActive: [false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '猜中位',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '猜中位',
                    numberArr: ['03', '04', '05', '06', '07', '08', '09'],
                    mulActive: [false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
            ]
          },
          {
            tag: '任选复式',
            checked: true,
            play: [
              {
                value: '一中一',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '选一中一',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '二中二',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选二中二',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '三中三',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选三中三',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '四中四',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选四中四',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '五中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选五中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '六中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选六中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '七中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选七中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '八中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '选八中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
            ]
          },
          {
            tag: '任选单式',
            checked: false,
            play: [
              {
                value: '一中一',
                checked: true,
                type: 'number',
                detailContent: [
                  {
                    title: '选一中一',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '二中二',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '二中二',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '三中三',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '三中三',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '四中四',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '四中四',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '五中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '五中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '六中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '六中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '七中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '七中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
              {
                value: '八中五',
                checked: false,
                type: 'number',
                detailContent: [
                  {
                    title: '八中五',
                    numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
                    mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
                  },
                ]
              },
            ]
          },
        ], // 由jsonData演变而来的可以改变;所有的变化看这个开始
        inputValue: 1,
      }
    },
    created() {
      // console.log(this.$route.params.id)
      this.routerId = this.$route.params.id
    },
    mounted() {
      this.playCheckNumbers = this.playNumberData[0].playCheckNumber // 最后改成计算属性比价好
      // 初始化数据
      this.currentPlayDetial = '三码'
      this.playDetials = ['前三直选复式', '前三直选单式', '前三组选复式', '前三组选单式']
      this.checkNumberItems = [
        {
          title: '第一位',
          numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
        },
        {
          title: '第二位',
          numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
        },
        {
          title: '第三位',
          numberArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
          mulActive: [false, false, false, false, false, false, false, false, false, false, false], // 用来存储高亮的状态
        }
      ]
      // this.initNumData = this.checkNumberItems
    },
    methods: {
      selectedNumberDataMethod(data) {
        let type = this.tagSelectedData[0]
        let details = this.tagSelectedData[2]
        this.selectedInfo = Object.assign(playMethods(type, details, data),{area:this.araeSelected},{period: this.period})
        console.log(this.selectedInfo)
        // console.log(playMethods(type, details, data))
//        selectedDataToStr(this.playBoardTypeValue, this.selectedInfo.selectedNum)
      },
      resetSelected() {
        this.$refs.playBoard.resetSelected()
        this.inputValue = 1
      },
      tagSelected(data) {
        this.tagSelectedData = data
      },
      playBoardType(data) {
        this.playBoardTypeValue = data
      },
      addDataToBox() {
        if (this.finalData.bittingNumber != 0) {
          this.$store.commit('setLotteryList', this.finalData)
          this.resetSelected()
//          this.finalData.bittingNumber = 0
//          this.finalData.price = 0
//           this.$emit('clearNow')
//				  this.finalData.selectedNum = ''
        }
      },
      //----------------------------------------------------------------------------------
      toRight() {
        if (this.navNum > -560) {
          this.navNum -= 112
        } else {
          console.log('最右边了')
        }
      },
      toLeft() {
        if (this.navNum < 0) {
          this.navNum += 112
        } else {
          console.log('最左边了')
        }
      },
      togglePageId(index) {
        if (index === +this.routerId) {
          return
        } else {
          this.routerId = index
          this.$router.push({path: `/lottery/ssc/${index}`})
          // this.currentPlayIndex = 0
        }
      },
      filterPlay(index) {
        if (index === this.currentPlayIndex) {
          return
        } else {
          // this.currentPlayDetial = this.playItems[index]
          this.currentPlayIndex = index
          // this.playCheckNumbers = this.playNumberData[index].playCheckNumber

          this.currentPlayDetial = this.playItems[index] // 当前玩法
          console.log('当前玩法')
          console.log(this.currentPlayDetial)
          this.qrxhData.num = 0;
          this.qrxhData.total = 0;
          // 清空号码组件
          for (let i = 0; i < this.checkNumberItems.length; i++) {
            for (let j = 0; j <  this.checkNumberItems[i].mulActive.length; j++) {
              this.checkNumberItems[i].mulActive[j] = false
            }
          }
          this.detailJsonData = this.jsonData.map(item => {
            return {
              checked: item.tag === this.currentPlayDetial ? true : false,
              play: item.play
            }
          })
          console.log(this.detailJsonData)
          let arr = this.detailJsonData.filter(item => {
            return item.checked === true
          })
          console.log(arr)
          this.playDetials = arr[0].play.map(item => {
            return item.value
          })
          this.currentPlayName = this.playDetials[0]
        }
      },
      filterDetailPlay(params) {
        console.log('当前点击的是')
        console.log(params)
        this.qrxhData.num = 0;
        this.qrxhData.total = 0;
        // 清空号码组件
        for (let i = 0; i < this.checkNumberItems.length; i++) {
          for (let j = 0; j <  this.checkNumberItems[i].mulActive.length; j++) {
            this.checkNumberItems[i].mulActive[j] = false
          }
        }
        this.currentPlayName = params
        this.detailJsonData.map(item => {
          for(let i in item.play) {
            if (item.play[i].value === params) {
              console.log(item.play[i].detailContent)
              this.checkNumberItems = item.play[i].detailContent
            }
          }
        })
        // console.log('大一')
        // console.log(this.checkNumberItems)
      },
      // 添加数据
      addpropsData(item, odds) {
        console.log(item, odds)
        item.selected = !item.selected
        let subIndex = null
        for (let i = 0; i < this.propsData.length; i++) {
          if (this.propsData[i].value === item.num) {
            subIndex = i
          }
        }
        if (subIndex === null) {
          // 说明subIndex没经过for循环赋值，也就是原数组没有此项，可以添加
          let itemObj = {
            play: item.play,
            value: item.num,
            number: 1,
            odds: odds,
            perPrice: '',
            bonus: 0.00,
            selected: item.selected
          }
          this.propsData.unshift(itemObj)
        } else {
          // 说明subIndex经过for循环赋值，也就是原数组有此项，应该删除
          this.propsData.splice(subIndex, 1)
        }
      },
      // 子传父，清除active类
      clearActiveClass(value) {
        console.log('这是子组件传过来的值')
        console.log(value)
        // 过滤数据返回符合条件的数组，也就是select属性为true的,
        // this.playCheckNumbers[index].selected = false //不能传index,因为playCheckNumbers为整个数组，传值去改变
        this.playCheckNumbers.map(item => {
          if (item.num === value) {
            item.selected = false
          }
        })
      },
      // 子传父，删除
      delPropsData(params) {
        // console.log(this.propsData)
        // 拿到索引
        // console.log(params)
        this.propsData.splice(params,1)
        // console.log(this.propsData)
      },
      toggleSelected(item, index2) {
        console.log(item) // 当前所在的数组
        console.log(index2) // 当前的索引
        // item.mulActive[index2] = !item.mulActive[index2] // vue不会响应此场景：利用索引直接设置一个项时

        //有两种方法解决此问题使其响应式：
        // 1 Vue.set
        this.$set(item.mulActive, index2, !item.mulActive[index2])

        // 2 Array.prototype.splice
        // item.mulActive.splice(index2, 1, !item.mulActive[index2])
        // console.log(this.checkNumberItems[0])

        //  对外处理数据
        // console.log('对外处理数据')
        // console.log(this.checkNumberItems)
        this.selectedInfo = playMethodsSyx5(this.currentPlayDetial, this.currentPlayName, this.checkNumberItems)
        console.log('=====')
        console.log(this.selectedInfo)
        this.qrxhData.num = this.selectedInfo.bittingNumber
        this.qrxhData.total = this.selectedInfo.price
        this.qrxhData.selectNumArr = [] // 置空
        for (let i = 0; i < this.selectedInfo.selectedNum.length; i++) {
          let strArr = []
          for (let j = 0; j < this.selectedInfo.selectedNum[i].mulActive.length; j++) {
            if (this.selectedInfo.selectedNum[i].mulActive[j] == true) {
              strArr.push(this.selectedInfo.selectedNum[i].numberArr[j])
            }
          }
          this.qrxhData.selectNumArr.push(strArr)
        }
      },
      // 父传子，子传父数据处理
      syx5SelfComMethosd() {
        this.selectedInfo = playMethodsSyx5(this.currentPlayDetial, this.currentPlayName, this.checkNumberItems)
        console.log('=====')
        console.log(this.selectedInfo)
        this.qrxhData.num = this.selectedInfo.bittingNumber
        this.qrxhData.total = this.selectedInfo.price
        this.qrxhData.selectNumArr = [] // 置空
        for (let i = 0; i < this.selectedInfo.selectedNum.length; i++) {
          let strArr = []
          for (let j = 0; j < this.selectedInfo.selectedNum[i].mulActive.length; j++) {
            if (this.selectedInfo.selectedNum[i].mulActive[j] == true) {
              strArr.push(this.selectedInfo.selectedNum[i].numberArr[j])
            }
          }
          this.qrxhData.selectNumArr.push(strArr)
        }
      },
      selectAll(item) {
        // console.log(item.mulActive)
        item.mulActive = item.mulActive.map(i => i = true)
        // forEach没有返回值，没有创建新数组，也不会改变元素组，只是让每个元素都去执行一次回调函数
        // item.mulActive.forEach(i => {
        //   i = true
        //   console.log('forEach没有返回值，你赋值个毛线')
        //   console.log(i)
        // })
        // console.log(item.mulActive)
        this.syx5SelfComMethosd()
      },
      selectBig(item) {
        // for (let i in item.mulActive) {
        //   item.mulActive[i] = i < 5 ? false : true // vue不会响应此场景：利用索引直接设置一个项时
        //   console.log(item.mulActive[i])
        //   console.log(item.mulActive)
        // }
        for (let i in item.mulActive) {
          i < 5 ? this.$set(item.mulActive, i, false) : this.$set(item.mulActive, i, true) // 解决vue响应问题
        }
        // console.log(item.mulActive)
        this.syx5SelfComMethosd()
      },
      selectLittle(item) {
        for (let i in item.mulActive) {
          // item.mulActive[i] = i < 5 ? true : false
          i < 5 ? this.$set(item.mulActive, i, true) : this.$set(item.mulActive, i, false)
        }
        this.syx5SelfComMethosd()
      },
      // 奇数
      selectOdd(item) {
        for (let i in item.mulActive) {
          // item.mulActive[i] = i % 2 === 0 ? true : false
          i % 2 === 0 ? this.$set(item.mulActive, i, true) : this.$set(item.mulActive, i, false)
        }
        this.syx5SelfComMethosd()
      },
      // 偶数
      selectEven(item) {
        for (let i in item.mulActive) {
          // item.mulActive[i] = i % 2 === 0 ? false : true
          i % 2 === 0 ? this.$set(item.mulActive, i, false) : this.$set(item.mulActive, i, true)
        }
        this.syx5SelfComMethosd()
      },
      selectClear(item) {
        item.mulActive = item.mulActive.map(i => i = false)
        this.syx5SelfComMethosd()
      },
      reduceInputValue() {
        if (this.inputValue === 1) {
          return
        } else {
          this.inputValue -= 1
        }
      },
      addInputValue() {
        this.inputValue += 1
      },
      confirm() {
        if (this.qrxhData.num === 0) {
          alert('当前为0注，请投注')
        } else {
          // 奇
          let item = {
            play: `${this.selectedInfo.type},${this.selectedInfo.detial}`,
            selectedNumArr: this.qrxhData.selectNumArr,
            num: this.selectedInfo.bittingNumber,
            bnum: this.inputValue,
            total: this.money* this.inputValue,
            flag: '元'
          }
          console.log(item,10)
          this.propsData.push(item)
          console.log(this.propsData,'要传给子组件的数据')
          // 清空号码组件
          this.qrxhData.num = 0
          for (let i = 0; i < this.checkNumberItems.length; i++) {
            for (let j = 0; j <  this.checkNumberItems[i].mulActive.length; j++) {
              this.checkNumberItems[i].mulActive[j] = false
            }
          }
        }
      }
    },
    components: {
      BatItem,
      playSortMore,
      playBoard,
      numberBox
    },
    watch: {
      'tagSelectedData': function (n) {
        this.selectedInfo = {}
        // console.log(n)
      },
      'selectedNumberData': {
        handler: function (n) {

        },
        deep: true
      },
      // 'currentPlayDetial': function(newVal, oldVal) {
      //
      // },
      'currentPlayName': function(newVal, oldVal) {
        this.detailJsonData.map(item => {
          for(let i in item.play) {
            if (item.play[i].value === newVal) {
              console.log(item.play[i].detailContent, '好')
              this.checkNumberItems = item.play[i].detailContent
              // this.initNumData = item.play[i].detailContent
            }
          }
        })
      },
      'propsData': function (nVal, oVal) {
        // console.log(nVal,'好')
        this.betNum = 0
        this.betMoneyTotal = 0
        for (let i = 0; i < nVal.length; i++) {
          this.betNum += nVal[i].num
          this.betMoneyTotal += nVal[i].num * nVal[i].bnum * 2
        }
      }
    },
    computed: {
      qrxhDataTotal: function () {
        return this.qrxhData.num * 2 * this.inputValue
      },
      finalData() {
        // console.log(this.selectedInfo)
        return {
          type: this.selectedInfo.type,
          detial: this.selectedInfo.detial,
          selectedNum: this.selectedInfo.selectedNum,
          bittingNumber: this.selectedInfo.bittingNumber || 0,
          price: this.selectedInfo.price || 0,
          playBoardTypeValue: this.playBoardTypeValue,
          betMul: this.inputValue,
          YJFmul: this.YJF,
          area: this.selectedInfo.area,
          period: this.selectedInfo.period
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .k3 {
    background: #fff;
    border: 1px solid #ccc;
    position: relative;
    .betTitle {
      padding: 15px;
      .announced, .betLogo, .time {
        background: url(http://imagess-google.com/system/pc/k3/betBg.png);
        float: left;
        height: 140px;
        border-radius: 6px;
      }
      .announcedTitle, h2, .timeTitle {
        text-align: center;
        margin: 15px 0;
        font-size: 14px;
        color: #333;
        font-weight: 700;
        b {
          color: #f33;
          margin: 0 5px;
        }
      }
      .betLogo {
        width: 284px;
        margin-right: 10px;
        text-align: center;
        h2 {
          font-size: 24px;
        }
        i {
          font-size: 60px;
          line-height: 70px;
          border-radius: 50%;
          padding: 4px;
          position: relative;
          margin-left: -52px;
          top: -3px;
          color: #218ddd;
          &:before {
            content: '';
            position: absolute;
            display: block;
            height: 1px;
            width: 36px;
            box-shadow: 0 0 10px 2px #b7a4a4;
            background-color: #dac9c9;
            z-index: 1;
            left: 12px;
            bottom: 3px;
          }
          &:after {
            content: '\e61b';
            position: absolute;
            z-index: 2;
            left: 0;
            top: 0;
          }
        }
      }
      .time {
        width: 380px;
        text-align: center;
        margin-right: 10px;
        em {
          display: inline-block;
          height: 52px;
          color: #fff;
          font-size: 38px;
          line-height: 52px;
          font-family: "Microsoft YaHei";
          margin-top: 6px;
          width: 200px;
          background-color: #455467;
          border-radius: 3px;
          text-shadow: 0 1px 1px #000;
        }
      }
      .announced {
        width: 284px;
        text-align: center;
        position: relative;
        overflow: hidden;
        .announcedTitle {
          margin-bottom: 0;
        }
        .announcedNo {
          display: inline-block;
          margin: 0 auto;
          margin-top: 2px;
          position: relative;
          z-index: 4;
          img {
            margin: 0;
            margin-top: 9px;
            & + img {
              margin-left: 19px;
            }
          }
          li {
            width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            margin: 19px 22px 0 0;
            float: left;
            background: url(http://imagess-google.com/system/pc/k3/open_num.png) no-repeat center 0;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
      #Results {
        .announcedNo4 {
          background-position: 0 0;
        }
        .announcedNo5 {
          background-position: 0 0;
        }
        .announcedNo6 {
          background-position: 0 -122px;
        }
      }
    }
    .betContent {
      border-top: 1px solid #ddd;
      .betLeft {
        float: left;
        width: 740px;
        min-height: 500px;
        position: relative;
        .sscCheckNumber {
          margin: 24px 15px;
          padding: 15px 0 5px;
          background: url(http://imagess-google.com/system/pc/k3/betBg.png);
          border-radius: 6px;
          ul {
            li {
              display: table;
              margin: 10px 0;

            }
          }
          .buyNumberTitle {
            width: 55px;
            height: 26px;
            line-height: 26px;
            font-size: 12px;
            background-color: #455467;
            color: #fff;
            text-align: center;
            border-radius: 0 3px 3px 0;
            margin: 11px 10px 11px 0;
            position: relative;
            i {
              position: absolute;
              display: block;
              right: -5px;
              top: 8px;
              border-top: 5px solid transparent;
              border-left: 5px solid #455467;
              border-bottom: 5px solid transparent;
            }
          }
          .buyNumber {
            text-align: left;
            padding: 0 4px;
            min-width: 500px;
            margin: 5px 0;
            a {
              width: 38px;
              height: 38px;
              display: inline-block;
              border-radius: 50%;
              margin: 0 6px 10px;
              border: 1px solid #c0c5d2;
              line-height: 38px;
              font-size: 18px;
              color: #000;
              box-shadow: 0 1px 3px #d4d4d4, inset 0 -1px 5px #fff;
              text-align: center;
              background: linear-gradient(180deg, #fff 0, #f1efef);
              cursor: pointer;
              box-sizing: border-box;
              &:hover {
                background: linear-gradient(180deg, #d64b15 30%, #ea6a31);
                border: 1px solid #d24c10;
                color: #fff;
                text-decoration: blink;
                box-shadow: inherit;
              }
            }
            .curr {
              background: linear-gradient(180deg, #d64b15 30%, #ea6a31) !important;
              border: 1px solid #d24c10 !important;
              color: #fff !important;
              text-decoration: blink !important;
              box-shadow: inherit !important;
            }
          }
          .buyNumberFilter {
            padding: 0;
            width: 82px;
            margin-left: 4px;
            a {
              width: 21px;
              height: 21px;
              display: block;
              float: left;
              color: #666;
              font-size: 12px;
              border-radius: 2px;
              margin: 2px 3px;
              border: 1px solid #c1c6d2;
              line-height: 18px;
              box-shadow: inset 0 -1px 5px #fff;
              text-align: center;
              background: linear-gradient(180deg, #fff 0, #f1efef);
              box-sizing: border-box;
              &:hover {
                background: linear-gradient(180deg, #d64b15 30%, #ea6a31);
                border: 1px solid #d24c10;
                color: #fff;
                text-decoration: blink;
                box-shadow: inherit;
              }
            }
          }
          .buyNumberTitle, .buyNumber, .buyNumberFilter {
            display: block;
            float: left;
          }
        }
        .betNavCon {
          width: 100%;
          overflow: hidden;
          .betNav {
            height: 38px;
            margin: 0 34px;
            transition: .6s;
            overflow: hidden;
            & > li {
              display: inline-block;
              width: 112px;
              float: left;
              text-align: center;
              box-sizing: border-box;
              font-size: 16px;
              line-height: 39px;
              background-color: #fff;
              cursor: pointer;
              color: #333;
              & + li {
                border-left: 1px solid #ddd;
              }
              &:last-child {
                border-right: 1px solid #ddd;
              }
            }
            .active {
              background-color: #ea6a31;
              color: #fff;
            }
          }
          .active {
            background-color: #ea6a31;
            color: #fff;
          }
        }
        .betNavtab {
          height: 38px;
          position: absolute;
          right: 0;
          top: 0;
          width: 35px;
          background: linear-gradient(#fff 2%, #ececec);
          border-left: 1px solid #ddd;
          cursor: auto;
          span {
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 8px;
            border: 1px solid;
            margin: 11px 9.5px;
            cursor: pointer;
          }
          em {
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid;
            display: block;
            margin: 6px 3px;
            transition: .5s;
            transform: rotate(-90deg);
            margin-left: 4px;
            &:before {
              content: '';
              display: block;
              width: 38px;
              height: 35px;
              position: absolute;
              margin-left: -19px;
              margin-top: -21px;
            }
          }
        }
        .left {
          left: 0;
          border-right: 1px solid #ddd;
          border-left: none;
          em {
            transform: rotate(90deg);
            margin-left: 3px;
          }
        }
        // 第二个div
        .betFilter {
          text-align: left;
          width: 739px;
          height: 52px;
          box-sizing: border-box;
          padding: 10px 15px;
          border-bottom: 1px solid #ddd;
          background-color: #f2f4f7;
          border-top: 1px solid #ddd;
          .curr, li:hover {
            background-color: #ff9726;
            color: #fff;
          }
          li {
            display: inline;
            padding: 4px 5px;
            line-height: 30px;
            border-radius: 3px;
            cursor: pointer;
            text-align: center;
            color: #555;
            font-size: 14px;
            margin-right: 13px;
            margin-bottom: 5px;
          }
        }
        .betFilterAnd {
          padding: 10px 15px;
          font-size: 12px;
          border-bottom: 1px solid #ccc;
          line-height: 2.2;
          li {
            margin: 4px 0;
          }
          span {
            vertical-align: top;
            display: inline-block;
            font-weight: 700;
            color: #555;
            width: 64px;
            position: relative;
            margin-left: 22px;
            &:before {
              content: '';
              display: block;
              width: 1px;
              height: 54px;
              background-color: #e7e7e8;
              position: absolute;
              top: -14px;
              left: -16px;
            }
            &:after {
              content: '';
              display: block;
              width: 11px;
              height: 11px;
              background-color: #fff;
              border: 1px solid #e7e7e8;
              border-radius: 50%;
              position: absolute;
              top: 7px;
              left: -21px;
            }
          }
          div {
            display: inline-block;
            max-width: 620px;
            a {
              color: #555;
              margin-right: 15px;
              padding: 4px 6px;
              border-radius: 3px;
              user-select: none;
              cursor: pointer;
            }
            .curr, a:hover {
              background-color: #ff9726;
              color: #fff;
            }
          }
        }
        .betTip {
          padding: 3px 15px;
          color: #555;
          background: #fdfdfd;
          i {
            color: #ff9831;
            font-size: 14px;
            /*margin-right: 3px;*/
          }
        }
        .checkNumber {
          margin: 24px 15px;
          padding: 25px 0;
          background: url(http://imagess-google.com/system/pc/k3/betBg.png);
          border-radius: 6px;
          ul {
            text-align: center;
            li {
              display: inline-block;
              margin: 12px 15px;
              vertical-align: top;
              a {
                box-shadow: 0 1px 5px #d4d4d4;
                display: block;
                background: linear-gradient(180deg, #fff 0, #f1efef 90%, #f7f7f7);
                border-radius: 5px;
                border: 1px solid #c0c5d2;
                height: 50px;
                line-height: 50px;
                font-size: 30px;
                color: #000;
                text-align: center;
                min-width: 52px;
              }
              span {
                color: #333;
              }
            }
            a, a:hover {
              background: linear-gradient(180deg, #d64b15 30%, #ea6a31);
              border: 1px solid #d24c10;
              color: #fff;
              text-decoration: blink;
              box-sizing: inherit;
            }
            .active {
              a {
                background: linear-gradient(180deg, #d64b15 30%, #ea6a31);
                border: 1px solid #d24c10;
                color: #fff;
                text-decoration: blink;
                box-sizing: inherit;
              }
            }
          }
        }
        .checkedList {
          border: 1px solid #ddd;
          margin: 15px;
          padding: 10px;
          height: 188px;
          overflow-y: auto;
          margin-top: 40px;
          background: #fff;
        }
        .betTotal {
          padding: 10px;
          text-align: center;
          font-size: 16px;
          em, i {
            color: #f37036;
          }
        }
        .betBtn {
          display: block;
          margin: 0 auto;
          line-height: 44px;
          font-size: 20px;
          border-radius: 5px;
          width: 150px;
          text-align: center;
          background: #ea6a31;
          color: #fff;
          margin-bottom: 40px;
        }
        .Panel {
          .betTotal {
            margin: 16px 0;
            i {
              color: #f37036;
            }
            .inputAdd {
              display: inline-block;
              vertical-align: bottom;
              margin: 0 5px;
              i {
                background-color: #f4f4f4;
                height: 30px;
                line-height: 28px;
                width: 21px;
                text-align: center;
                float: left;
                border: 1px solid #e3e4e6;
                color: #686869;
                user-select: none;
                cursor: pointer;
              }
              i:first-child {
                border-right: none;
                box-sizing: border-box;
              }
              i:last-child {
                border-left: none;
                box-sizing: border-box;
              }
              .off {
                color: #c3c8d3;
                cursor: default;
              }
              input {
                width: 60px;
                border: 1px solid #cecece;
                height: 30px;
                box-sizing: border-box;
                padding: 4px 5px;
                text-align: center;
                border-radius: 0;
                vertical-align: baseline;
              }
            }
            select {
              border: 1px solid #cecece;
              height: 30px;
              text-align: center;
              padding: 0 5px;
              margin: 0 5px;
              border-radius: 0;
            }
          }
          .ClickShade {
            cursor: pointer;
          }
        }
      }
      .betRight {
        float: left;
        width: 258px;
        min-height: 500px;
        border-left: 1px solid #ddd;
        box-sizing: border-box;
        .box {
          h3 {
            border-bottom: 1px solid #ddd;
            background-color: #455467;
            color: #fff;
            border-radius: 3px;
            display: inline-block;
            margin: 15px 0 6px 8px;
            text-align: center;
            height: 26px;
            font-weight: 100;
            line-height: 26px;
            font-size: 12px;
            padding: 0 6px;
          }
          .more {
            display: inline-block;
            width: 156px !important;
            margin: 0 8px;
            height: 26px;
            text-align: right;
            a {
              background-color: #fff;
              display: inline-block;
              line-height: 13px;
              color: #555;
              padding-right: 5px;
            }
          }
          .ResultsList {
            min-height: 279px;
            table {
              text-align: center;
              border-collapse: collapse;
              border-spacing: 0;
              th {
                background-color: #f2f4f7;
                height: 28px;
                line-height: 28px;
                text-align: center;
                font-weight: 400;
                color: #666;
                border-bottom: 1px solid #ddd;
              }
              td {
                height: 24px;
                line-height: 24px;
                text-align: center;
                color: #666;
                border-right: 1px dotted #ebebeb;
                border-bottom: 1px dotted #ebebeb;
                &:first-child {
                  color: #555;
                }
                &:nth-child(2) {
                  color: #ff9600;
                }
                em {
                  width: 18px;
                  height: 18px;
                  display: inline-block;
                  border-radius: 2px;
                  color: #fff;
                  vertical-align: middle;
                  line-height: 18px;
                }
                .xiao, .shuang {
                  background-color: #ff9726;
                }
              }
            }
          }
          table {
            text-align: center;
            border-collapse: collapse;
            border-spacing: 0;
            th {
              background-color: #f2f4f7;
              height: 28px;
              text-align: center;
              font-weight: 400;
              color: #666;
              border-bottom: 1px solid #ddd;
              box-sizing: border-box;
            }
            td {
              height: 24px;
              line-height: 24px;
              text-align: center;
              color: #666;
              border-right: 1px dotted #ebebeb;
              border-bottom: 1px solid #ebebeb;
              &:first-child {
                color: #555;
              }
            }
          }
        }
        .mybet {
          .more {
            width: 100% !important;
            margin: 0;
            border-bottom: 1px solid #ebebeb;
          }
        }
        .winningList {
          h3 {
            cursor: pointer;
          }
          .notSelect {
            background-color: #d6d6d6;
            color: #666;
            cursor: pointer;
          }
          div {
            float: left;
            width: 78%;
            line-height: 1.5;
          }
          .winnerListSlide {
            height: 539px;
          }
          .winner-title {
            width: 100%;
            text-align: center;
            background-color: #f2f4f7;
            height: 28px;
            line-height: 28px;
            font-weight: 400;
            color: #666;
            border-bottom: 1px solid #ddd;
          }
          .bd {
            width: 100%;
            padding: 0;
            .tempWrap {
              width: 100%;
              padding: 0;
              vertical-align: inherit;
              li {
                padding: 5px 15px;
                border-bottom: 1px dotted #ddd;
                height: 40px;
                img {
                  height: 36px;
                  width: 36px;
                  border-radius: 50%;
                  float: left;
                  margin-top: 2px;
                  margin-right: 9px;
                  transition: .5s;
                }
                .color {
                  /*color: #fff;*/
                }
                p {
                  float: left;
                  line-height: 1.7;
                  span {
                    color: #f63745;
                    margin: 0 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
