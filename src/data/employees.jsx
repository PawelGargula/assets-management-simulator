class Employee {
    constructor(fullName, email, contractType, salary, hireDate) {
        this.fullName = fullName;
        this.email = email;
        this.contractType = contractType;
        this.salary = salary;
        this.hireDate = hireDate;
    }
}

export const employees = [
    new Employee("Jan Kowalski", "jan.kowalski@domain.com", "Employment Contract", "$2000", "10/1/2020"),
    new Employee("Monika Kowalska", "monika.kowalski@domain.com", "Freelance Contract", "$3000", "12/2/2021"),
    new Employee("Marek Kowalski", "marek.kowalski@domain.com", "Freelance Contract", "$2500", "15/5/2022"),
    new Employee("Paweł Kowalski", "pawel.kowalski@domain.com", "Freelance Contract", "$2800", "24/11/2023"),
    new Employee("Patryk Kowalski", "patryk.kowalski@domain.com", "Employment Contract", "$5000", "1/10/2021"),
]