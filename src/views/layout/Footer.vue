<template>
  <div class="footer">
    <div class="version">
      <a href="javascript:;" style="margin-right: 20px">{{
        GlobalCfg.siteName
      }}</a>
      <b>Version</b> {{ GlobalCfg.version }}
    </div>
    <strong>
      Copyright © 2019
      <a href="javascript:;"> {{ GlobalCfg.corporation }} </a>. </strong
    >All rights reserved.
  </div>
</template>

<style lang="scss">
@import "../../assets/css/variables.scss";
.footer {
  width: 100%;
  font-size: 14px;
  background: #fff;
  line-height: $--top-height;
  padding: 0 12px;
  height: $--top-height;
  color: #444;
  border-top: 1px solid #d2d6de;
  .version {
    float: right;
    b {
      font-weight: 700;
    }
    .github {
      color: #444;
      font-size: 20px;
      margin-left: 8px;
      &:hover {
        color: #8bc34a;
      }
    }
  }
}
</style>
