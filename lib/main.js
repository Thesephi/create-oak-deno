#!/usr/bin/env node

/**
 * executed by calling `npm create <package_name>`
 */

const isYes = require('./isYes')
const prompt = require('./prompt')
const path = require('node:path')
const fs = require('node:fs')
const { green, yellow } = require('./colors')

const initFile = path.resolve(__dirname, '.deno-json-init')

// the dir where we're doin stuff.
const curDir = process.cwd()

async function main() {

  const subDir = isYes ? './' : await prompt(
    'which directory would you like to use for your project? (leave empty to use the current one)',
    './'
  )
  const dir = path.join(curDir, subDir)

  try {
    globalThis.dirname = dir
    const denoJson = require(initFile)

    const denoJsonFileContent = JSON.stringify(denoJson, undefined, 2)
    const denoJsonFileName = 'deno.jsonc'
    const initFileOk = isYes ? 'y' : await prompt(
      `\nabout to create ${denoJsonFileName} file with the following content:\n${denoJsonFileContent}\nproceeding? (yes)`,
      'yes'
    )
    if (initFileOk !== 'y' && initFileOk !== 'yes') {
      process.exit()
    }

    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.join(dir, denoJsonFileName), denoJsonFileContent)

    fs.cpSync(
      path.resolve(__dirname, '../template'),
      dir,
      { recursive: true }
    )

    fs.renameSync(path.join(dir, '.gitignore.tpl'), path.join(dir, '.gitignore'))

    const fromCurToProjDir = path.relative(curDir, dir)

    console.log('\n' +
      yellow('project scaffolded, you can now do the following:\n\n') +
      (fromCurToProjDir && green(`cd ${fromCurToProjDir}\n`)) +
      green('deno run --allow-net --allow-env src/index.ts\n')
    )

  } catch (e) {
    if (e.message !== 'canceled') console.error('an error occurred', e.stack)
  }

}

main()
