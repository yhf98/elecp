#!/usr/bin/env node

const downgit = require('download-git-repo')
const extract = require('extract-zip')
const ora = require('ora')
const chalk = require("chalk");
const fs = require('fs-extra');
const path = require('path')
const inquirer = require('inquirer');
const commander = require("commander");

const { pkgJSON } = require('./template');

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
    const questions = [
        {
            type: 'confirm',
            name: 'confirmation',
            message: '是否使用阿里云OSS镜像加速?',
            default: false, // 默认为 false，即 "NO"
        },
    ];

    inquirer
        .prompt(questions)
        .then((answers) => {
            //   const spinner = ora('项目初始化中···').start();
            if (answers.confirmation) {
                console.info("Aliyun OSS")
                const spinner = ora('项目初始化中···').start();
                const download = require('download');
                let tempalteFileName = "electron-v3-ts-tempalte.zip";

                (async () => {
                    await download('https://angular001.oss-cn-beijing.aliyuncs.com/handle/electron-v3-ts-tempalte.zip', './');
                    try {
                        await extract(path.join(process.cwd(), tempalteFileName), { dir: process.cwd() })
                        fs.unlinkSync(tempalteFileName);
                        fs.writeFileSync("package.json", pkgJSON(projectName));
                        spinner.stop()
                        console.log(chalk.green('项目初始化完成！'))
                    } catch (err) {
                        spinner.stop()
                        console.log(chalk.red('项目初始化失败！'))
                    }
                })();
            } else {
                console.info("Github")
                const spinner = ora('项目初始化中···').start();
                try {
                    downgit('github:yhf98/electron-v3-ts-tempalte', process.cwd(), { clone: false }, function (err) {
                        spinner.stop()
                        if (err) {
                            throw err
                        }
                        console.log(chalk.green('项目初始化完成！'))
                        fs.writeFileSync("package.json", pkgJSON(projectName));
                    })
                } catch (err) {
                    console.log(chalk.red(err))
                    spinner.stop()
                }
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

})
// 定义版本
commander.version("0.0.4");
// 绑定解析
commander.parse(process.argv);



