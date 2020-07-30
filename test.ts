import { assertStringContains, assertEquals, fail } from "https://deno.land/std/testing/asserts.ts";
import { Utilities } from "./utilities.ts";

Deno.test("test it", async (): Promise<void> => {

    const randomNumberBetween10And100 = Utilities.getRandomArbitrary(10, 100)
    if (randomNumberBetween10And100 < 10 || randomNumberBetween10And100 > 100) {
        fail(`A number between 10 and 100 was expected`)
    } else {
        console.log(`\n\ncool - ${randomNumberBetween10And100} is a random number between 10 and 100`)
    }

});

