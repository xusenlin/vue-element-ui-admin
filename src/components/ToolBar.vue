<template>
  <div class="toolbar">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.toolbar {
  width: 100%;
  padding: 8px;
  background-color: #ffffff;
  overflow: hidden;
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6ebf5;

  > div {
    display: flex;
    align-items: flex-start;
    margin-top: 2px;

    > div {
      margin-right: 6px !important;
      margin-bottom: 2px;
    }
  }

  > div:last-child {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}
</style>
