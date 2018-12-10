const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const {promisify} = require('util');

const pGlob = promisify(glob);

const imgsDir = path.join('./src/assets/', '**/*.+(jpg|png)');

pGlob(imgsDir)
    .then(files => {
        Promise.all(
            files.filter(file => !/\.(thumb|primitive|trace)\./.test(file)).map(processFile)
        )
    });

function processFile(file) {
    console.log(`Processing file ${file}`);
    const process = (...callers) => Promise.all(callers.map(caller => caller(file)))
    return process(generateThumb);
}

const addThumbToName = filePath => {
    const parts = filePath.split('.')
    return [parts[0], '.thumb.', parts[1]].join('')
};

function generateThumb(file) {
    const thumb = addThumbToName(file);
    return sharp(file)
        .resize(64, 64)
        .max()
        .toFile(thumb)
        .then(() => console.info(`Outputed file ${thumb}`))
}
