<template>
  <el-card class="box-card">
    <el-input v-model="ip" placeholder="请输入ip"/>
    <el-button type="primary" @click="submitip" size="large">提交ip</el-button>
    <el-input disabled v-model="serverip"/>
    <el-button type="primary" @click="searchip" size="large">查询ip</el-button>
  </el-card>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ref, computed } from "vue";
import axios from 'axios'
const ip = ref("");


const serverip = ref('')

function validateIP(ip) {
  // IP 地址的正则表达式，包括了 IPv4 和 IPv6 的格式验证
  const regex =
    /^(?:(?:^|\.)(?:\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])){4}$|^(?:(?:^|:)(?:[a-fA-F0-9]{1,4})){8}$/;

  return regex.test(ip);
}

const submitip = async() => {
  // 格式验证通过 进行提交 发送axios请求
  if (validateIP(ip.value)) {
    const result = await axios.post('//webapi/url路径',ip)
    // 返回结果，根据状态分类
    console.log(result) 
    
    /* 如果成功
      ElMessage({
      showClose: true,
      message: '成功信息',
      type: 'success',
    })
    */

  /*
    如果失败
    ElMessage({
    showClose: true,
    message: '失败信息',
    type: 'warning',
  })
  */  
  } else {
    ElMessage.error("ip格式错误");
  }
};


// ip查询  发送axios请求
const searchip = async()=>{
  const result = await axios.get('/webapi/url地址')
  console.log(result)
  /*
    查询成功
    serverip.value = 返回的ip

    查询出错
    ElMessage({
    showClose: true,
    message: '错误信息',
    type: 'warning',
  */
}
</script>

<style>
.el-card {
  width: 800px;
  height: 600px;
  margin: 20px auto;
}
.el-input {
  height: 50px;
  margin-top: 80px;
}
.el-button {
  margin-top: 15px;
}
ul {
  list-style-type: none;
}
</style>