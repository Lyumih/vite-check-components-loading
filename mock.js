const fs = require('fs');
const path = require('path');

const MOCK_DIR = './large/src/lib/mock'
const MOCK_FILE_INDEX = path.join(MOCK_DIR, 'index.tsx')

console.log('Mock', MOCK_FILE_INDEX)


const updateIndexFile = () => {
  console.log(`Update ${MOCK_FILE_INDEX}`)
  fs.readFile(MOCK_FILE_INDEX, 'utf8', (err, data) => {
    console.log(data)
    console.log(data.split('\n'))
  })
}

updateIndexFile()