console.log(global);

function sayHi() {
	return 10 + 30;
}

console.log(sayHi())

const fs = require('fs-extra');

fs.ensureDirSync('NewDir')

const file = './NewDir/file.txt'

fs.ensureFileSync(file)

fs.ensureDirSync('Dir2')

fs.moveSync('./NewDir/file.txt', './Dir2/file.txt')

fs.ensureDirSync('Folder')

fs.copySync('./Dir2/file.txt', './Folder/file.txt')

fs.removeSync('./Dir2')

fs.removeSync('./Folder')

fs.removeSync('./NewDir' )



