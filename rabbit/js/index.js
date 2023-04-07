const vm = new Vue({
  el: '#app',
  data() {
    return {
      scroolTop: '',
      offsetTop: '',
      keyword: '',
      // 搜索到的相应结果返回列表
      List: [],
      timer: null,
      // 对以下假数据进行搜索，即搜索源
      songs: {
        // 假数据格式需注意
        A: [
          {
            id: 1,
            spell: 'xiaoyuanjinli',
            name: '校园经历'
          },
          {
            id: 2,
            spell: 'jiaoyubeijing',
            name: '教育背景'
          },
          {
            id: 3,
            spell: 'ziwopingjia',
            name: '自我评价'
          }
        ]
      },
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
  mounted() {
    // const obj = document.getElementById('header_nav')
    window.addEventListener('scroll', this.menu)
    window.addEventListener('scroll', this.menuTou)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.menu)
    window.removeEventListener('scroll', this.menuTou)
  },
  methods: {
    menu(e) {
      const rn1 = document.getElementById('right_nav')
      const header = document.getElementById('header_nav')
      if (document.documentElement.scrollTop >= rn1.offsetTop) {
        header.style.top = '0'
      } else {
        header.style.top = '-125px'
      }
      // window.removeEventListener('scroll', this.menu)
    },
    menuTou() {
      const rn = document.getElementById('ri_nav6')
      const num = document.documentElement.scrollTop
      if (num >= 500) {
        rn.style.display = 'block'
        rn.style.fontSize = '25px'
        rn.style.textAlign = 'center'
      } else {
        rn.style.display = 'none'
      }
      // window.removeEventListener('scroll', this.menuTou)
    },
    huiTou() {
      document.documentElement.scrollTop = 0
    },
    daoHang1() {
      document.documentElement.scrollTop = 1460
    },
    daoHang2() {
      document.documentElement.scrollTop = 1960
    },
    daoHang3() {
      document.documentElement.scrollTop = 2820
    },
    daoHang4() {
      document.documentElement.scrollTop = 3560
    },
    daoHang5() {
      document.documentElement.scrollTop = 4265
    },
    tiaoZhuan() {},
    chuxian() {
      this.keyword = []
    },
    hiddenData() {
      this.keyword = ''
    },
    xianChu(i) {
      this.leftList.forEach((element) => {
        element.current = false
      })
      this.leftList[i].current = true
    }
  },
  computed: {
    hasData() {
      return !this.List.length
    }
  },

  watch: {
    // 监听keyword变化
    keyword() {
      // 使用clearTimeout和setTimeout集流函数，提高代码运行效率
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        // js逻辑主体部分，将关键词拼音字母或汉字与搜索源的spell和name分别进行对比
        // 判断关键词是否存在搜索源中
        for (const i in this.songs) {
          this.songs[i].forEach((value) => {
            if (
              value.name.indexOf(this.keyword) > -1 ||
              value.spell.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.List = result
      }, 100)
    }
  }
})
