// const calculate = () => {
//   const a = parseFloat(document.getElementById('a').value);
//     const b = parseFloat(document.getElementById('b').value);
//       const c = parseFloat(document.getElementById('c').value);

//       const result = document.getElementById('result');

//       const d = b * b - 4 * a * c;
//       if(d>0){

//       }

// }

const calculate = () => {
    const a = parseFloat(document.getElementById('a').value);
   const b = parseFloat(document.getElementById('b').value);
      const c = parseFloat(document.getElementById('c').value);

      const result = document.getElementById('result');
  const dis = b * b - 4 * a * c;

  if(dis > 0){
    const root1 = (-b + Math.sqrt(dis)) / (2 * a);
    const root2 = (-b - Math.sqrt(dis)) / (2 * a);
    result.innerHTML = `The roots are: x=${root1.toFixed(2)}, <br> y= ${root2.toFixed(2)}`;

  } else if (dis === 0) {
      const root = (-b / (2*a)).toFixed(2);
      result.innerHTML = `root x = ${root.toFixed(2)}`;
  }else{
    const r = (-b / (2*a)).toFixed(2);
    const i = (Math.sqrt(-dis) / (2*a)).toFixed(2);
    result.innerHTML = `Complex root: x = ${r.toFixed(2)} + ${i}i, y = ${r} - ${i}i`;
  }

};

document.getElementById('calcBtn').addEventListener('click', calculate);
   

