function DeletePost() {
    var url = 'https://jsonplaceholder.typicode.com/posts/';
    var ajaxService = new AjaxService(url);
    var ui = new Ui();
    this.onPostDeleteClick = function(id) {
        ajaxService.deleteObject(id)
    };
};