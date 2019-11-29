function CurrentPost() {
    var url = 'https://jsonplaceholder.typicode.com/posts/';    

    var ajaxService = new AjaxService(url);
    var ui = new Ui();
    var call = function(responseObject) {
        ui.showPostDetails(responseObject)
    };
    this.loadPostDetails = function(id) {
        ajaxService.getObject(id, call);
    };
    
    };
