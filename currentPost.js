function CurrentPost() {
    var url = 'https://jsonplaceholder.typicode.com/posts/';    

    var ajaxService = new AjaxService(url);
    var ui = new Ui();

    this.loadPostDetails = function() {
        ajaxService.getObject(ui.showPostDetails);
    }
}