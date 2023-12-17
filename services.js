export const getDatesOfCurrentWeek = () => {
    const now = new Date()
    const week = new Array()

    const start = now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)
    const end = start + 6;

    for (let i = start; i <= end; i++) {
        let date = new Date(now.setDate(i))
        let dd = date.getDate()
        let mm = date.getMonth() + 1

        if (dd < 10)
            dd = '0' + dd;
        if (mm < 10)
            mm = '0' + mm;

        week.push(dd + '.' + mm);
    }

    return week;
}