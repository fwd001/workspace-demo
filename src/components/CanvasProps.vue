<template>
  <div>
    <!-- 选中为空 -->
    <div v-if="!props.node && !props.line && !props.multi">
      <!-- <div class="title">欢迎使用</div> -->
      <div class="bottom">
        <div class="title">小提示</div>
        <ul class="group">
          <li>方向键：控制节点移动5个像素</li>
          <li>Ctrl + 方向键：控制节点移动1个像素</li>
          <li>Ctrl + 鼠标移动：移动整个画布</li>
          <li>Ctrl + 鼠标滚轮：缩放</li>
        </ul>
      </div>
    </div>
    <!-- 选中节点 -->
    <div v-if="props.node">
      <div class="group">
        <div class="title">位置和大小</div>
        <div class="items">
          <div class="flex grid">
            <div>X（px）</div>
            <div class="ml5">Y（px）</div>
            
          </div>
          <div class="flex grid">
            <div>
              <a-input-number :disabled="this.props.readonly" size="small" v-model="props.node.rect.x" @change="onChange('node')" />
            </div>
            <div class="ml5">
              <a-input-number :disabled="this.props.readonly" size="small" v-model="props.node.rect.y" @change="onChange('node')" />
            </div>
          </div>
        </div>
        <div class="items">
          <div class="flex grid">
            <div>宽（px）</div>
            <div class="ml5">高（px）</div>
          </div>
          <div class="flex grid">
            <div>
              <a-input-number
              :disabled="this.props.readonly"
                size="small"
                v-model="props.node.rect.width"
                @change="onChange('node')"
              />
            </div>
            <div class="ml5">
              <a-input-number
              :disabled="this.props.readonly"
                size="small"
                v-model="props.node.rect.height"
                @change="onChange('node')"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 字体 -->
      <div class="group">
        <div class="title">字体</div>
        <div class="items">
          <div class="flex grid">
            <div>字体大小</div>
            <div class="ml5">字体粗细</div>
          </div>
          <div class="flex grid">
            <div>
              <a-input-number
              :disabled="this.props.readonly"
                size="small"
                v-model="props.node.font.fontSize"
                @change="onChange('node')"
              />
            </div>
            <div class="ml5">
              <a-select
              :disabled="this.props.readonly"
                size="small"
                v-model="props.node.font.fontWeight"
                @change="onChange('node')"
                style="width: 90%"
              >
                <a-select-option value="lighter">更细</a-select-option>
                <a-select-option v-if="props.node.font.fontWeight" value="normal">默认</a-select-option>
                <a-select-option v-else value>默认</a-select-option>
                <a-select-option value="bold">加粗</a-select-option>
                <a-select-option value="bolder">更粗</a-select-option>
              </a-select>
            </div>
          </div>
        </div>

        <div class="items">
          <div class="flex grid">
            <div>颜色</div>
          </div>
          <div class="flex grid">
            <div>
               <!-- <input type="color" v-model="props.node.fillStyle" @change="onChange" /> -->
               <colorPicker :disabled="this.props.readonly" class="iconColo2" v-model="props.node.font.color" @input="onChange"/>
               <!-- <color-p v-model="props.node.font.color" @input="onChange"></color-p> -->
            </div>
            <div class="ml5">
            </div>
          </div>
        </div>
        <div class="items">
          <div class="flex grid">
            <div>内容</div>
          </div>
          <div class="flex grid">
            <a-textarea
            :disabled="this.props.readonly"
              size="small"
              v-model="props.node.text"
              @change="onChange('node')"
              :rows="4"
            />
          </div>
        </div>
      </div>
      <!-- 字体图标 -->
      <div class="group">
        <div class="title mb5">字体图标</div>
        <div class="flex input-line middle mb10">
          <label>字体图标</label>
          <div class="pointer icon" @click="showDialog">
            <i v-if="icon" :class="['iconfont1', icon.class]"></i>
            <div v-else class="blank" title="空白"></div>
          </div>
        </div>
        <div v-show="dialog" class="tools">
          <div class="title flex middle">
            <label class="full">选择字体图标</label>
            <i class="iconfont icon-close hover" @click="hideDialog"></i>
          </div>
          <div class="body">
            <div :class="['icon', {active: !icon}]" @click="onClickIcon(null)">
              <div class="blank" title="空白"></div>
            </div>
            <div
              v-for="(item, index) in icons"
              :key="index"
              :class="['icon', {active: item.checked}]"
              @click="onClickIcon(item)"
            >
              <i :class="['iconfont1', item.class]"></i>
            </div>
          </div>
        </div>
        <div class="flex input-line">
          <label>字体大小</label>
          <div>
            <a-input-number
              size="small"
              :max="500"
              :min="-1"
              :disabled="!icon || this.props.readonly"
              :defaultValue="0"
              v-model="props.node.iconSize"
              @change="onChange"
            />
          </div>
        </div>
        <div class="flex input-line">
          <label>字体颜色</label>
          <div>
            <colorPicker :disabled="this.props.readonly" class="iconColo1" v-model="props.node.iconColor" @input="onChange"/>
          </div>
        </div>
      </div>
      <!-- 外观 -->
      <div class="group">
        <div class="title mb5">外观</div>
        <div class="items">
          <div class="flex grid">
            <div>边框粗细</div>
          </div>
          <div class="flex grid">
            <div>
              <a-input-number
              :disabled="this.props.readonly"
                size="small"
                v-model="props.node.lineWidth"
                @change="onChange('node')"
              />
            </div>
          </div>
        </div>
        <div class="items">
          <div class="flex grid">
            <div>背景颜色</div>
          </div>
          <div class="flex grid">
            <div>
              <colorPicker :disabled="this.props.readonly" class="iconColo2" v-model="props.node.fillStyle" @input="onChange"/>
              <!-- <input type="color" v-model="props.node.fillStyle" @input="onChange" /> -->
            </div>
          </div>
        </div>

        <div class="items">
          <div class="flex grid">
            <div>透明度（0 - 1）</div>
          </div>
          <div class="flex grid">
            <div>
              <a-input-number
              :disabled="this.props.readonly"
                size="small"
                :step="0.1"
                v-model="props.node.globalAlpha"
                @change="onChange('node')"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 数据 -->
      <div class="group">
        <div class="title">数据</div>
        <div class="mt5">备注</div>
        <div>
          <a-textarea size="small" :disabled="this.props.readonly" v-model="props.node.data" @change="onChange('node')" :rows="4" />
        </div>
      </div>
    </div>

    <!-- 选中连线 -->
    <div v-if="props.line">
      <div class="group">
        <div class="title">位置</div>
        <div>起点</div>
        <div class="flex grid mt5">
          <div>
            <a-input-number
            :disabled="this.props.readonly"
              size="small"
              placeholder="X（px）"
              :value="props.line.from.x"
              @change="(e) => {onChangeLine(e, 'from', 'x')}"
            />
          </div>
          <div>
            <a-input-number
            :disabled="this.props.readonly"
              size="small"
              placeholder="Y（px）"
              :value="props.line.from.y"
              @change="(e) => {onChangeLine(e, 'from', 'y')}"
            />
          </div>
        </div>
        <div class="mt5">终点</div>
        <div class="flex grid">
          <div class="mr5">
            <a-input-number
            :disabled="this.props.readonly"
              size="small"
              placeholder="X（px）"
              :value="props.line.to.x"
              @change="(e) => {onChangeLine(e, 'to', 'x')}"
            />
          </div>
          <div>
            <a-input-number
            :disabled="this.props.readonly"
              size="small"
              placeholder="Y（px）"
              :value="props.line.to.y"
              @change="(e) => {onChangeLine(e, 'to', 'y')}"
            />
          </div>
        </div>
        <div class="flex grid mt5">
          <div class="mr5">起点箭头</div>
          <div>终点箭头</div>
        </div>
        <div class="flex grid">
          <div class="mr5">
            <div class="rel">
              <a-select
                :disabled="this.props.readonly"
                size="small"
                :defaultValue="props.line.fromArrow"
                style="width: 90%"
                @change="onClickFromArrow"
              >
                <a-select-option v-for="(item, index) in arrowTypes" :key="index" :value="item">
                  <i :class="`header-drop iconfont icon-to-${item}`"></i>
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div>
            <div class="rel">
              <a-select
              :disabled="this.props.readonly"
                size="small"
                :defaultValue="props.line.toArrow"
                style="width: 90%"
                @change="onClickToArrow"
              >
                <a-select-option v-for="(item, index) in arrowTypes" :key="index" :value="item">
                  <i :class="`header-drop iconfont icon-to-${item}`"></i>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
