import Vue from "vue";
import { hasPermissions } from "@/utils/common";

//在需要控制的地方使用v-auth="'key'"

Vue.directive("auth", {
  bind: function(el, binding) {
    if (binding.value === undefined || binding.value.length === 0) return;
    if (!hasPermissions(binding.value)) {
      el.style.display = "none";
      el.remove();
    }
  }
});
