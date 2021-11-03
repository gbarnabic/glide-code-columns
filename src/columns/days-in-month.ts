import * as glide from "../glide";

function lastDay(y: number, m: number) {
    return new Date(y, m + 1, 0).getDate();
}

export default glide
    .columnNamed("DaysInMonth")
    .withCategory("Date & Time")
    .withReleased("direct")
    .withDescription("Days in month of passed date. (defaults to current date)")
    .withAuthor("George", "george@glideapps.com")
    .withAbout(
        `
        To be continued.
    `
    )

    .withDateParam("date")
    .withStringResult()
    .withTest(
        {
            date: "2020-10-21T14:35:46.216Z",
        },
        31
    )
    .withTest(
        {
            date: "2014-02-21T14:35:46.100Z",
        },
        28
    )
    .withTest(
        {
            undefined,
        },
        30
    )

    .run(({ date }) => {
        let date2: Date;
        if (date === undefined) {
            date2 = new Date();
        } else {
            date2 = new Date(date);
        }

        let year = date2.getFullYear();
        let month = date2.getMonth();

        return lastDay(year, month);
    }) as number;
