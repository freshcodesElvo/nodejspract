const {readFile, writeFile} = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Function to read file asynchronously
// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err)
//             {
//                reject(err)
//             }
//             else{
//                resolve(data)    
//             }
//        })

//     })
// }

// getText('./content/first.txt')
//     .then((result )=>console.log(result))
//     .catch((err) => console.log(err))


    const start = async() =>{
        try{
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWSOME: ${first}, ${second}`, {flag: 'a'});
        console.log(first, second);
        }
        catch(err){
            console.log(err);
        }
       
    }

    start();