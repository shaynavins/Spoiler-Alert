document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick () {
        chrome.tabs.query({currentWindow: true, active: true},

            function (tabs) {
                //alert("just here");
                chrome.tabs.sendMessage(tabs[0].id, "spoiler in here!", setCount);

            })
        
        }
    function setCount (res) {
        //alert("almost here");
        const div = document.createElement("div");
        //alert($(res.count));
        div.textContent = `${res.count} spoilers`

    
        document.body.appendChild(div)
    }
}, false)

