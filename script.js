let vez = '';

function comecar(item) {
    vez = item;
    document.querySelector('.botao-comecar').style.display = 'none';
    trocarmostrador();
    document.querySelector('.mostrarvez').style.display = 'block';
}

let gameitems = document.querySelectorAll('.game-item');
for(let i=0; i < gameitems.length; i++) {
    gameitems[i].addEventListener('click', ()=>{
        if (vez != '') {
            if (gameitems[i].getAttribute('jogou') == "") {
                gameitems[i].setAttribute('jogou', vez);
                if (vez == 'X') {
                    gameitems[i].innerHTML = '<i class="fa fa-times fa-lg" ></i>'
                } else {
                    gameitems[i].innerHTML = '<i class="fa fa-circle-o fa-lg" ></i>'
                }
                gameitems[i].style.cursor = 'default';
                trocarvez();
                trocarmostrador();
                if (verificarSeGanhou() != -1) {
                    setTimeout(() => {
                        alert('O ganhador é '+verificarSeGanhou())
                        resetar()
                    }, 100);
                } else if (verificarEmpate()) {
                    setTimeout(()=> {
                        alert('Ops! Infelizmente o jogo saiu empatado :C')
                        resetar()
                    }, 500)
                }

            }
        } else {
            alert('Escolha X ou O para começar!')
        }
    });
}


//Funções
function trocarvez() {
    if(vez == 'X') {
        vez = '0';
    } else {
        vez = 'X'
    }
}

function trocarmostrador(){
    if (vez == 'X') {
        document.querySelector('.mostrarvez > span').innerHTML = '<i class="fa fa-times fa-lg" ></i>'
    } else {
        document.querySelector('.mostrarvez > span').innerHTML = '<i class="fa fa-circle-o fa-lg" ></i>'
    }
}

function verificarSeGanhou() {
    if (verificador('a1','a2','a3') != -1) {
        return verificador('a1','a2','a3');
    }
    else if (verificador('b1','b2','b3') != -1) {
        return verificador('b1','b2','b3');
    }
    else if (verificador('c1','c2','c3') != -1) {
        return verificador('c1','c2','c3');
    }
    else if (verificador('a1','b1','c1') != -1) {
        return verificador('a1','b1','c1');
    }
    else if (verificador('a2','b2','c2') != -1) {
        return verificador('a2','b2','c2');
    }
    else if (verificador('a3','b3','c3') != -1) {
        return verificador('a3','b3','c3');
    }
    else if (verificador('a1','b2','c3') != -1) {
        return verificador('a1','b2','c3');
    }
    else if (verificador('a3','b2','c1') != -1) {
        return verificador('a3','b2','c1');
    }
    else {
        return -1;
    }
}

function verificador(item1, item2, item3) {
    if ((document.querySelector(`.${item1}`).getAttribute('jogou') != '' && document.querySelector(`.${item2}`).getAttribute('jogou') != '' && document.querySelector(`.${item3}`).getAttribute('jogou') != '')
        
        && (document.querySelector(`.${item1}`).getAttribute('jogou') == document.querySelector(`.${item2}`).getAttribute('jogou')) && (document.querySelector(`.${item1}`).getAttribute('jogou') == document.querySelector(`.${item3}`).getAttribute('jogou'))) {
        return document.querySelector(`.${item1}`).getAttribute('jogou');
    } else {
        return -1;
    }
}

function verificarEmpate(item) {
    let jogadas = 0;
    for(let i=0; i < gameitems.length; i++) {
        if (gameitems[i].getAttribute('jogou') != "") {
            jogadas++;
        }
    }
    if(jogadas >= 9) {
        return true;
    } else {
        return false
    }
}

function resetar() {
    vez = '';
    for(let i=0; i < gameitems.length; i++) {
        gameitems[i].innerHTML = ''
        gameitems[i].setAttribute('jogou', "")
        gameitems[i].style.cursor = 'pointer';
        document.querySelector('.botao-comecar').style.display = 'block';
        
        document.querySelector('.mostrarvez').style.display = 'none';
    }
}