import logSymbols from 'log-symbols';
import chalk from 'chalk';
const log = console.log;

export default {
  info: (...str) => {
    log(logSymbols.info, chalk.blue(...str))
  },
  succes: (...str) => {
    log(logSymbols.success, chalk.green(...str))
  },
  warn: (...str) => {
    log(logSymbols.warning, chalk.yellow(...str))
  },
  error: (...str) => {
    log(logSymbols.error, chalk.red(...str))
  },
}