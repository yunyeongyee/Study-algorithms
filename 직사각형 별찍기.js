process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = '*'.repeat(a) //가로 5
   for (let i=0; i<b; i++){
       //세로 3
       console.log(star)
   }
});