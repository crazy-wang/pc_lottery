<template>
	<div class="w1000-center k3">
		<div class="betTitle clearf">
			<div class="betLogo">
				<h2>{{araeSelected.title}}</h2>
				<i class="iconfont icon-xuan"></i>
			</div>
			<div class="time">
				<div class="timeTitle" style="opacity: 1;">
					距
					<b>{{period}}</b>
					期投注截止还有：
				</div>
				<em><count-down ref="countDown" style="height: 5vh;font-size: 18px;" v-on:start_callback=""
				                v-on:end_callback="endTimeEvent" :startTime="startTime"
				                :endTime="endTime" :tipText="''" :tipTextEnd="''" :endText="'已结束'"
				                :dayTxt="''" :hourTxt="':'" :minutesTxt="':'" :secondsTxt="''"></count-down></em>
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
							<li v-for="(item, index) in arae" :class="{active: araeSelected.id === item.id}" @click="togglePageId(item,index)">
								{{item.title}}
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
					<ul class="betFilter">
						<li v-for="(item, index) in playItems" :class="{curr: currentPlayIndex === index}"
						    @click="filterPlay(index)">{{item}}
            </li>
					</ul>
					<div class="betTip">
						<i class="iconfont icon-zhuyi"></i>
						{{betTips[this.currentPlayIndex]}}
          </div>
					<div class="checkNumber">
						<!--和值的-->
						<!--<div v-if="playCheckNumbers[0].odds">-->
						<div v-if="playCheckNumbers[0].play === '和值'">
							<ul>
								<li v-for="(item, index) in playCheckNumbers" @click="addBatItemProps(item, item.odds)"
								    :class="{active: item.selected}">
									<a href="javascript:;" class="ClickShade">{{item.num}}</a>
									<span>赔{{item.odds}}</span>
								</li>
							</ul>
						</div>
						<!--专门二同号单选-->
						<div v-else-if="this.currentPlayIndex === 6">
							<ul>
								<li v-for="(item, index) in playCheckNumbers.slice(0,6)">
									<a href="javascript:;" class="ClickShade">{{item.num}}</a>
								</li>
							</ul>
							<ul>
								<li v-for="(item, index) in playCheckNumbers.slice(6,12)">
									<a href="javascript:;" class="ClickShade">{{item.num}}</a>
								</li>
							</ul>
						</div>
						<!--特殊的需要确认选号的-->
						<div v-else-if="filterPlayArr.indexOf(currentPlayIndex) !== -1">
							<ul>
								<li v-for="(item, index) in playCheckNumbers" @click="addBatItemProps2(item, item.odds)"
								    :class="{active: item.selected}">
									<a href="javascript:;" class="ClickShade">{{item.num}}</a>
								</li>
							</ul>
						</div>
						<!--一般的-->
						<div v-else>
							<ul>
								<li v-for="(item, index) in playCheckNumbers" @click="addBatItemProps(item, item.odds)"
								    :class="{active: item.selected}">
									<a href="javascript:;" class="ClickShade">{{item.num}}</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="Panel" v-show="filterPlayArr.indexOf(currentPlayIndex) !== -1">
						<p class="betTotal">
							您选择了
							<em>{{betNum}}</em>
							注
						</p>
						<a style="cursor: pointer" class="betBtn ClickShade" @click="confimBet">确认选号</a>
					</div>
					<div class="checkedList">
						<!--这块准备自写组件，不按他的来-->
						<bat-item v-model="lastResult" :batPropsData="batItemProps" @clearActiveClass="clearActiveClass"></bat-item>
					</div>
					<div class="Bet">
						<p class="betTotal">
							方案注数
							<em>{{this.lastResult.num}}</em>
							注，金额
							<i class="money">{{this.lastResult.money}}</i>
							元
						</p>
						<a class="betBtn ClickShade" @click="lotteryOrderAdd">立即投注</a>
					</div>
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
								<th scope="col">和值</th>
								<th scope="col">形态</th>
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
								<td>
									<em :class="item.class1[0]">{{item.class1[1]}}</em>
									<em :class="item.class2[0]">{{item.class2[1]}}</em>
								</td>
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
		{{batItemProps}}
	</div>
