class ContaBancaria{
  saldo = 0;
  numero;
  tipo;
  agencia = 1001;
  nome;
  constructor(nome){
      this.nome = nome;
      this.generetNumber();
  }
  generetNumber(){
      let num = Math.floor(Math.random() *100);
      if(Accounts.find(element => element.numero == num)){
          this.generetNumber();
      }
      else{
          this.numero = num;
      }
  }
  getSaldo(){
      return this.saldo;
  }
  Saque(value){
      if(value <= this.saldo){
          this.saldo -= value;
      }
      else{
          alert("não há como sacar esse valor! Saldo insuficiente")
      }
  }
  Deposito(value){
      this.saldo += value;
  }
}


class ContaCorrente extends ContaBancaria{
  super(){};
  cartaodeCredito;
  tipo = "Conta Corrente";
  getCredito(){
      return this.cartaodeCredito;
  }
  setCredito(value){
      this.cartaodeCredito = value;
  }

}

class ContaPoupanca extends ContaBancaria{
  tipo = "Conta Poupança"
  super(){}

}

class ContaUniversitaria extends ContaBancaria{
  super(){}
  tipo = "Conta Universitária";
  Saque(value){
      if(value <= this.saldo){
          if(value <= 500){
              this.saldo -= value;
          }
          else{
           alert("não há como sacar valores maiores que 500");
          }
      }
      else{
          alert("não há como sacar esse valor! Saldo insuficiente")
      }
  }
}
let Accounts = [];

function AddNewAccount(){
  let name = document.getElementById("text-name");
  let typeAccount = document.getElementById("selector");
  let account;
  let accountCreator = {
      "Poupança": ()=> account = new ContaPoupanca(name.value),
      "Corrente": ()=> account = new ContaCorrente(name.value),
      "Universitário": ()=> account = new ContaUniversitaria(name.value),
  }
  accountCreator[typeAccount.value]();
  Accounts.push(account);
  let shower = document.getElementById("contas");
      let newElement = document.createElement("option");
      newElement.innerHTML = account.nome;
      newElement.innerText = account.nome;
      shower.appendChild(newElement);    
}
function choose(){
  let value = document.getElementById("saque-value");
  let choice = document.getElementById("select-saque-deposito").value;
  console.log(choice)
  let contaNome = document.getElementById("contas");
  if(choice.toLowerCase() == "saque") {
      Accounts.forEach(element => {
          if(element.nome == contaNome.value){
              element.Saque(Number(value.value));
              alert("SAQUE EFETUADO - SALDO: "+ element.saldo);
          }
      });
  }
  else if(choice.toLowerCase() == "deposito"){
      Accounts.forEach(element => {
          if(element.nome == contaNome.value){
              element.Deposito(Number(value.value));
              alert("DEPOSITIO EFETUADO - SALDO: " + element.saldo);
          }
      });
      
  }
}
let inScene = [];
function visualizar(){
  let area = document .getElementById("areadevisualizacao");
  let i = 0;
  Accounts.forEach((e)=>{
      if(inScene[i] != e.nome){
          inScene.push(e.nome);
          let newElement = document.createElement("span");
          newElement.innerHTML = e.nome + ' - ' + e.tipo ;
          area.appendChild(newElement);
      }
      i++;
  })
}