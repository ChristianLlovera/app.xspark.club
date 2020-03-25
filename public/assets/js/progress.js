var url = '/assets/js/bundle.js';
var oReq = new XMLHttpRequest();
oReq.addEventListener("progress", updateProgress);
oReq.open("GET", url);
oReq.send();

// progress on transfers from the server to the client (downloads)
function updateProgress(oEvent) {

    var loader = document.querySelector('.progress')

    if (loader) {
        if (oEvent.lengthComputable) {
            var bar = document.querySelector('#progress-bar')
            var num = document.querySelector('#progress-int')
            var percentComplete = oEvent.loaded / oEvent.total * 100;

            if (bar) {
                num.innerText = `${parseInt(percentComplete)}%`
                bar.value = percentComplete;
            }

        } else {
            console.log('no medible')
        }
    }

}


