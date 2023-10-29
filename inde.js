let nomeDoHeroi = "Homem de Ferro"
let quantidadeExperiencia =7000


switch (true) 
{
    case  (quantidadeExperiencia) <= 1000: 
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + " Ferro");
        break

    case (1001 <= quantidadeExperiencia && quantidadeExperiencia <= 2000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + " Bronze");
        break
    
    case (2001 <= quantidadeExperiencia && quantidadeExperiencia <= 5000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + " Prata"); 
        break   
    
    case (6001 <= quantidadeExperiencia && quantidadeExperiencia <= 7000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + " Ouro");
        break

    case (7001 <= quantidadeExperiencia && quantidadeExperiencia <= 8000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + " Platina");    
        break

    case (8001 <= quantidadeExperiencia && quantidadeExperiencia <= 9000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + " Ascedente");  
        break
     
    case (9001 <= quantidadeExperiencia && quantidadeExperiencia <= 10000):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + "Imortal");
        break
    
    case  (quantidadeExperiencia >= 10001):
    console.log("O herói de nome " + nomeDoHeroi + " está no nível de :" + "Radiante");
        break
}
