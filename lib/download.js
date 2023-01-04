import download from "download-git-repo";
import path from "path";
import ora from "ora";
import logSymbols from "log-symbols";
import chalk from "chalk";
import CONST from '../conf/const'

const download = function (target, url) {
  const spinner = ora(`正在下载项目模板`);
  target = path.join(CONST.TEMPLATE_NAME);
  spinner.start();
  return new Promise((resolve, reject) => {
    download(`direct:${url}`, target, { clone: true }, (err) => {
      if (err) {
        spinner.fail();
        console.log(logSymbols.fail, chalk.red("模板下载失败:("));
        reject(err);
      } else {
        spinner.succeed();
        console.log(logSymbols.success, chalk.green("模板下载完毕:)"));
        resolve(target);
      }
    });
  });
};

export default download
