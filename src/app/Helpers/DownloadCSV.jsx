import jsonexport from 'jsonexport'

const DownloadCSV = data => jsonexport(data, (err, csv) => {
    const dowloadLink = document.querySelector('#download')
    if (err) return console.log(err)
    let csvContent = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv)
    dowloadLink.setAttribute("href", csvContent)
    dowloadLink.click()
})

export default DownloadCSV