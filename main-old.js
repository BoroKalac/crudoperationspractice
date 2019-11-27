function showOnlyHomeSection() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("usersSection").style.display = "none";
    document.getElementById("postsSection").style.display = "none";
};

function hideHomeSection() {
    document.getElementById("homeSection").style.display = "none";
};

var baseUsersUrl = "https://jsonplaceholder.typicode.com/users/";
var basePostsUrl = "https://jsonplaceholder.typicode.com/posts/";
var postArray = [];
var currentPost = null;
var newPost = null;
var userArray = [];
var currentUser = null;
var newUser = null;

// Displaying posts start

function loadPostsSection() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            postArray = JSON.parse(this.responseText);
            displayPosts(postArray.slice(0, 10));
        };
    };
    hideHomeSection();
    xmlhttp.open("GET", basePostsUrl, true);
    xmlhttp.send();
};

function displayPosts(postArray) {
    var generatedHtml = "<table><tr><th>See details</th><th>Number</th><th>Title</th><th>Body</th></tr>";
    var i;
    for(i = 0; i < postArray.length; i++) {
        generatedHtml += '<tr><td>' + '<button onclick="getPostDetails(' + postArray[i].id + ')">Details</button>' + '</td><td>' + postArray[i].id + "</td><td>" + postArray[i].title + "</td><td>" + postArray[i].body + "</td><td>" + '<button onclick="onPostDeleteClick(' + postArray[i].id + ')">X</button>' + '</td></>';
    }
    generatedHtml += "</table>";
    document.getElementById("postListTable").innerHTML = generatedHtml;
    showPostList();
};

// Displaying posts end

// Displaying users start

function loadUsersSection() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        userArray = JSON.parse(this.responseText);
        displayUsers(userArray);
    };
};

hideHomeSection();
xmlhttp.open("GET", baseUsersUrl, true);
xmlhttp.send();
};

function displayUsers(userArray) {
    var generatedHtml = "<table><tr><th>See details</th><th>Number</th><th>Name</th><th>Username</th></tr>";
    var i;
    for(i = 0; i < userArray.length; i++) {
        generatedHtml += '<tr><td>' + '<button onclick="getUserDetails(' + userArray[i].id + ')">Details</button>' + '</td><td>' + userArray[i].id + "</td><td>" + userArray[i].name + "</td><td>" + userArray[i].username + "</td><td>" + '<button onclick="onUserDeleteClick(' + userArray[i].id + ')">X</button>' + '</td></>';
    }
    generatedHtml += "</table>";
    document.getElementById("userListTable").innerHTML = generatedHtml;
    showUserList();
};

// Displaying users end

// Delete user start

function onUserDeleteClick(userId) {
    var xmlhttp = new XMLHttpRequest();
    var url = baseUsersUrl + userId;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            var i;
            for(i = 0; i < userArray.length; i++) {
                if (userArray[i].id === userId)
                userArray.splice(i, 1)
            };
            displayUsers(userArray) 
        };
    };
    xmlhttp.open("DELETE", url, true);
    xmlhttp.send();
};

// Delete user end

// Delete post start

function onPostDeleteClick(postId) {
    var xmlhttp = new XMLHttpRequest();
    var url = basePostsUrl + postId;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            var i;
            for(i = 0; i < postArray.length; i++) {
                if (postArray[i].id === postId)
                postArray.splice(i, 1);
            };
            displayPosts(postArray.slice(0, 10)) 
        };
    };
    xmlhttp.open("DELETE", url, true);
    xmlhttp.send();
};

// Delete post end

// Get user details start

function getUserDetails(userId) {
    var xmlhttp = new XMLHttpRequest();
    var url = baseUsersUrl + userId;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            currentUser = JSON.parse(xmlhttp.response);
            document.getElementById("nameInput").value = currentUser.name;
            document.getElementById("usernameInput").value = currentUser.username;
            document.getElementById("emailInput").value = currentUser.email;
            document.getElementById("phoneInput").value = currentUser.phone;
            document.getElementById("cityInput").value = currentUser.address.city;   
        };
    };
    showUserDetails ();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

// Get user details end

// Get post detail start

function getPostDetails(postId) {
    var xmlhttp = new XMLHttpRequest();
    var url = basePostsUrl + postId;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            currentPost = JSON.parse(xmlhttp.response);
            document.getElementById("titleInput").value = currentPost.title;
            document.getElementById("bodyInput").value = currentPost.body;   
        };
    };
    showPostDetails ();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

// Get post details end

function cancelUserForm() {
    showUserList();
};

function cancelPostForm() {
    showPostList();
};

function showUserDetails() {
    document.getElementById("usersSection").style.display = "block";
    document.getElementById("userDetailDiv").style.display = "block";
    document.getElementById("userListDiv").style.display = "none";
};

function showPostDetails() {
    document.getElementById("postsSection").style.display = "block";
    document.getElementById("postDetailDiv").style.display = "block";
    document.getElementById("postListDiv").style.display = "none";
};

function showUserList() {
    document.getElementById("usersSection").style.display = "block";
    document.getElementById("userDetailDiv").style.display = "none";
    document.getElementById("userListDiv").style.display = "block";
};

function showPostList() {
    document.getElementById("postsSection").style.display = "block";
    document.getElementById("postDetailDiv").style.display = "none";
    document.getElementById("postListDiv").style.display = "block";
};

function updateUser() {
    var xmlhttp = new XMLHttpRequest();
    var url = baseUsersUrl + currentUser.id;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
        } 
                }
    collectUserInputs(currentUser);
    xmlhttp.open("PUT", url, true);
    xmlhttp.send();
};

function updatePost() {
    var xmlhttp = new XMLHttpRequest();
    var url = basePostsUrl + currentPost.id;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
        } 
                }
    collectPostInputs(currentPost);
    xmlhttp.open("PUT", url, true);
    xmlhttp.send();
};

function onSaveUserButtonClick() {
    if (newUser) { 
        saveNewUser();
    } else {
        updateUser();
    }
    showUserList();
};

function onSavePostButtonClick() {
    if (newPost) { 
        saveNewPost();
    } else {
        updatePost();
    }
    showPostList();
};

function addUser() {
    showUserDetails();
};

function addPost() {
    showPostDetails();
};

function saveNewUser() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {           
            userArray.push(newUser);
            }
        };
    newUser = {};
    collectUserInputs(newUser);   
        
        xmlhttp.open("POST", baseUsersUrl, true);
        xmlhttp.send();
};

function saveNewPost() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {           
            postArray.push(newPost);
            }
        };
    newPost = {};
    collectPostInputs(newPost);   
        
        xmlhttp.open("POST", basePostsUrl, true);
        xmlhttp.send();
};

function collectUserInputs(user) { 
        user.name = document.getElementById("nameInput").value;
        user.username = document.getElementById("usernameInput").value;
        user.email = document.getElementById("emailInput").value;
        user.phone = document.getElementById("phoneInput").value;
        if (!user.address) {
            user.address = {};
        };
        user.address.city = document.getElementById("cityInput").value;
};

function collectPostInputs(post) { 
    post.title = document.getElementById("titleInput").value;
    post.body = document.getElementById("bodyInput").value;
};