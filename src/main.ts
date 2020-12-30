#!/usr/bin/env node

import yargs from 'yargs';


yargs
  .scriptName("cent")
  .usage('$0 <cmd> [args]')
  .commandDir('commands', { recurse: true })
  .help()
  .argv