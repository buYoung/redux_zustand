import { faker } from "@faker-js/faker";
import { UserData } from "src/type/userData.ts";

export function generateData(): UserData {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zip: faker.location.zipCode(),
        country: faker.location.country(),
        company: faker.company.name(),
        job: faker.person.jobTitle(),
        description: faker.lorem.paragraph(),
        date: faker.date.recent().toISOString(),
        image: faker.image.avatar(),
    };
}