</template>

<style lang="scss" scoped>
	.k3 {
		background: #fff;
		border: 1px solid #ccc;
		position: relative;
		.betTitle {
			padding: 15px;
			.announced, .betLogo, .time {
				background: url(http://images.app2jsknas.com/system/pc/k3/betBg.png);
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
					color: #e41404;
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
						content: '\e644';
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
					/*margin-top: 2px;*/
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
						background: url(//images.app2jsknas.com/system/pc/k3/open_num.gif) no-repeat center 0;
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
					// background-position: 0 -122px;
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
					background: url(http://images.app2jsknas.com/system/pc/k3/betBg.png);
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
								box-sizing: content-box;
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

<script>
	import BatItem from './batItem'
	import countDown from '../../../components/countDown.vue'
	
	
	export default {
		data() {
			return {
//				tagToPlayMap: tagToPlayMap, //映射关系
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
				
				
				lastResult: {
					num: 0,
					money: 0
				}, // 最后的投注数和金额
				filterPlayArr: [2, 3, 5, 6, 7], //用来决定什么时候显示确认选号模块，及区分点击添加数据还是确认选号后添加
				routerId: '',
				pageAllData: [
					{
						name: '江苏快3',
					},
					{
						name: '北京快3',
					},
					{
						name: '湖北快3',
					},
					{
						name: '甘肃快3',
					},
					{
						name: '安徽快3',
					},
					{
						name: '广西快3',
					},
					{
						name: '河北快3',
					},
					{
						name: '上海快3',
					},
					{
						name: '大发快3',
					},
					{
						name: '贵州快3',
					},
					{
						name: '吉林快3',
					}
				],
				navNum: 0,
				period: '116389', //期号
				navItems: ['江苏快3', '北京快3', '湖北快3', '甘肃快3', '安徽快3', '广西快3', '河北快3', '上海快3', '大发快3', '贵州快3', '吉林快3'], // 导航菜单
				playItems: ['和值', '三同号通选', '三同号单选', '三不同号', '三连号通选', '二同号复选', '二同号单选', '二不同号'],
				betTips: ['猜3个开奖号相加的和，3-10为小，11-18为大。赔率1.95-189.00倍。', '对所有相同的三个号码(111、222、333、444、555、666)进行投注，任意号码开出，即为中奖。赔率31.50倍。', '对相同的三个号码(111、222、333、444、555、666)中的任意一个或多个进行投注，所选号码开出，即为中奖。赔率189.00倍。', '从1-6中任选3个或多个号码,所选号码与开奖号码的3个号码相同,即为中奖。赔率31.50倍。', '对所有的3个相连号码(123、234、345、456)进行投注，任意号码开出，即为中奖。赔率7.87倍。', '从11-66中任选1个或多个号码，选号与奖号(包含11-66，不限顺序)相同，即为中奖（不含豹子）。赔率12.60倍。', '选择1对相同号码和1个不同号码投注，选号与奖号相同，即为中奖。赔率63.00倍。', '从1-6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即为中奖。赔率6.30倍。'],
				currentPlayIndex: 0, //当前玩法
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
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					},
					{
						codeName: '116481',
						winningNumbers: '1,2,3',
						addValue: '6',
						class1: ['xiao', '小'],
						class2: ['shuang', '双']
					}
				],
				topNumPx: '0px', // 右侧中奖信息ul顶部距离
				rankingLists: [
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
					{
						url: '//images.app2jsknas.com/system/common/headimg/8f58610879f7e312.jpg',
						info: '哏哈 在UU快三',
						num: '547.12'
					},
				],
				resultProps: {},
				confimProps: [], //用于确认选号增加的
				batItemProps: [], // 传给batItem子组件的数据
				// batItemProps: [
				//   {
				//     play: '和值',
				//     value: 3,
				//     number: 1,
				//     odds: 189,
				//     perPrice: '',
				//     bonus: 0.00,
				//     selected: true
				//   },
				//   {
				//     play: '和值',
				//     value: 3,
				//     number: 1,
				//     odds: 189,
				//     perPrice: '',
				//     bonus: 0.00,
				//     selected: true
				//   },
				//   {
				//     play: '和值',
				//     value: 3,
				//     number: 1,
				//     odds: 189,
				//     perPrice: '',
				//     bonus: 0.00,
				//     selected: true
				//   },
				// ]
				submitLotteryData: [], //最终的投注数据
			}
		},
		created() {
			// console.log(this.$route.params.id)
			this.routerId = this.$route.params.id
		},
		mounted() {
			this.getLotteryDetails()
			this.getLotteryArea()
			this.playCheckNumbers = this.playNumberData[0].playCheckNumber // 最后改成计算属性比价好
			// console.log(this.playCheckNumbers,'好的话')
		},
		methods: {
			async getLotteryDetails() {
				let res = await this.axios.get(`v1/Lottery/Details?id=${this.$route.params.id}`)
				let data = res.data.data
				this.startTime = parseInt(data.starttime)
				this.endTime = parseInt(data.stoptime)
				this.currentTime = parseInt(data.timestamp)
				this.period = data.period
				// this.$refs.countDown.gogogo()
			},
			async getLotteryArea() {
				let res = await this.axios.get('/v1/Lottery/LotteryHall?type=k3')
				this.arae = res.data.data
			},
			endTimeEvent() {
				this.$dialog.alert({
					title: '温馨提示',
					message: `<div style="text-align: center">
            <div>${this.period}期已截止</div>
            <div>当前期号<span style="color: red">${this.period + 1}</span></div>
            <div>投注时请注意期号</div>
          </div>`
				}).then(() => {
					this.getLotteryDetails()
				});
			},
			selectedNumberDataMethod(data) {
				let type = this.tagSelectedData[0]
				let details = this.tagSelectedData[2]
				this.selectedInfo = Object.assign(playMethods(type, details, data),{area:this.araeSelected},{period: this.period})
				console.log(this.selectedInfo)
				// console.log(playMethods(type, details, data))
//        selectedDataToStr(this.playBoardTypeValue, this.selectedInfo.selectedNum)
			},
			selectArea(item) {
				this.araeSelected = item
				this.areaShow = false
				// this.$router.push({params: { id: item.value}})
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
			async lotteryOrderAdd() {
				if(this.lastResult.num == 0) {
					this.$dialog.alert({
						title: '提示',
						message: '请至少选择一注投注号码'
					})
					return false
				}
				
				let BettingData = []
				for (let i in this.batItemProps) {
					if(this.batItemProps[i].perPrice == '') {
						this.$dialog.alert({
							title: '提示',
							message: '您有号码未设置金额，请设置后投注'
						})
						BettingData = []
						return false
					} else {
						BettingData.push({
							lottery_code: this.$route.params.id,
							play_detail_code: "1-A1",
							betting_number: this.batItemProps[i].value[0],
							betting_count: this.batItemProps[i].number,
							betting_money: this.batItemProps[i].perPrice,
							betting_point: "7.50%",
							betting_model: 1,
							betting_issuseNo: this.period,
							graduation_count: 1
						})
					}
				}
				console.log(BettingData)
				let params = {
					data: {
						BettingData: BettingData
					},
					source: 1
				}
				let content = ''
				this.batItemProps.forEach(v => {
					content += `<div>${v.value}</div> `
				})
				console.log(JSON.stringify(params))
				this.$dialog.confirm({
					title: '投注确认',
					message: '<div>' +
					'<div>' + this.araeSelected.title + this.period + '期</div>' +
					'<div>投注金额：<span style="color: red">' + this.lastResult.money + '元</span></div>' +
					'<div>投注内容：' + content + '</div>' +
					'</div>'
				}).then(async () => {
					let res = await this.axios.post('v1/Lottery/Order/Add', params)
					if (res.data.code == 200) {
						this.$dialog.alert({
							message: res.data.message
						});
						// this.resetSelectData()
					}
					this.$store.commit('resetLotteryList')
				}).catch(() => {
				
				});
				
			},
			
			
			
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
			togglePageId(item, index) {
				this.araeSelected = item
				
				if (index === +this.routerId) {
					return
				} else {
					this.routerId = index
//					this.$router.push({path: `/lottery/k3/${index}`})
					// this.currentPlayIndex = 0
				}
			},
			filterPlay(index) {
				if (index === this.currentPlayIndex) {
					return
				} else {
					this.currentPlayIndex = index
					this.playCheckNumbers = this.playNumberData[index].playCheckNumber
					// 清空
					// 清除
					this.betNum = 0
					this.confimProps = []
					this.playCheckNumbers.map(item => {
						item.selected = false
					})
				}
			},
			// 添加数据
			addBatItemProps(item, odds) {
				console.log(item, odds)
				item.selected = !item.selected
				let subIndex = null
				for (let i = 0; i < this.batItemProps.length; i++) {
					if (this.batItemProps[i].value[0] === item.num) {
						subIndex = i
					}
				}
				if (subIndex === null) {
					// 说明subIndex没经过for循环赋值，也就是原数组没有此项，可以添加
					let itemObj = {
						play: item.play,
						value: [item.num],
						number: 1,
						odds: odds,
						perPrice: '',
						bonus: 0.00,
						selected: item.selected
					}
					this.batItemProps.unshift(itemObj)
				} else {
					// 说明subIndex经过for循环赋值，也就是原数组有此项，应该删除
					this.batItemProps.splice(subIndex, 1)
				}
			},
			// 需确认选号的添加数据
			addBatItemProps2(item, odds) {
				let valueArr = []
				// console.log(item.selected,'没看到')
				item.selected = !item.selected
				if (item.selected === true) {
					// 增加
					this.confimProps.push(item)
				} else {
					for (let i = 0; i < this.confimProps.length; i++) {
						if (this.confimProps[i].num === item.num) {
							this.confimProps.splice(i, 1)
						}
					}
				}
				console.log(this.confimProps, '看看看看')
				for (let j = 0; j < this.confimProps.length; j++) {
					valueArr.push(this.confimProps[j].num)
				}
				// this.confimProps = this.confimProps.map(item => {
				//   return {
				//     play: item.play,
				//     value: item.num,
				//     number: 1, //?
				//     odds: item.odds,
				//     perPrice: '2',
				//     bonus: 0.00, // ?
				//     selected: item.selected
				//   }
				// })
				
				this.resultProps = {
					play: this.confimProps[0].play,
					value: valueArr,
					number: valueArr.length, //?
					odds: this.confimProps[0].odds,
					perPrice: '',
					bonus: 0.00, // ?
					selected: this.confimProps[0].selected
				}
				this.betNum = valueArr.length
			},
			// 确认选号
			confimBet() {
				if (this.betNum > 0) {
					this.batItemProps.unshift(this.resultProps)
					this.betNum = 0
					// 清除
					this.confimProps = []
					this.playCheckNumbers.map(item => {
						item.selected = false
					})
				} else {
					alert('号码选择不完整，请重新选择')
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
			}
		},
		components: {
			BatItem,
			countDown
		},
		computed: {
			lotteryList() {
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
		},
		watch: {
			araeSelected(n) {
				console.log(n)
				this.$router.push(`/lottery/k3/${n.id}`)
			},
			arae() {
				for (let i in this.arae) {
					if (this.arae[i].id == this.$route.params.id) {
						this.araeSelected = this.arae[i]
					}
				}
			},
		}
		// watch: {
		//   'batItemProps': function (nVal, oVal) {
		//     console.log(nVal,'好')
		//     // this.betNum = 0
		//     // this.betMoneyTotal = 0
		//     // for (let i = 0; i < nVal.length; i++) {
		//     //   this.betNum += nVal[i].num
		//     //   this.betMoneyTotal += nVal[i].num * nVal[i].bnum * 2
		//     // }
		//   }
		// }
	}
</script>

















