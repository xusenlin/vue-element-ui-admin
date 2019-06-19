// 用于帮助 webstrom 识别 @ 路径跳转，其实没有什么用，可以直接删除，修改也不会影响到项目
'use strict'
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src')
        }
    }
}