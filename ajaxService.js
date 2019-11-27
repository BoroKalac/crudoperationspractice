function AjaxService(url) {
    var url = url;

    this.loadDataCollection = function(callbackFunction) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                array = JSON.parse(this.responseText);
                callbackFunction(array.slice(0, 10));
            };
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    this.getObject = function(id) {
        var xmlhttp = new XMLHttpRequest();
        var url = url + id;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            currentPost = JSON.parse(xmlhttp.response);
            document.getElementById("titleInput").value = currentPost.title;
            document.getElementById("bodyInput").value = currentPost.body;   
        };
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    };
    
    this.deleteObject = function(id) {
        //TODO
    };

    this.addObject = function() {

    };

    this.saveObject = function() {
        // ovde ces da odlucujes da li zoves update ili new
    }
}