const fs = require('fs');
const path = require('path');

const MOCK_DIR = './large/src/lib/mock'
const MOCK_FILE_INDEX = path.join(MOCK_DIR, 'index.tsx')
const MOCK_ITEMS_DIR = path.join(MOCK_DIR, 'item')

const LENGTH_FILE_IMPORTS = 1;

console.log('Mock', MOCK_FILE_INDEX)

const getItemsSize = () => {
  const size = fs.readdirSync(MOCK_ITEMS_DIR).length
  console.log('Items size: ' + size)

  return size.length
}

const generateIndexFileContent = () => {
  const items = fs.readdirSync(MOCK_ITEMS_DIR)
  const result = items.
    slice(MOCK_FILE_INDEX)
    .map(item => item.replace('.tsx', ''))
    .map(fileName => `export * from './item/${fileName};`)
    .map((line, index) => index < LENGTH_FILE_IMPORTS ? line : '\\\\ ' + line)
    .join('\n')
  console.log(result)
  return result
}

const updateIndexFile = () => {
  console.log(`Update ${MOCK_FILE_INDEX}`, LENGTH_FILE_IMPORTS)
  getItemsSize()
  fs.readFile(MOCK_FILE_INDEX, 'utf8', (err, data) => {
    console.log(data)
    console.log(data.split('\n'))
  })
}

// updateIndexFile()
generateIndexFileContent()