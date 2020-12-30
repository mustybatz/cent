import  { Argv } from 'yargs';
import { handler_module } from './banner.handler';

export const command: string = 'banner';

export const describe: string = 'Prints a beautiful banner';

export const builder = (arg: Argv) => {}

export const handler = handler_module;

