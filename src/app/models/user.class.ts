export class User {
    //id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number; // Timestamp reinkopieren
    address: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) { // Zuweiseung der Werte des hineingegebenen Objektes zu den Feldern der Klasse.
        //this.id = obj ? obj.id : "";
        this.firstName = obj ? obj.firstName : ""; // if else Abfrage schneller geschrieben. Wenn das Objekt existiert, dann obj.firstname und sonst ein leerer String.
        this.lastName = obj ? obj.lastName : "";
        this.email = obj ? obj.email : "";
        this.birthDate = obj ? obj.firstName : "";
        this.address = obj ? obj.address : "";
        this.zipCode = obj ? obj.zipCode : "";
        this.city = obj ? obj.city : "";
    }

/*     public toJSON() {
        return {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'birthDate': this.birthDate,
            'address': this.address,
            'zipCode': this.zipCode,
            'city': this.city
        };
    } */
}