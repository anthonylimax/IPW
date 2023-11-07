class Aluno{
    constructor(nome){

        this.name = nome;
        this.index = 0;
        this.boletim = [0,0,0,0];
    }
    Boletim(){
        let media = 0;
        this.boletim.forEach((element) => media += element/4);
        alert(`As notas do aluno ${this.nome} são: ${this.boletim[0]},${this.boletim[1]},${this.boletim[2]},${this.boletim[3]}; e sua média final é ${media}.`);
        if(media < 7 && this.index == 4){
            alert("esse aluno foi reprovado");
        }
    }
    AdicionarNotas(nota){
        if(this.boletim.length <= 3){
            this.boletim[this.index] = nota;
            this.index++;
            alert("nota adicionada com sucesso");
        }
        else{
            alert("as notas já foram fechadas");
        }
    }
}

let alunos = [];
let running = true;
while(running){
let opc = prompt("Bem vindo ao sistema de gerenciamento escolar! 1- Adicionar Nota, 2 - Adicionar Aluno, 3- Ver Boletim")
switch(Number(opc)){ 
    case 1: 
    let i = true;
    do{
        
    let nome = prompt("Qual o nome do aluno? ")
    let aluno = alunos.find(element => element.name.toLowerCase() == nome.toLowerCase())
        if(aluno){
        let nota = prompt("Qual o nota do aluno? ")
        nota = Number(nota);
            if(nota < 0 && nota > 10){
                alert("tente um valor dentro do limite ou um numero aceitavel")
            }
            else{
                aluno.AdicionarNotas(nota);
                i = false;
            }
        }
        else{
            alert("Não há alunos com esse nome")
        }
    }while(i);
    break;
    case 2: 
    let choices = prompt("Adicionar um novo aluno. Qual o nome do aluno? ")
    let newAluno = new Aluno(choices);
    alunos.push(newAluno);
    break;
    case 3:
    let nome = prompt("qual o nome do aluno?");
    let aluno = alunos.find(element => element.name.toLowerCase() == nome.toLowerCase())
    aluno.Boletim();
    break;
    case 4:
        running = false;
    break;
}
}