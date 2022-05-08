import backtop from "components/common/backtop/backtop";

export const mbacktop = {
  data() {
    return {isbacktop: false}
  },
  components: {
    backtop
  },
  methods: {
    topclick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenerbackshow(position) {
      this.isbacktop = -(position.y) > 1000;
    }
  }
}
