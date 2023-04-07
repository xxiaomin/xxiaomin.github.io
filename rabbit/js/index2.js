const vm = new Vue({
  el: '#app',
  data() {
    return {
      dataList: [imgPica, imgPicb, imgPicc, imgPicd, imgPice],
      currentIndex: 0, // 默认显示图片
      timer: null, // 定时器
      leftList: [
        {
          num: '1',
          aname: ' 美食',
          asmall: '面点',
          bsmall: '干果',
          current: true
        },
        { num: '2', aname: ' 电器', asmall: '数码产品', current: false },
        {
          num: '3',
          aname: ' 居家',
          asmall: '床品',
          bsmall: '四件套',
          csmall: '被枕',
          current: false
        },
        {
          num: '4',
          aname: ' 洗护',
          asmall: '洗发洗护',
          bsmall: '美妆',
          current: false
        },
        {
          num: '5',
          aname: ' 生鲜',
          asmall: '水果',
          bsmall: '蔬菜',
          current: false
        },
        {
          num: '6',
          aname: ' 孕婴',
          asmall: '奶粉',
          bsmall: '玩具',
          csmall: '辅食',
          current: false
        },
        { num: '7', aname: ' 餐橱', asmall: '数码产品', current: false },
        {
          num: '8',
          aname: ' 服饰',
          asmall: '女装',
          bsmall: '男装',
          current: false
        },
        {
          num: '9',
          aname: ' 杂货',
          asmall: '户外',
          bsmall: '图书',
          current: false
        },
        { num: '10', aname: '  品牌', asmall: '品牌制造', current: false }
      ]
    }
  },
  methods: {
    xianChu(i) {
      this.leftList.forEach((element) => {
        element.current = false
      })
      this.leftList[i].current = true
    },
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 3000)
    },
    kaiTime() {
      this.runInv()
      document.getElementById('rightbox').style.display = 'block'
    },
    qingTime() {
      clearInterval(this.timer)
      document.getElementById('rightbox').style.display = 'none'
    },
    gotoPage(index) {
      this.currentIndex = index
    }
  },
  created() {
    this.runInv()
  },
  computed: {
    // 上一张
    prevIndex() {
      if (this.currentIndex === 0) {
        return this.dataList.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    // 下一张
    nextIndex() {
      if (this.currentIndex === this.dataList.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  }
})
