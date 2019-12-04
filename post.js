function Post() {
    var url = 'https://jsonplaceholder.typicode.com/posts/';    
    var postArray = [];
    var deletedObjectId = null;

    var ajaxService = new AjaxService(url);
    var ui = new Ui();

    // will load posts from backend and show it in html table
    this.loadPostsSection = function() {
        ajaxService.loadDataCollection(this.onCollectionLoaded);
    };

    this.delete = function(id) {
        deletedObjectId = id;
        ajaxService.deleteObject(id, this.onDelete);

    };

    this.onCollectionLoaded = function(loadedArray) {
        postArray = loadedArray;
        ui.showPostCollection(loadedArray);
    };

    this.onDelete = function() {
        // splicuses postArray - sa deleteedObjectId *(splice novi array? filter)
        // var removeIndex = postArray.map(function (el) { 
        //     return el.id
        // }).indexOf(deletedObjectId);
        modifiedArray = postArray.splice(deletedObjectId, 1)
        ui.showPostCollection(modifiedArray);
    };
};