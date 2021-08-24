function calcular() {
    var typeCalc = String(window.document.querySelector("#type").value);
    var entry = Number(window.document.querySelector("#entry").value);
    var heigth = Number(window.document.querySelector("#heigth").value);
    var exit = Number(document.querySelector("#exit"));
    var y0;

    if(typeCalc == 'LR'){
        y0 = limiteRapido(soma(entry, heigth));
        return y0;
    } else if (typeCalc == 'FR'){
        y0 = funcaoRampa(soma(entry, heigth));
        return y0;
    }else if(typeCalc == 'FS'){
        y0 = funcaoSigmoide(soma(entry, heigth));
    }

    function soma(_entry, _heigth){
        var soma;
        soma = _entry * _heigth;
        return soma;
    }

    function limiteRapido(_soma){
        if(_soma <= 0){
           exit =  document.getElementById('exit').innerHTML = `-1`;
        } else {
           exit = document.getElementById('exit').innerHTML = `1`;
        } 
    }

    function funcaoRampa(_soma) {
        if(_soma < 0){
            exit =  document.getElementById('exit').innerHTML = `0`;
        }else if(0 <= _soma && _soma <= 1){
            exit =  document.getElementById('exit').innerHTML = `${_soma}`;
        }else{
            exit =  document.getElementById('exit').innerHTML = `1`;
        }
        
    }

    function funcaoSigmoide(_soma){
        if(_soma >= 0){
            var fsFinal = 1 - 1/(1 + _soma);
            exit =  document.getElementById('exit').innerHTML = `${fsFinal.toFixed(2)}`;
        } else {
            var fsFinal = -1 +1 /(1 - _soma);
            exit =  document.getElementById('exit').innerHTML = `${fsFinal.toFixed(2)}`;
        }
    }

}