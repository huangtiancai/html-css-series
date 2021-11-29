let sleleton = document.getElementsByClassName('card')[1]
console.log(sleleton)

// 加载数据前
setTimeout(() => {
  let image = document.getElementsByClassName('image')[1]
  let h = document.querySelectorAll('h4')[1]
  let d = document.querySelectorAll('.description')[1]

  // 加载完数据
  let node = document.createElement("img")
  node.src = 'https://blog.huangtiancai.cn/upload/imgs/cover/cover3.jpg'
  // 追加图片
  image.appendChild(node);

  // 标题
  h.innerText = 'Skeleton'
  // 正文
  d.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quasi enim facere commodi omnis...'

  // 移除loading
  sleleton.classList.remove('loading')
}, 3000)
