const fs = require('fs');
const path = require('path');

const MOCK_DIR = './large/src/lib/mock'
const PATH_MOCK_FILE_INDEX = path.join(MOCK_DIR, 'index.tsx')
const MOCK_ITEMS_DIR = path.join(MOCK_DIR, 'item')

const LENGTH_FILE_IMPORTS = +process.argv.slice(2)[0];

if (!LENGTH_FILE_IMPORTS) {
  console.warn('Please add number of needed files in argument script')
  return
}

console.log('Mock', LENGTH_FILE_IMPORTS, PATH_MOCK_FILE_INDEX)

const generateMockItems = () => {
  const items = fs.readdirSync(MOCK_ITEMS_DIR)
  console.log(items)
  for (let i = items.length; i < LENGTH_FILE_IMPORTS; i++) {
    const fileName = `Mock${i}.tsx`
    const content = `import { MockItem, IMockItem } from '../../MockItem';\nexport const Mock${i} = (props: IMockItem) => <MockItem index={props.index} />`
    fs.writeFile(path.join(MOCK_ITEMS_DIR, fileName), content, err => {
      console.log(`Generated ${fileName}`)
    })
  }
}

const generateIndexFileContent = () => {
  const items = fs.readdirSync(MOCK_ITEMS_DIR)
  const result = items.
    slice(PATH_MOCK_FILE_INDEX)
    .map(item => item.replace('.tsx', ''))
    .map(fileName => `export * from './item/${fileName}';`)
    .map((line, index) => index < LENGTH_FILE_IMPORTS ? line : '// ' + line)
    .join('\n')
  return result
}


const updateIndexFile = () => {
  console.log(`Update ${PATH_MOCK_FILE_INDEX}`, LENGTH_FILE_IMPORTS)
  const indexContent = generateIndexFileContent()
  fs.writeFile(PATH_MOCK_FILE_INDEX, indexContent, (err) => {
  })
}

generateMockItems();
updateIndexFile()