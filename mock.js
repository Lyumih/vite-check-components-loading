const fs = require('fs');
const path = require('path');

const MOCK_DIR = './large/src/lib/mock'
const MOCK_FILE_INDEX = path.join(MOCK_DIR, 'index.tsx')
const MOCK_ITEMS_DIR = path.join(MOCK_DIR, 'item')

console.log('Mock', MOCK_FILE_INDEX)

const getItemsSize = () => {
  const size = fs.readdirSync(MOCK_ITEMS_DIR).length
  console.log('Items size: ' + size)

  return size.length
}

const updateIndexFile = () => {
  console.log(`Update ${MOCK_FILE_INDEX}`)
  getItemsSize()
  fs.readFile(MOCK_FILE_INDEX, 'utf8', (err, data) => {
    console.log(data)
    console.log(data.split('\n'))
  })
}

updateIndexFile()