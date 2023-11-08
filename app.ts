import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { DioAcountsEspecial } from './class/DioAcountsEspecial'


function contaPessoa (){
    const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Davi Nicollas', 1)

    const deposito = 200, saque = 185;
    console.log("Nome da conta:"     ,peopleAccount.getName());
    console.log("Valor inicial:"     ,peopleAccount.getBalance());
    peopleAccount.deposit(deposito);
    console.log("Deposito:",peopleAccount.getBalance())
    peopleAccount.withdraw(saque);
    console.log("Saque: ", saque );
    console.log("Valor Total:"       ,peopleAccount.getBalance())
}

function contaEmpresarial (){
    const companyAccount: CompanyAccount = new CompanyAccount('TOP SOFTWARE', 2000)

    const deposito = 200, saque = 185;
    console.log("Nome da conta:"     ,companyAccount.getName());
    console.log("Valor inicial:"     ,companyAccount.getBalance());
    companyAccount.deposit(deposito);
    console.log("Deposito:",companyAccount.getBalance())
    companyAccount.withdraw(saque);
    console.log("Saque: ", saque );
    console.log("Valor Total:"       ,companyAccount.getBalance())
}



function contaEspecial (){
    const specialAccount: DioAcountsEspecial = new DioAcountsEspecial('TOP SOFTWARE CTO', 4000)
   
    const deposito = 200, saque = 185;
    console.log("Nome da conta:"     ,specialAccount.getName());
    console.log("Valor inicial:"     ,specialAccount.getBalance());
    specialAccount.deposit(deposito);
    console.log("Deposito:",specialAccount.getBalance())
    specialAccount.withdraw(saque);
    console.log("Saque: ", saque );
    console.log("Valor Total:"       ,specialAccount.getBalance())
}

function executar(){
    contaPessoa();
    console.log('\n');
    contaEspecial();
    console.log('\n');
    contaEmpresarial();

}

executar()
