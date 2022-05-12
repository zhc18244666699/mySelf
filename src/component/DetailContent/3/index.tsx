import styles from './index.less';

export default function DetailContainer_3() {
  return (
    <div className={styles.detail_content}>
      <h5>拥有一个可以本地运行的node项目</h5>
      <h6>搭建项目文件夹</h6>
      <p>
        -新建一个项目文件夹 用 npm init -y初始化项目文件夹生成package.json
        -将项目文件夹在终端中打开，使用npm install express -S命令安装express
        -将打包好的前端项目拷贝进当前文件夹，我以vue脚手架打包的dist文件夹为例子
      </p>
      <h6>编写项目入口</h6>
      <p>-新建一个名为app.js的文件在文件中写入如下代码</p>
      <pre>const express = require('express')</pre>
    </div>
  );
}
