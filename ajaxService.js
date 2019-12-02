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

    this.getObject = function(id, callbackFunction) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                var responseObject = JSON.parse(xmlhttp.response); 
                callbackFunction(responseObject);
            };
        };
        xmlhttp.open("GET", url + id, true);
        xmlhttp.send();
        };
    
    this.deleteObject = function(id) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                var i;
                for(i = 0; i < array.length; i++) {
                if (array[i].id === id)
                array.splice(i, 1);
                };
            };
        };
        xmlhttp.open("DELETE", url + id, true);
        xmlhttp.send();
    };

    this.addObject = function() {

    };

    this.saveObject = function() {
        // ovde ces da odlucujes da li zoves update ili new
    }
}