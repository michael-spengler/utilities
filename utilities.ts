export class Utilities {

    public static async delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    public static getRandomArbitrary(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min)
    }

    public static shuffleArray(unshuffledArray: any[]): any[] {
        let theNewOne = unshuffledArray.slice()
        theNewOne = theNewOne.sort((a, b) => 0.5 - Math.random())
        return theNewOne
    }

    public static getNextXDates(startDate: string, numberOfDays: number): string[] {
        let counter = 0
        let arrayOfDates = [startDate]
        while (counter < numberOfDays) {
            counter += 1
            arrayOfDates.push('2021-03-12')
        }

        return arrayOfDates
    }

    public static getNumberOfDaysBetween(startDate: string, endDate: string): number {
        return 1
    }

    public static getNumberOfOccurrencesInText(searchString: string, text: string): number {
        let counter = 0
        console.log(text)
        while (text.indexOf(searchString) !== -1){
            counter += 1
            text = text.replace(searchString, '')
        }
        return counter
    }


    public static replaceAllOccurrencesOf(searchString: string, text: string): string {
        let result = text
        while (result.indexOf(searchString) !== -1){
            result = result.replace(searchString, '')
        }
        return result

    }
}