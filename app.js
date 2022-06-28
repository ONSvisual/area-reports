import ObjectsToCsv from "objects-to-csv";

import fs from 'fs';

let outdata
fs.readFile('./static/data/lad_list_2021.json', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    outdata = data
    console.log(outdata[0])

    const obj = JSON.parse(outdata);

    const csv = new ObjectsToCsv(obj)
    const doSomething = async () => {
        await csv.toDisk('./list.csv')
    }
    doSomething()
  })