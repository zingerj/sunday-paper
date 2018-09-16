// Listen for messages
var content = new Array();
chrome.runtime.onMessage.addListener(function (msg, send, sendResponse) {
    // If the received message has the expected format...
    // console.log(msg);
    if (msg['text'] === 'getDom') {
        // console.log(document.getElementsByClassName('elevate-h1 u-marginBottom16 u-md-marginBottom8')[0].textContent);
        var title = document.getElementsByClassName('elevate-h1 u-marginBottom16 u-md-marginBottom8')[0].textContent;
        var author = document.getElementsByClassName('ds-link ds-link--styleSubtle postMetaInline postMetaInline--author')[0].textContent;
        var date = document.getElementsByTagName('time')[0].innerText;
        var sectionContent = document.getElementsByClassName('section-content');
        for(var i = 0; i < sectionContent.length; i++){
            var Ps = sectionContent[i].getElementsByTagName('p');
            for (j = 0; j < Ps.length; j++) {
                console.log(Ps[j].innerText + "\n");
                content.push(Ps[j].innerText + "\n");
            }
        }
        var x = {
            'title': title,
            'author': author,
            'date': date,
            'content': content.join('\n'),
            'link': document.URL            
        };
        sendResponse(x);
    }
});