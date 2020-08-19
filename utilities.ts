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

    public static getDateString(date: any) {
        let day = date.getUTCDate().toString()
        let month = (date.getMonth() + 1).toString()
        let year = date.getUTCFullYear()

        if (day.length === 1) {
            day = `0${day}`
        }

        if (month.length === 1) {
            month = `0${month}`
        }
        const it = `${year}-${month}-${day}`

        return it
    }


    public static getNumberOfDaysBetween(startDate: string, endDate: string): number {
        return 1
    }

    public static getNumberOfOccurrencesInText(searchString: string, text: string): number {
        let counter = 0
        console.log(text)
        while (text.indexOf(searchString) !== -1) {
            counter += 1
            text = text.replace(searchString, '')
        }
        return counter
    }


    public static replaceAllOccurrencesOf(searchString: string, text: string): string {
        let result = text
        while (result.indexOf(searchString) !== -1) {
            result = result.replace(searchString, '')
        }
        return result

    }
}