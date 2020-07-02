1. v-model实现原理


2. 对于vue的单向绑定与双向绑定理解


3. 父组件子组件传值
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

