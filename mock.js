const fs = require('fs');
const path = require('path');

const MOCK_DIR = './large/src/lib/mock'
const PATH_MOCK_FILE_INDEX = path.join(MOCK_DIR, 'index.tsx')
const MOCK_ITEMS_DIR = path.join(MOCK_DIR, 'item')

const LENGTH_FILE_IMPORTS = process.argv.slice(2)[0] || 0;


console.log('Mock', LENGTH_FILE_IMPORTS, PATH_MOCK_FILE_INDEX)

const generateIndexFileContent = () => {
  const items = fs.readdirSync(MOCK_ITEMS_DIR)
  const result = items.
    slice(PATH_MOCK_FILE_INDEX)
    .map(item => item.replace('.tsx', ''))
    .map(fileName => `export * from './item/${fileName}';`)
    .map((line, index) => index < LENGTH_FILE_IMPORTS ? line : '// ' + line)
    .join('\n')
  // console.log(result)
  return result
}

const updateIndexFile = () => {
  console.log(`Update ${PATH_MOCK_FILE_INDEX}`, LENGTH_FILE_IMPORTS)
  const indexContent = generateIndexFileContent()
  fs.writeFile(PATH_MOCK_FILE_INDEX, indexContent, (err) => {
    console.log(err)
  })
  // fs.readFile(MOCK_FILE_INDEX, 'utf8', (err, data) => {
  //   console.log('aaa', indexContent)
  //   console.log(data)
  //   console.log(data.split('\n'))
  // })
}

updateIndexFile()
// generateIndexFileContent()