import ObjectsToCsv from "objects-to-csv";

import fs from 'fs';

let areas = fs.readFileSync('./static/data/lad_list_2021.json', 'utf8')
const areasobj = JSON.parse(areas);
let reports = fs.readFileSync('./static/areareportsprgen.json', 'utf8')
const reportsobj = JSON.parse(reports);

areasobj.forEach(e => {
    let article = reportsobj[e['code']].split(`<! -- Start of th article \\/-->`)[1]
    e['standfirst'] = article.split()
});

const doSomething = async () => {
    const csv = new ObjectsToCsv(areasobj)
    await csv.toDisk('./list.csv')
}

doSomething()