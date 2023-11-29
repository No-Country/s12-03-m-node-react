export class PetsDTO {
    constructor({ userId, name, age, species, breed, mainColor, secondaryColor, sex, description, img, qr }) {
        this.userId = userId;
        this.name = name;
        this.age = age;
        this.species = species;
        this.breed = breed;
        this.mainColor = mainColor;
        this.sex = sex;
        this.description = description;
        this.img = img;
        this.qr = qr;

        if (secondaryColor) {
            this.secondaryColor = secondaryColor;
        }
    }
}