import { mount } from 'vue-test-utils'

//! Use Your Alias in Webpack For Easy Referencing Components
import App from '~/App.vue'

describe('App' , () => {
    it('Shows The Home Page Quote', () => {
        let wrapper = mount(App)
        expect(wrapper.html()).toContain('First, solve the problem. Then, write the code.')
    })
})
