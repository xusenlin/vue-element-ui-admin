<template>
  <div>
    <el-cascader
      ref="city"
      clearable
      :style="styleObject"
      :size="size"
      :show-all-levels="false"
      :props="{ value: 'code', label: 'name' }"
      :options="options"
      placeholder="请选择城市"
      @change="cityChange"
      :value="value"
    >
    </el-cascader>
  </div>
</template>

<script>
import { listDistricts } from "@/api/common/districts.js";
import Storage from "good-storage";
const CityCascaderSessionKey = "Districts";

export default {
  name: "CityCascader",
  props: {
    value: Array,
    size: {
      type: String,
      default: "small"
    },
    styleObject: {
      type: Object,
      default: () => ({
        width: "186px"
      })
    },
    level: {
      type: Number,
      default: 3
    }
  },
  data: function() {
    return {
      options: []
    };
  },
  created() {
    let data = Storage.session.get(CityCascaderSessionKey, []);
    if (data.length === 0) {
      listDistricts()
        .then(r => {
          this.setOption(r);
          Storage.session.set(CityCascaderSessionKey, r);
        })
        .catch(() => {});
    } else {
      this.setOption(data);
    }
  },
  methods: {
    cityChange(val) {
      this.$emit("input", val);
      let labels = this.getCrrentLabels(val);
      this.$emit("changeCity", val, labels);
      // this.$emit('changeCity',val,this.$refs.city.currentLabels);
    },
    getCrrentLabels(codeList) {
      // 根据code 获取对应的 name
      let options = this.options;
      let labels = [];
      codeList.forEach(value => {
        const targetOption =
          options && options.filter(option => option.code === value)[0];
        if (targetOption) {
          labels.push(targetOption["name"]);
          options = targetOption["children"];
        }
      });
      return labels;
    },
    setOption(data) {
      if (3 === this.level) {
        this.options = data.map(r => {
          return {
            code: r.code,
            name: r.name,
            children: r.children.map(t => {
              return {
                code: t.code,
                name: t.name,
                children: t.children.map(s => ({ code: s.code, name: s.name }))
              };
            })
          };
        });
      }
      if (2 === this.level) {
        this.options = data.map(r => {
          return {
            code: r.code,
            name: r.name,
            children: r.children.map(r => {
              return { code: r.code, name: r.name };
            })
          };
        });
      }
      if (1 === this.level) {
        this.options = data.map(r => {
          return { code: r.code, name: r.name };
        });
      }
    }
  }
};
</script>
