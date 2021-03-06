<template>
  <div class="workSpaceLayout">
    <!-- 顶部导航栏 -->
    <a-row class="headers" type="flex" justify="start">
      <a-col class="item pointer">
        <a href="/">
          <img src="/favicon.ico" />
        </a>
      </a-col>
      <a-col class="item">
        <a-dropdown >
          <a class="ant-dropdown-link" href="#">
            文件
          </a>
          <a-menu slot="overlay" @click='onMenu'>
            <a-menu-item key="new">新建文件</a-menu-item>
            <a-menu-item key="save">保存到本地</a-menu-item>
            <a-menu-item key="savePng">下载为PNG</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
      <a-col class="full"></a-col>
      <a-col class="item">
        <div>视图：{{scale}}%</div>
      </a-col>
      <a-col class="item">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
           <i :class="`header-drop iconfont icon-${lineName}`"></i>
          </a>
          <a-menu slot="overlay">
            <a-menu-item
              v-for="(item, index) in lineNames"
              :key="index"
              :index="`line-${item}`"
              @click="onState('lineName', item)"
            >
              <i :class="`header-drop iconfont icon-${item}`"></i>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
      <a-col class="item">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
             <i :class="`header-drop iconfont icon-from-${fromArrowType}`"></i>
          </a>
          <a-menu slot="overlay">
            <a-menu-item
              v-for="(item, index) in arrowTypes"
              :key="index"
              :index="`fromArrow-${item}`"
              @click="onState('fromArrowType', item)"
            >
              <i :class="`header-drop iconfont icon-from-${item}`"></i>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
      <a-col class="item">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
           <i :class="`header-drop iconfont icon-to-${toArrowType}`"></i>
          </a>
          <a-menu slot="overlay">
            <a-menu-item
              v-for="(item, index) in arrowTypes"
              :key="index"
              :index="`toArrow-${item}`"
              @click="onState('toArrowType', item)"
            >
              <i :class="`header-drop iconfont icon-to-${item}`"></i>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
      <a-col class="item"></a-col>
    </a-row>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkSpaceLayout",
  components: {},
  data() {
    return {
      lineNames: ["curve", "polyline", "line"],
      arrowTypes: [
        "",
        "triangleSolid",
        "triangle",
        "diamondSolid",
        "diamond",
        "circleSolid",
        "circle",
        "line",
        "lineUp",
        "lineDown"
      ]
    };
  },
  computed: {
    scale() {
      return Math.floor(this.$store.state.canvas.data.scale * 100)
    },
    lineName() {
      return this.$store.state.canvas.data.lineName;
    },
    fromArrowType() {
      return this.$store.state.canvas.data.fromArrowType;
    },
    toArrowType() {
      return this.$store.state.canvas.data.toArrowType;
    },
    error() {
      return this.$store.state.notice.error;
    }
  },
  methods: {
    onState(key, value) {
      this.$store.commit("event/emit", {
        name: "state",
        data: {
          key,
          value
        }
      });
    },
    onMenu({key, keyPath}) {
      console.log(key)
      if (!key || key.indexOf("/") === 0) {
        return;
      }

      switch (key) {
        default:
          this.$store.commit("event/emit", {
            name: key
          });
          break;
      }
    }
  }
};
</script>

<style lang="less" src='./WorkSpaceLayout.less'></style>
