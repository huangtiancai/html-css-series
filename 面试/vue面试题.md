1. 对于vue的单向绑定与双向绑定理解
核心思想是 “数据驱动的组件系统” vue.js最显著的特点就是响应式和数据驱动，也就是将Model和View进行单向绑定或者双向绑定

`单向绑定`：把Model绑定到View，当我们用JavaScript代码更新Model时，View就会自动更新。因此，我们不需要进行额外的DOM操作，只需要进行Model的操作就可以实现视图的联动更新

`双向绑定`：把Model绑定到View的同时也将View绑定到Model上，这样就既可以通过更新Model来实现View的自动更新，也可以通过更新View来实现Model数据的更新。所以，当我们用JavaScript代码更新Model时，View就会自动更新，反之，如果用户更新了View，Model的数据也自动被更新了


2. Vue.js主要有三种数据绑定形式
- 使用"Mustache"语法 (双大括号) 的文本插值（插值形式）: {{msg}}
  Mustache 标签将会被替代为对应数据对象上 msg property 的值
  无论何时，绑定的数据对象上 msg property 发生了改变，插值处的内容都会更新
  方向：Model => View 单向绑定

- v-bind形式:
  Mustache 语法不能作用在 HTML attribute 上，为了支持单向绑定，需要在该属性前面加上v-bind:指令
  `v-bind:class="classed"`实现了class和Model的classed进行了绑定,可以通过操作Model的classed来实现对View的class属性的动态更新，从而实现View的动态更新

- v-model形式
  实现了双向绑定

插值和v-bind：单向绑定
v-model:双向绑定

3. v-model实现原理
v-model是个语法糖:
```html
<div id="app">
  <input type="text" :value="something" @input="something = $event.target.value">{{something}}
</div>
```
```js
new Vue({
  el: '#app',
  data() {  
    return {
      something: '双向绑定'
    }
  }
  })
```

:value="something"
@input="something = $event.target.value"

使用语法糖实现双向绑定:
1.绑定响应式数据 :value="something"
2.(输入数据)触发 input 事件 并传递数据 
  $event 指代当前触发的事件对象
  $event.target 指代当前触发的事件对象的dom
  $event.target.value 当前dom的value值

@input value => something；
:value something => value
形成闭环，实现了双向绑定



参考：https://www.jianshu.com/p/0d089f770ab2

4. 父组件子组件传值
Home.vue
```Html
<!-- 在Header中注册了titleChange事件，在App.vue调用时需要实现这个事件 @titleChange -->
<Header @titleChange="updateTitle" :title="title" />
```
```js
methods: {
  changeTitle: function() {
    // this.title = "htc修改了title值";
    // 子组件不能直接修改父组件传到子组件的值，如上这样修改不合法

    // 注册事件 参数1:事件名称  参数2...:值（给 事件传的值）
    this.$emit("titleChange", "htc通过emit到App.vue修改了title值");
    // 触发事件 => 在父组件App.vue中实现这个事件
  }
}
```

### 3懒加载


### 4.异步


### 5.组件的封装


### 6.MVVM
MVVM 由 Model,View,ViewModel 三部分构成
Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；
View 代表UI 组件，它负责将数据模型转化成UI 展现出来
ViewModel 是一个同步View 和 Model的对象

