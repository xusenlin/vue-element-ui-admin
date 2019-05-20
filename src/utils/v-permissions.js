import Vue from 'vue'
import {hasPermissions} from './dataStorage'


//在需要控制的地方使用v-permissions="'key'"

Vue.directive('permissions', {
    bind: function (el, binding, vnode) {
        if (!hasPermissions(binding.value))el.style.display = 'none';
    }
});