function Post() {
    var url = 'https://jsonplaceholder.typicode.com/posts/';    

    var ajaxService = new AjaxService(url);
    var ui = new Ui();

    // will load posts from backend and show it in html table
    this.loadPostsSection = function() {
        ajaxService.loadDataCollection(ui.showPostCollection);
    }
}