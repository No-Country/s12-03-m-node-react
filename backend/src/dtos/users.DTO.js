export class UsersDTO {
    constructor({ _id, first_name, last_name, email, password, registration_method, registration_date, phone, profile_img, age, last_connection, location, geo_point}) {
        this._id = _id
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.registration_method = registration_method;
        this.registration_date = registration_date;
        this.phone = phone;
        this.profile_img = profile_img;
        this.age = age;
        this.last_connection = last_connection;
        this.location = location;
        this.geo_point = geo_point
    }
}