import { DioAccount } from "./DioAccount"

export class DioAcountsEspecial extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (valor: number): void => {
    if (this.getStatus()) {
        const emprestimoEspecial = valor + 10
        this.setBalance(this.getBalance() + emprestimoEspecial)
        console.log('Deposito', emprestimoEspecial)
      }
}

 

}
