#!/usr/bin/env node

const downgit = require('download-git-repo')
const ora = require('ora')
const chalk = require("chalk");
const fs = require('fs-extra');

const { pkgJSON } = require('./template');

const commander = require("commander");
// 定义指令 -a，可使用 --help查看到帮助信息
commander.option("-a", "this is test -a", () => {
    console.log('a console')
})
// 定义指令 -a 带参数 <num> 尖括号参数必填   [num] 中括号参数可选
commander.option("-a <num>", "this is test -a", (num) => {
    console.log('a console', num)
})
// 定义命令 elecp create xxx
commander.command('create <projectName>').action((projectName) => {
    const spinner = ora('项目初始化中···').start();
    downgit('github:yhf98/electron-v3-ts-tempalte', process.cwd(), {clone:false}, function(err){
        spinner.stop()
        if(err){
            throw err
        }
        console.log(chalk.green('项目初始化完成！'))
        fs.writeFileSync("package.json", pkgJSON(projectName));
    })
})
// 定义版本
commander.version("0.0.1");
// 绑定解析
commander.parse(process.argv);



