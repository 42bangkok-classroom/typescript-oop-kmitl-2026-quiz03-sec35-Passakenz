class student {
    firstname: string
    lastname:string

    constructor(firstname: string, lastname: string){
        this.firstname = firstname
        this.lastname = lastname
    }
    printname(){
        console.log(this.firstname + ' ' + this.lastname)
    }
}


export class Student {
    firstname: string = ''
    lastname: string = ''

    constructor(firstname?: string, lastname?: string){
        if (firstname) this.firstname = firstname
        if (lastname) this.lastname = lastname
    }

    printName(){
        console.log(this.firstname + ' ' + this.lastname)
    }
}
