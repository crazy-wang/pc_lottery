<template>
  <div class="userRight person-info">
    <div class="userTitle mgb10">个人信息</div>
    <div class="userMain mgb10">
      <div id="newTab" class="newTab">
        <a href="" class="curr">个人资料</a>
        <a href="" class="curr">等级头衔</a>
      </div>
      <div class="clearf tapli">
        <div class="selectHeadImg">
          <img src="//images.app2jsknas.com/system/common/headimg/1362fa92410f5466.jpg" class="headImg">
          <a href="javascript:;">修改头像</a>
        </div>
        <ul class="personInfo submitContent">
          <li>
            <span>账号：</span>
            <ins>cds0715</ins>
          </li>
          <li>
            <span>等级：</span>
            <ins>测试组</ins>
          </li>
          <li>
            <span>头衔：</span>
            <ins>测试组</ins>
          </li>
          <li>
            <span>昵称：</span>
            <input regmsg="请使用五位以内的汉字" tag="昵称" placeholder="昵称为1-5位汉字，设置后不能修改" type="text" class="userInput">
          </li>
          <li>
            <span>手机：</span>
            <input type="text" disabled="disabled" class="userInput">
            <a href="javascript:;">绑定</a>
          </li>
          <li>
            <span>邮箱：</span>
            <input type="text" disabled="disabled" class="userInput">
            <a href="javascript:;">绑定</a>
          </li>
          <li>
            <span>性别</span>
            <el-radio-group v-model="radio2">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="2">女</el-radio>
              <el-radio :label="3">保密</el-radio>
            </el-radio-group>
          </li>
          <li>
            <span>生日：</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
          <li>
            <span></span>
            <a href="javascript:;" class="submitBtn">保存</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "person-info",
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .mgb10 {
    margin-top: 10px;
  }
.userRight {
  float: left;
  width: 840px;
  box-sizing: border-box;
  margin-left: 10px;
  .userTitle {
    border: 1px solid #ddd;
    background-color: #fbfbfb;
    line-height: 32px;
    font-weight: 700;
    font-size: 14px;
    pading-left: 10px;
    color: #050505;
  }
  .userMain {
    border: 1px solid #ddd;
    min-height: 675px;
    background-color: #fff;
    .newTab {
      border-bottom: 1px solid #ddd;
      margin-top: 15px;
      padding-left: 10px;
      a {
        font-size: 14px;
        border: 1px solid #cecece;
        margin: 0 5px;
        padding: 0 10px;
        border-radius: 4px 4px 0 0;
        line-height: 28px;
        display: inline-block;
        margin-bottom: -1px;
        background-color: #f8f8f8;
      }
      .curr {
        border-bottom: 1px solid #fff;
        background-color: #fff;
        color: #e4393c;
      }
    }
    .selectHeadImg {
      display: inline-block;
      position: relative;
      float: left;
      margin: 30px;
      margin-right: 0;
      width: 100px;
      .headImg {
        vertical-align: top;
        width: 100px;
        height: 100px;
        border-radius: 3px;
      }
      a {
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        display: inline-block;
        width: 100%;
        background-color: rgba(0,0,0,.16);
        line-height: 25px;
        color: #fff;
      }
    }
    .personInfo {
      margin: 30px 20px;
      margin-bottom: 0;
      float: left;
      min-width: 450px;
      width: 670px;
      margin-left: -11px;
      li {
          color: #000;
          line-height: 36px;
          margin-bottom: 4px;
          span {
            color: #666;
            display: inline-block;
            width: 144px;
            text-align: right;
            padding-right: 15px;
            font-size: 12px;
            margin-top: 8px;
          }
          &>ins {
            text-decoration: none;
          }
          .userInput {
            height: 30px;
            line-height: 20px;
            padding: 5px;
            border: 1px solid #cecece;
            width: 233px;
            color: #666;
            maring: 10px 0;
          }
          input {
            vertical-align: middle;
            font-size: 12px;
            border-radius: 2px;
          }
          input[disabled] {
            background-color: #f8f8f8;
            color: #aaa;
          }
          a {
            margin-left: 8px;
            color: #e4393c;
          }
        .el-select {
          width: 100px;
        }
        .submitBtn {
          display: inline-block;
          line-height: 30px;
          color: #fff;
          height: 30px;
          padding: 0 15px;
          border-radius: 3px;
          font-size: 14px;
          margin-right: 10px;
          min-width: 55px;
          text-align: cetner;
          cursor: pointer;
          background-color: #2e4158;
          margin: 10px 0;
        }
        }
    }
  }
}
</style>
