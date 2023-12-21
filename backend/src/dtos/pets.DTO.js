export class PetsDTO {
    constructor({ user_id, name, age, species, breed, size, eyes, hair, main_color, secondary_color, sex, description, pet_img, qr }) {
        this.user_id = user_id;
        this.name = name;
        this.age = age;
        this.species = species;
        this.breed = breed;
        this.size = size;
        this.eyes = eyes,
        this.hair = hair,
        this.main_color = main_color;
        this.sex = sex;
        this.description = description;
        this.pet_img = pet_img;
        this.qr = qr;

        if (secondary_color) {
            this.secondary_color = secondary_color;
        }
    }
}

export class UpdatePetInfoDTO {
    constructor({ name, age, species, breed, size, main_color, secondary_color, sex, description }) {
        if (name !== undefined) this.name = name;
        if (age !== undefined) this.age = age;
        if (species !== undefined) this.species = species;
        if (breed !== undefined) this.breed = breed;
        if (size !== undefined) this.size = size;
        if (main_color !== undefined) this.main_color = main_color;
        if (sex !== undefined) this.sex = sex;
        if (description !== undefined) this.description = description;
        if (secondary_color !== undefined) this.secondary_color = secondary_color;
    }
}