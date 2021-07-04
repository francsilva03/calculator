let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}


function clean(){
    screen.value = '';
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    }catch (error) {
        screen.value = 'Err';
        setTimeout(()=>{
            clean();
        }, 500);
    }

}