console.log('Started');

let index:number = 0;

const run = async () => {
    console.log(`Running ${index++}`);
    setTimeout( run, 3000 );
}

run();