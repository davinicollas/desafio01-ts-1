import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  /*Implementar o método de empréstimo (getLoan) na classe CompanyAccount
    Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
    Apenas contas com o status true podem fazer empréstimo*/
  getLoan = (valor: number): void => {
    if(this.getStatus()){
      this.deposit(valor);
    }else{
      console.log('Contas com status falso não podem fazer emprestimo!')
    }
  }
}
