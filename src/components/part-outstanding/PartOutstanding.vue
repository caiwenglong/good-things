<template>
  <div class="part-outstanding">
    <el-row :gutter="20">
      <el-col :span="8">
        <div>
          <div class="courses-container">
            <div class="course">
              <div class="course-info">
                <div class="progress-container">
                  <div class="progress"></div>
                  <span class="progress-text">
                    6/9 Challenges
                  </span>
                </div>
                <h6>Chapter 4</h6>
                <h2>Callbacks & Closures</h2>
                <button class="btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <div class="courses-container">
            <div class="course">
              <div class="course-info">
                <div class="progress-container">
                  <div class="progress"></div>
                  <span class="progress-text">
                    6/9 Challenges
                  </span>
                </div>
                <h6>Chapter 4</h6>
                <h2>Callbacks & Closures</h2>
                <button class="btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <div class="courses-container">
            <div class="course">
              <div class="course-info">
                <div class="progress-container">
                  <div class="progress"></div>
                  <span class="progress-text">
                    6/9 Challenges
                  </span>
                </div>
                <h6>Chapter 4</h6>
                <h2>Callbacks & Closures</h2>
                <button class="btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ElRow, ElCol } from 'element-plus'

export default defineComponent({
  name: 'PartOutstanding',
  components: {
    ElRow,
    ElCol
  },
  setup() {
    const data = reactive({})

    return {
      data
    }
  }
})
</script>
<style lang="scss" scope>

.part-outstanding {
  position: absolute;
  bottom: -62px;
  width: 100%;
}

.el-row {
  margin: 0;
}

.course {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  max-width: 100%;
  overflow: hidden;
  width: 100%;
}

.course h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.course h2 {
  letter-spacing: 1px;
  margin: 10px 0;
}

.course-preview {
  background-color: #2a265f;
  color: #fff;
  padding: 30px;
  max-width: 250px;
}

.course-preview a {
  color: #fff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
}

.course-info {
  padding: 30px;
  position: relative;
  width: 100%;
}

.progress-container {
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  width: 150px;
}

.progress {
  background-color: #ddd;
  border-radius: 3px;
  height: 5px;
  width: 100%;
}

.progress::after {
  border-radius: 3px;
  background-color: #2a265f;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 66%;
}

.progress-text {
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 1px;
}

.btn {
  background-color: #2a265f;
  border: 0;
  border-radius: 50px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 12px;
  padding: 8px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
}
</style>