let alunos = []
let repete = true;
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Aluno{
    constructor(name, notas){}
    setNotas(nota){
        if(!isNaN(nota)){
           notas.push(nota);
        }
        else[
            console.log("nota adicionada")
        ]
    }
    getBoletim(){
        let i = 1;
        notas.forEach(nota => {
            console.log(`nota numero ${i}: ${nota}`);
        });
    }

}

    function MakeQuestion(){
        rl.question("qual operação deseja fazer?", (operation)=>{
            SwithEither(operation);
        })
    }
    function SwithEither(operation){
        switch(operation){
            case "1":
                rl.question("Qual o nome do aluno", (name)=>{
                    alunos.push({
                        nome: name,
                        obj: new Aluno(name, [])
                    })
                    MakeQuestion();
                })
            break;
            case "2":
                rl.question("Qual o nome do aluno", (name)=>{
                    let aluno = alunos.find(element => element.nome == name);
                    console.log(aluno)
                    rl.question("Adicione a nota", (nota)=>{
                        aluno.obj.setNotas(nota);
                    });
                    MakeQuestion();
                })
            break;
        }
    }
MakeQuestion();
