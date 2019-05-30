<template>
    <div class="ahn-bar">
        <echarts :op="options"></echarts>
    </div>
</template>

<script>
import echarts from "@/components/echarts.vue";
export default {
  name: "pie",
  components: {
    echarts
  },
  data() {
    return {
      options: {
        // backgroundColor: "#031845",
        color: ["#22c2f0", "#28f19b", "#fcfa3c", "#f44061"],
        title: {
          text: "总数：260",
          //  subtext: 7789,
          textStyle: {
            color: "#f2f2f2",
            fontSize: 40
            // align: 'center'
          },
          subtextStyle: {
            fontSize: 30,
            color: ["#ff9d19"]
          },
          x: "center",
          y: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          icon: "circle",
          bottom: 20,
          x: "center",
          textStyle: {
            color: "#fff"
          },
          data: ["已处理", "未处理", "处理中"]
        },
        series: [
          {
            name: "",
            type: "gauge",
            radius: "45%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 100,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 126,
              lineStyle: {
                width: 4,
                color: "#031845"
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 0,
                name: ""
              }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "45%"],
            silent: true,
            z: 0,
            // zlevel: 0,
            label: {
              normal: {
                formatter: "{b|{b}:}{c|{c}}",
                position: "top",
                rich: {
                  b: {
                    fontSize: 20,
                    color: "#fff",
                    verticalAlign: "top",
                    // paddingBottom: 30,
                    x: 70
                  },

                  c: {
                    fontSize: 20,
                    verticalAlign: "top",
                    color: "#30c7ee",
                    align: "left"
                    // padding: 4
                  }
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 0,
                length2: 30,
                lineStyle: {
                  type: "solid",
                  width: 2
                }
              }
            },
            data: [
              {
                value: 150,
                name: "已处理"
              },
              {
                value: 30,
                name: "未处理"
              },
              {
                value: 80,
                name: "处理中"
              }
            ]
          },
          {
            name: "",
            type: "pie",
            radius: ["37%", "38%"],
            silent: true,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            z: 2,
            zlevel: 0,
            data: [
              {
                value: 60.5,
                name: "",
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#274f2d"
                  }
                }
              },
              {
                value: 90.6,
                name: "",
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#ed0f33"
                  }
                }
              },
              {
                value: 90.6,
                name: "",
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#795b21"
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  computed: {}
};
</script>

<style lang="less" scoped>
.ahn-bar {
  width: 100%;
  height: 100%;
  p {
    color: #fff;
    font-size: 20px;
  }
}
</style>
