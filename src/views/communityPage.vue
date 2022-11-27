<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins&display=swap">
  <link rel="stylesheet" href="https://fonts.font.im/css?family=Lobster">
  <div class="body">
    <div id="header">
      <a href="/blog" class="logoLand">LAND</a>
      <ul>
        <li><a href="/blog">Home0</a></li>
        <li><a href="/blog">Home1</a></li>
        <li><a href="/blog">Home2</a></li>
        <li><a href="/blog">Home3</a></li>
      </ul>
    </div>
    <div class="section">
      <h2 id="text"><span>It's time for</span><br>Blogging</h2>
      <img src="../assets/imgs/bird.png" id="bird">
      <img src="../assets/imgs/mountain.png" id="mountain">
      <img src="../assets/imgs/river.png" id="river">
      <img src="../assets/imgs/tree.png" id="tree">
      <a href="/blog" id="button">Explore</a>
    </div>
    <div class="community">
      <h2>abcd</h2>
      <p>IT之家讯 与现有的USB 3.0接口相比，USB 3.1标称的接口传输速率从5Gbps直接翻倍到了10Gbps。不过，在实际环境下，它能达到现有USB 3.0接口两倍的传输速度吗？外媒AnandTech为我们带来了实际的测试，一起来看看。

        68370daef67c1e13899ba8726eb94421.png

        不过，由于目前还没有基于USB 3.1接口的外设，因此这次测试中AnandTech所使用的是ASMedia的USB 3.1测试开发板。它搭载了ASMedia的ASM1352R控制器，提供两个SATA 6Gbps接口，支持RAID 0阵列。测试过程中使用的开发板装有两块英特尔Intel 530 240GB固态硬盘，以达到最高性能。

        68370daef67c1e13899ba8726eb94421.png

        测试平台方面，AnandTech采用了Intel的酷睿i7-5960X ES处理器(8核心、16线程、3.0GHz主频，动态睿频3.5GHz)；32GB DDR4-2133内存；华硕R7 240 2GB显存显卡；OCZ Vertex 3 256GB固态硬盘；1250W OCZ NX电源；主板为微星的MSI X99A Gaming 9 ACK，带有两个Type-A接口。它是从ASMedia提供的芯片扩展而来，使用PCI-E 2.0 x2通道，接口理论带宽为10Gbps。此外这块主板上还带有基于VIA芯片扩展而来的USB 3.0接口，用于与USB 3.1接口之间的对比。

        68370daef67c1e13899ba8726eb94421.png

        从测试结果来看，USB 3.1接口的实际性能要比USB 3.0高出不少，连续读写速度在500MB/s到600MB/s左右，最高成绩甚至可以突破700MB/s。而USB 3.0接口方面，其连续读写速率大概在300MB/s到400MB/s左右。

        68370daef67c1e13899ba8726eb94421.png

        68370daef67c1e13899ba8726eb94421.png

        虽然USB 3.1标称的接口理论速率是10Gbps，但是其还保留了部分带宽用以支持其他功能，因此其实际的有效带宽大约为7.2Gbps，理论传输速度应该可以达到900MB/s，因此AnandTech也认为，现在的USB 3.1接口还有很大的提升空间，至少应该达到800MB/s的水平。

        什么是USB 3.1？USB 3.1是目前最新的USB传输接口规范，由USB-IF协会推出。除了编码方式改进、传输速率提升外，它还大幅提升了接口的供电能力，USB3.1接口有望同时为平板电脑等设备进行充电。其连接端接口采用Type-A、Type-B、Type-C三种类型。能够向下兼容USB 3.0和USB 2.0设备，还将提供USB 3.1 A/V影音传输，最高支持每秒30帧的4K视频画面输出，并同时支持声音传输。

        68370daef67c1e13899ba8726eb94421.png

        68370daef67c1e13899ba8726eb94421.png

        ▼以下是AnandTech带来的部分跑分数据。</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.move);
  },
  methods:{
    move() {
      let text = document.getElementById('text');
      let button = document.getElementById('button');
      let bird = document.getElementById('bird');
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      text.style.top = 20+top*0.1 + '%';
      button.style.top = 50+top*0.1 + '%';
      bird.style.right = top + 'px';
    }
  },
  unmounted() {
    window.removeEventListener('scroll', this.move);
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.body {
  overflow-x: hidden;
  background: white;
}
#header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 100px;
  display: flex;
  align-items: center;
  z-index: 2;
}
#header .logoLand {
  color: black;
  font: 1000 30px 'Poppins';
  font-size: 2em;
  text-decoration: none;
}
#header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100%;
}
#header ul li {
  list-style: none;
  margin-left: 20px;
}
#header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: black;
  border-radius: 20px;
}
#header ul li a:hover,
#header ul li a.active {
  background: #036881;
  color: white;
}
.section {
  position: relative;
  display: flex;
  margin-top: 90px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
.section img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.section #text {
  position: absolute;
  top: 20%;
  color: #094b65;
  font-size: 4vw;
  text-align: center;
  font-family: 'Lobster', cursive;
}
.section #text span {
  font-size: 0.5em;
  letter-spacing: 2px;
  font-weight: 800;
}
.section #button {
  position: absolute;
  top: 50%;
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  background: white;
  color: #094b65;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
}
.community {
  position: relative;
  padding: 100px;
  background: #036881;
}
</style>