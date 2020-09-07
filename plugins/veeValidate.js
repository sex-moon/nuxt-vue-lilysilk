import Vue from 'vue'
import { ValidationProvider, extend, configure, setInteractionMode, ValidationObserver } from 'vee-validate'
import { required, email, confirmed } from 'vee-validate/dist/rules';

/**
 * 验证规则
 */
extend('email', email);

extend('confirmed', confirmed);

extend('required', {
    ...required,
    message: 'This field is required'
});

// 验证状态对应的css
configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid'
    }
})

// 提交表单时触发
setInteractionMode('lazy');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);