const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  pages: {
    template: {
      // page 的入口
      entry: 'src/pages/template/index.js',
      // 模板来源
      template: 'src/pages/template/index.html',
      // 在 dist/index.html 的输出
      filename: 'template.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Template Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'template']
    },
    index: {
      entry: 'src/pages/index/index.js',
      template: 'src/pages/index/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}

// let glob = require('glob')

// //配置pages多页面获取当前文件夹下的html和js
// function getEntry(globPath) {
//     let entries = {}, tmp, htmls = {};

//     // 读取src/pages/**/底下所有的html文件
//     glob.sync(globPath+'html').forEach(function(entry) {
//         tmp = entry.split('/').splice(-3);
//         htmls[tmp[1]] = entry
//     })

//     // 读取src/pages/**/底下所有的js文件
//     glob.sync(globPath+'js').forEach(function(entry) {
//         tmp = entry.split('/').splice(-3);
//         entries[tmp[1]] = {
//             entry,
//             template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', //  当前目录没有有html则以共用的public/index.html作为模板
//             filename: tmp[1] + '.html'   //  以文件夹名称.html作为访问地址
//         };
//     });
//     console.log(entries)
//     return entries;
// }
// let htmls = getEntry('./src/pages/**/*.');
// 
// module.exports = {
//   pages: htmls
// }
