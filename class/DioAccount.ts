export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number  => {
    return this.balance
  }
  
  // buscar o status nas classes filhas
  getStatus = (): boolean  => {
    return this.status
  }
  // buscar o setBalance nas classes filhas
  setBalance = (balance: number):void=> {
    this.balance += balance;
  }   
 /* Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

  Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques*/

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance += valor;
    }else{
      throw new Error('Contas com status falso não podem fazer deposito!')
    }

  }

  withdraw = (valor: number ): void => {
    if(this.validateStatus() && this.balance >= valor){
      this.balance -= valor
    }
    else{
      try{

      }catch{
        throw new Error('Contas com status falso não podem fazer saque!')
      }
    }  
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta desativada!')

  }
}
