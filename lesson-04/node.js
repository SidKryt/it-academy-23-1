const fs = require('fs-extra');

const foldersPath = "/vscode/it-academy-23-1/lesson-04/"
const folder1Path = foldersPath + "Folder1/"
const folder2Path = foldersPath + "Folder2/"
const folder3Path = foldersPath + "Folder3/"
const fileName = "text.txt"

fs.ensureDirSync(folder1Path)
fs.ensureFileSync(folder1Path + fileName)
fs.ensureDirSync(folder2Path)
fs.moveSync(folder1Path + fileName, folder2Path + fileName, {owerwrite: true})
fs.ensureDirSync(folder3Path)
fs.copyFileSync(folder2Path + fileName, folder3Path + fileName)
fs.removeSync(folder2Path + fileName)
fs.removeSync(folder3Path + fileName)
fs.removeSync(folder1Path)
fs.removeSync(folder2Path)
fs.removeSync(folder3Path)


