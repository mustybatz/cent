import  { Argv } from 'yargs';
import { init_handler } from './init.handler';

export const command: string = 'init';

export const describe: string = 'Generates a cent project';

export const builder = (arg: Argv) => {}

export const handler = init_handler;

