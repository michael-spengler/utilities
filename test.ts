import { fail, assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { Utilities } from "./utilities.ts";
// import { Utilities } from "https://deno.land/x/utilities@1.0.0/utilities.ts";
import { englishAlphabet } from "https://deno.land/x/nlp/alphabets.ts";

Deno.test("get random number between min and max value", async (): Promise<void> => {
    const randomNumberBetween10And100 = Utilities.getRandomArbitrary(10, 100)
    if (randomNumberBetween10And100 < 10 || randomNumberBetween10And100 > 100) {
        fail(`A number between 10 and 100 was expected`)
    } else {
        console.log(`\n\ncool - ${randomNumberBetween10And100} is a random number between 10 and 100`)
    }
});

Deno.test("get next x dates", async (): Promise<void> => {
    const arrayWithDates: string[] = Utilities.getNextXDates('2020-03-12', 3)

    console.log(JSON.stringify(arrayWithDates))
    assertEquals(4, arrayWithDates.length)

});

Deno.test("get number of days between", async (): Promise<void> => {
    const result =  Utilities.getNumberOfDaysBetween('2020-03-12', '2020-03-13')

    console.log(JSON.stringify(result))
    assertEquals(1, result)

});

Deno.test("get number of occurrences in text", async (): Promise<void> => {
    const result =  Utilities.getNumberOfOccurrencesInText('abc', 'fooabcagainabcsomething')

    assertEquals(2, result)

});

Deno.test("replace all occurrences of ... in text", async (): Promise<void> => {
    const result =  Utilities.replaceAllOccurrencesOf('abc', 'fooabcagainabcsomething')

    assertEquals('fooagainsomething', result)

});

Deno.test("shuffle array", async (): Promise<void> => {
    const unshuffledArray: string[] = englishAlphabet
    const shuffledArray = Utilities.shuffleArray(unshuffledArray)
    console.log(unshuffledArray)
    console.log(shuffledArray)
    assertNotEquals(unshuffledArray, shuffledArray)
    assertEquals(shuffledArray.length, unshuffledArray.length)
});

