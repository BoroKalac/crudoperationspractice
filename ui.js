function Ui() {
    this.hideHomeSection = function() {
        document.getElementById("homeSection").style.display = "none";
    };
    this.showPostCollection = function(postCollection) {
        this.hideHomeSection();
        var generatedHtml = "<table><tr><th>See details</th><th>Number</th><th>Title</th><th>Body</th></tr>";
        var i;
        for(i = 0; i < postCollection.length; i++) {
            generatedHtml += '<tr><td>' + '<button onclick="loadPostDetails(' + postCollection[i].id + ')">Details</button>' + '</td><td>' + postCollection[i].id + "</td><td>" + postCollection[i].title + "</td><td>" + postCollection[i].body + "</td><td>" + '<button onclick="onPostDeleteClick(' + postCollection[i].id + ')">X</button>' + '</td></>';
        }
        generatedHtml += "</table>";
        document.getElementById("postListTable").innerHTML = generatedHtml;
        document.getElementById("postsSection").style.display = "block";
        document.getElementById("postDetailDiv").style.display = "none";
        document.getElementById("postListDiv").style.display = "block";
    };
    this.showPostDetails = function(currentPost) {
        document.getElementById("titleInput").value = currentPost.title;
        document.getElementById("bodyInput").value = currentPost.body; 
        showPostDetails();
    }
    this.showPostCollectionAfterDeletion = function() {

    };
};