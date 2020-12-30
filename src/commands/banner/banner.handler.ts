import figlet from 'figlet';
import chalk from 'chalk';
import clear from 'clear';
import { Argv } from 'yargs';

export const handler_module = (argv: Argv) => {
    clear();
    console.log(chalk.yellow(
        figlet.textSync('cent', {
            font: 'ANSI Shadow',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })
    ));
}