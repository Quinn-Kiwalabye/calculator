(function(){
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let equal = document.querySelector('.btn-equal');
  let clear = document.querySelector('.btn-clear');
  let vars;

    buttons.forEach(function(button){

        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
  
    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            console.log(screen.value)
            screen.value = answer;
        }
    })
 clear.addEventListener('click', function(e){
    screen.value = ''
 })

 let arrayNum = [2, 5, 15, 4, 100, 92]
 let myDiv = document.getElementById('f')
 let lowerThen = []
 for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (element< 50){
        lowerThen.push(element)
    }
    
 }
 myDiv.innerHTML = "i love levente"
})();