const icons = [
  { class: "icondb", unicode: "58925" },
  { class: "iconshangse", unicode: "58918" },
  { class: "iconxiazai", unicode: "58975" }
];

export default {
  data() {
    return {
      icons,
      dialog: false,
      icon: null,
      drowdown: 0,
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
  props: {
    props: {
      type: Object,
      require: true
    }
  },
  watch: {
    props: {
      //深度监听，可监听到对象、数组的变化
      handler(val, oldVal) {
        if (this.props && this.props.node && this.props.node.icon) {
          if (this.icon) {
            this.icon.checked = false;
          }
          for (const item of icons) {
            item.checked = false;
            // console.log('测试空', this.props.node.icon)
            if (String.fromCharCode(+item.unicode) === this.props.node.icon) {
              item.checked = true;
              this.icon = item;
              break;
            }
          }
        } else {
          for (const item of icons) {
            item.checked = false;
          }
          this.icon = null;
        }
      },
      deep: true //true 深度监听
    }
  },
  created() {
    console.log(this.$store)
  },
  computed: {},
  components: {
  },
  methods: {
    onChange(value) {
      // debugger
      if (value === "node") {
        this.$emit("change", this.props.node);
      } else {
        this.$emit("change");
        this.reload();
      }
    },
    // 强制刷新组件
    reload() {
      this.$forceUpdate();
    },
    onChangeLine(e, type, point) {
      // const value = e.target.value
      console.log(e, type, point);
      this.props.line[type][point] = e;

      this.onChange("line");
    },
    showDialog() {
      this.dialog = true;
    },
    hideDialog() {
      this.dialog = false;
    },
    onClickIcon(item) {
      if (this.icon) {
        this.icon.checked = false;
      }
      // const _node = JSON.parse(JSON.stringify(this.props.node))
      if (item) {
        item.checked = true;
        this.props.node.iconFamily = "iconfont1";
        this.props.node.icon = String.fromCharCode(+item.unicode);
      } else {
        this.props.node.iconFamily = "";
        this.props.node.icon = "";
      }
      console.log(item);
      this.icon = item;
      this.$emit("change", this.props.node);
      this.hideDialog();
    },
    onClickFromArrow(arrow) {
      this.props.line.fromArrow = arrow;
      this.drowdown = 0;
      this.onChange("line");
    },
    onClickToArrow(arrow) {
      this.props.line.toArrow = arrow;
      this.drowdown = 0;
      this.onChange("line");
    }
  }
};
</script>

<style src='./CanvasProps.less' lang="less"></style>
