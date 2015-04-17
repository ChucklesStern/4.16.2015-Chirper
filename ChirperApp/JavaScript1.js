var firebaseUrl = "https://chuckchirpdatabase.firebaseio.com/";

var friend = function (name/*, email, phone, date */) {
    this.name = name;
    /*   this.email = email;
       this.phone = phone;
       this.date = date; */
}
var contacts = [];

var addFriend = function () {
    //here we use JQUERY Bling $ and ID hastags (#) for the first time. Note that what is expressed below for the variable name is the same as saying var name = document.getElementById('inputName').value;
    var name = $('#inputName').val();
    /*    var email = $('#inputEmail').val();
        var phone = $('#inputPhone').val(); 
        var findHours = new Date();
        var date = findHours.getUTCHours(); */
    var addFriend = new friend(name/*, email, phone, date */);

    postContacts(addFriend);

    //Clears out the inputs by setting the string value to nothing
    $('#inputName').val('');/* $('#inputEmail').val(''); $('#inputPhone').val(''); */
}
var PrintContacts = function () {
    //document.getElementById('DisplayContactsHere').innerHTML = '';
    $('#DisplayContactsHere').html('');
    var elemString = '';
    for (var i = 0; i < contacts.length; i++) {
        elemString += '<tr>'
        elemString += '<td>' + contacts[i].name + '</td>'
        /*      elemString += '<td>' + contacts[i].email + '</td>'
              elemString += '<td>' + contacts[i].phone + '</td>'
              elemString += '<td>' + contacts[i].date + '</td>' */
        elemString += '<td><button class="btn btn-warning" onclick="editContact(' + i + ')">Edit</button><button class="btn btn-danger" onclick="deleteContact(' + i + ')">Delete</button></td>'
        elemString += '</tr>'
    }
    $('#DisplayContactsHere').html(elemString);
}


/* var editContact = function (i) {
    document.getElementById('editName').value = contacts[i].name;
    $('#editEmail').val(contacts[i].email);
    $('#editPhone').val(contacts[i].phone);
    $('#SaveEditButton').html('<button type="button" class="btn btn-primary" data-dismiss="modal" onclick="saveEdit(' + i + ');">Save changes</button>')
    $('#myModal').modal('toggle');
} 

var saveEdit = function (i) {
    var name = $('#editName').val();
    var email = $('#editEmail').val();
    var phone = $('#editPhone').val();
    var findHours = new Date();
    var date = findHours.getUTCHours();
    var addFriend = new friend(name, email, phone, date);
    postContacts(addFriend, i);
} */

var postContacts = function (data) {
    var request = new XMLHttpRequest();
    request.open('POST', firebaseUrl + '/friends' + '/.json', true);
    request.onload = function () {
        if (this.status < 400 && this.status >= 200) {
            var response = JSON.parse(this.response);
            data.key = response.name;
            contacts.push(data);
            PrintContacts();
        }
        else {
            console.log(this.response);
        }
    }
    request.send(JSON.stringify(data));
}

var getContacts = function () {
    var request = new XMLHttpRequest();
    request.open('GET', firebaseUrl + '/friends' + '/.json', true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var response = JSON.parse(this.response);
            for (var propName in response) {
                response[propName].key = propName;
                contacts.push(response[propName]);
            }
            PrintContacts();
        } else {
            console.error(this.response);
        }
    }
    request.send();
}
var deleteContact = function (i) {
    var request = new XMLHttpRequest();
    request.open('DELETE', firebaseUrl + '/friends' + '/.json', true);
    request.onload = function () {
        If(this.status >= 200 && this.status < 400); {
            contacts.splice(i, 1);
            PrintContacts();

        }
    }
    request.send();
}
getContacts();


var firebaseUrl = "https://chuckchirpdatabase.firebaseio.com/"
var tweet = function (text, date) {
    this.text = text;
    this.person = "Chuck Stern";
    this.date = date; 
}
var tweets = [];

var tweeterBox = function (i) {

    $('#SendTweetButton').html('<button class="btn btn-warning" onclick="addTweet(' + i + ')">Save Changes</button>')
    $('#myModal').modal('toggle');
}

var addTweet = function (i) {
    //here we use JQUERY Bling $ and ID hastags (#) for the first time. Note that what is expressed below for the variable name is the same as saying var name = document.getElementById('inputName').value;

    var text = $('#inputTweet').val();
    
    /*    var email = $('#inputEmail').val();
        var phone = $('#inputPhone').val(); */
        var findHours = new Date();
        var date = findHours.getTime(); 
        var addTweet = new tweet(text, date);
        postTweets(addTweet, i);
    //Clears out the inputs by setting the string value to nothing
        $('#inputTweet').val(''); $('#tweetersName').val('');/* $('#inputEmail').val(''); $('#inputPhone').val(''); */
}
/*
postTweets(addTweet);

*/

var PrintTweets = function () {
    //document.getElementById('DisplayContactsHere').innerHTML = '';
    $('#DisplayContactsHere').html('');
    var elemString = '';
    for (var i = 0; i < tweets.length; i++) {
        elemString += '<tr>'
        elemString += '<td>' + tweets[i].tweet + '</td>'
        /*      elemString += '<td>' + contacts[i].email + '</td>'
              elemString += '<td>' + contacts[i].phone + '</td>'
              elemString += '<td>' + contacts[i].date + '</td>' */
        elemString += '<td><button class="btn btn-danger" onclick="deleteTweet(' + i + ')">Delete</button></td>'
        elemString += '</tr>'
    }
    $('#DisplayContactsHere').html(elemString);
}


var postTweets = function (data) {
    var request = new XMLHttpRequest();
    request.open('POST', firebaseUrl + '/bigbird' + '/.json', true);
    request.onload = function () {
        if (this.status < 400 && this.status >= 200) {
            var response = JSON.parse(this.response);
            data.key = response.name;
            tweets.push(data);
            PrintTweets();
        }
        else {
            console.log(this.response);
        }
    }
    request.send(JSON.stringify(data));
}



var getTweets = function () {
    var request = new XMLHttpRequest();
    request.open('GET', firebaseUrl + '/bigbird' + '/.json', true);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var response = JSON.parse(this.response);
            for (var propName in response) {
                response[propName].key = propName;
                tweets.push(response[propName]);
            }
            PrintTweets();
        } else {
            console.error(this.response);
        }
    }
    request.send();
}
var deleteTweet = function (i) {
    var request = new XMLHttpRequest();
    request.open('DELETE', firebaseUrl + '/bigbird' + '/.json', true);
    request.onload = function () {
        If(this.status >= 200 && this.status < 400); {
            tweets.splice(i, 1);
            PrintTweets();

        }
    }
    request.send();
}
getTweets();