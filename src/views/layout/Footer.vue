<template>
  <div class="footer">
    <div class="version">
      <b>Version</b> {{ $Config.version }}
      <a :href="$Config.gitHub" target="_blank"><i class="fa fa-github github"></i></a>
    </div>
    <strong>Copyright © 2014-2016 <a href="javascript:;">{{ $Config.siteName }}</a>.</strong> All rights reserved.
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {}
  }
</script>
<style lang="less">
  .footer {
    width: 100%;
    font-size: 14px;
    background: #fff;
    line-height: 50px;
    padding: 0 12px;
    height: 50px;
    color: #444;
    border-top: 1px solid #d2d6de;
    .version {
      float: right;
      b {
        font-weight: 700;
      }
      .github{
        color: #444;
        font-size: 20px;
        margin-left: 8px;
        &:hover{
          color: #8BC34A;
        }
      }
    }
  }
</style>
