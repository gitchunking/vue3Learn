import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Stepper from '@/components/stepper.vue' // 直接通过别名引，从这就可以说明 vitest 是和 vite 共享配置的

describe('Stepper.vue 组件单元测试', () => {
  // 提前定义选择器
  const SELECTOR = {
    dec: '[tid=dec-btn]',
    inc: '[tid=inc-btn]',
  }
  
  // 测试默认渲染
  it('should render', () => {
    const wrapper = mount(Stepper, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  // 测试交互性
  it('should be interactive', async () => {
    const wrapper = mount(Stepper, { props: { initial: 0 } })
    
    // 判断两个按钮是否正常渲染
    expect(wrapper.text()).toContain('0')
    expect(wrapper.find(SELECTOR.dec).exists()).toBe(true)
    expect(wrapper.find(SELECTOR.dec).exists()).toBe(true)
    
    // 点击增加按钮（异步事件所以用 await）
    await wrapper.get(SELECTOR.inc).trigger('click')
    expect(wrapper.text()).toContain('1')
    
    // 点击减少按钮（异步事件所以用 await）
    await wrapper.get(SELECTOR.dec).trigger('click')
    expect(wrapper.text()).toContain('0')
  })
})
