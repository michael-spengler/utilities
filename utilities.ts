export class Utilities {

    public static async delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    public static getRandomArbitrary(min: number, max: number, round: boolean = false) {
        if (round) {
            return Math.round(Math.random() * (max - min) + min)
        } else {
            return Math.random() * (max - min) + min
        }
    }

    public static shuffleArray(unshuffledArray: any[]): any[] {
        let theNewOne = unshuffledArray.slice()
        theNewOne = theNewOne.sort((a, b) => 0.5 - Math.random())
        return theNewOne
    }

    public static getNextXDates(numberOfDays: number): string[] {
        let counter = 0
        var today = new Date();


        let arrayOfDates = []
        while (counter < numberOfDays) {
            var theDate = new Date();
            theDate.setDate(today.getDate() + counter);
            arrayOfDates.push(Utilities.getDateString(theDate))

            counter += 1
        }

        return arrayOfDates
    }

    public static getDateString(date: Date) {
        return date.toISOString().split('T')[0]
    }


    public static getNumberOfDaysBetween(startDate: Date, endDate: Date): number {
        return Math.floor((endDate.getTime()-startDate.getTime())/1000/60/60/24)
    }

    public static getSnippetBetween(delimiter1: string, delimiter2: string, text: string): string {
        const snippet = text
            .split(delimiter1)[1]
            .split(delimiter2)[0]

        return snippet
    }

    public static getNumberOfOccurrencesInText(searchString: string, text: string): number {
        return text.split(searchString).length-1
    }


    public static replaceAllOccurrencesOf(searchString: string, replacementText: string, text: string): string {
        let result = text
        while (result.indexOf(searchString) !== -1) {
            result = result.replace(searchString, replacementText)
        }
        return result
    }
}
