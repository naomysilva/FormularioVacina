 function mascara(){
     var cpf =document.getElementById('cpf');
     if(cpf.value.length == 3 || cpf.value.length == 7){
         cpf.value += '.'
     } else if(cpf.value.length == 11){
         cpf.value += '-'
     }
     console.log(cpf.value)
 }

function validar(){
    var nome = document.getElementById('texnome').value;
    var sobrenome = document.getElementById('inp2').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;






    

        if(nome == '' || nome.length < 2){
            alert("campo nome vazio ou entrada errada")
            return
        }
        if(sobrenome == '' || sobrenome.length < 2){
            alert("campo sobrenome vazio ou entrada errada")
            sobrenome.focus();
            return

       
        }
        if (email == "") {
            alert("E-mail não informado");
            return;
        }
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
          if (regex.test(telefone)) { 
              return
          }
          else {
           alert("Telefone Entrada Invalida")

          }
          if(rua == ''){
            alert("campo rua vazio")
            rua.focus();
            return

       
        }
        if(bairro == '' ){
            alert("campo bairro vazio")
            bairro.focus();
            return

       
        }
        if(cidade == ''){
            alert("campo cidade vazio")
            cidade.focus();
            return

       
        }
        if(estado == ''){
            alert("campo estado vazio")
            estado.focus();
            return

       
        }

}

    
 
