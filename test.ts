import { fail, assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";
import { Utilities } from "./utilities.ts";
import { englishAlphabet } from "https://deno.land/x/nlp@1.2.1/alphabets.ts";

Deno.test("get random number between min and max value", async (): Promise<void> => {
    const randomNumberBetween10And100 = Utilities.getRandomArbitrary(10, 100, true)
    if (randomNumberBetween10And100 < 10 || randomNumberBetween10And100 > 100) {
        fail(`A number between 10 and 100 was expected`)
    } else {
        console.log(`\n\ncool - ${randomNumberBetween10And100} is a random number between 10 and 100`)
    }
});

Deno.test("get next x dates", async (): Promise<void> => {
    const arrayWithDates: string[] = Utilities.getNextXDates(3)

    console.log(JSON.stringify(arrayWithDates))
    assertEquals(3, arrayWithDates.length)

});

Deno.test("get snippet", async (): Promise<void> => {

    const text = 'someblablaThis is Great :)someOtherBlaBla'

    const snippet = Utilities.getSnippetBetween('someblabla', 'someOtherBlaBla', text)
    assertEquals('This is Great :)', snippet)

});

Deno.test("get number of days between", async (): Promise<void> => {
    try {
        const result = Utilities.getNumberOfDaysBetween(new Date('2020-03-12'), new Date('2020-03-13'))

        console.log(JSON.stringify(result))
        assertEquals(1, result)
    } catch (error) {
        // tbd
    }
});

Deno.test("get number of occurrences in text", async (): Promise<void> => {
    const result = Utilities.getNumberOfOccurrencesInText('abc', 'fooabcagainabcsomething')

    assertEquals(2, result)

});

Deno.test("replace all occurrences of ... in text", async (): Promise<void> => {
    const result = Utilities.replaceAllOccurrencesOf('abc', '', 'fooabcagainabcsomething')

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

