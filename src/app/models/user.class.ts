export class User {
    firstName: string;
    lastName: string;
    birthDate: number; // Timestamp reinkopieren
    address: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) { // Zuweiseung der Werte des hineingegebenen Objektes zu den Feldern der Klasse.
        this.firstName = obj ? obj.firstName : ""; // if else Abfrage schneller geschrieben. Wenn das Objekt existiert, dann obj.firstname und sonst ein leerer String.
        this.lastName = obj ? obj.lastName : "";
        this.birthDate = obj ? obj.firstName : "";
        this.address = obj ? obj.address : "";
        this.zipCode = obj ? obj.zipCode : "";
        this.city = obj ? obj.city : "";
    }

    public toJSON() {
        return {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'birthDate': this.birthDate,
            'address': this.address,
            'zipCode': this.zipCode,
            'city': this.city
        };
    }
}