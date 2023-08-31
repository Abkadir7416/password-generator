const button = document.querySelector('#generatePassword');

    let password = ""
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "0123456789"
    let symbol = "!@#$%^&*+="

const generate = () => {
    var password = "";
    let count = 0;
    while(count < 12){
        const inputs = document.querySelectorAll('.small-box input');
        inputs.forEach((input) => {
            var index = Math.random();
            if(input.checked){
                if(input.id == 'number'){
                    console.log('number');
                    count++;
                    password += number.charAt(Math.floor(index*10));
                }
                
                if(input.id == 'lowercase'){
                    console.log('lowercase');
                    count++;
                    password += lower.charAt(Math.floor(index*26));
                }

                if(input.id == 'uppercase'){
                    console.log('uppercase');
                    count++;
                    password += upper.charAt(Math.floor(index*26));
                }

                if(input.id == 'symbol'){
                    console.log('symbol');
                    count++;
                    password += symbol.charAt(Math.floor(index*10));
                }
            }
        })
        
    }
    console.log('password ', password);
    return password;

}


button.addEventListener('click', ()=>{

    let random = Math.random();
    console.log(random);

    let password = generate();
    document.querySelector('#input').value = password;

})