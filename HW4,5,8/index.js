'use strict';
class Book {
    constructor(title, numberOfPages, publisher, author) {
      this._title = title;
      this._numberOfPages = numberOfPages;
      this._publisher = publisher;
      this._author = author;
    }
    get title() {
      return this._title;
    }
    get numberOfPages() {
      return this._numberOfPages;
    }
    get publisher() {
      return this._publisher;
    }
    get author() {
      return this._author;
    }
    set title(title) {
      this._title = title;
    }
    set numberOfPages(numberOfPages) {
      this._numberOfPages = numberOfPages;
    }
    set publisher(publisher) {
      this._publisher = publisher;
    }
    set author(author) {
      this._author = author;
    }
    toJSON() {
      return {
          numberOfPages: this.numberOfPages,
          title: this.title,
          publisher: this.publisher,
          author: this.author,
      }
    }
  }
  
  class TextBook extends Book {
    constructor(title, numberOfPages, publisher, author, bindingType) {
      super(...arguments);
      this._bindingType = bindingType;
    }
  
    get bindingType() {
      return this._bindingType;
    }
  
    set bindingType(bindingType) {
      this._bindingType = bindingType;
    }
    toJSON() {
      return {
          numberOfPages: this.numberOfPages,
          title: this.title,
          publisher: this.publisher,
          author: this.author,
          bindingType: this.bindingType,
      }
    }
  }
  
  class AudioBook extends Book {
    constructor(title, numberOfPages, publisher, author, avaibleDVD) {
      super(...arguments);
      this._avaibleDVD = avaibleDVD;
    }
  
    get avaibleDVD() {
      return this._avaibleDVD;
    }
  
    set avaibleDVD(avaibleDVD) {
      this._avaibleDVD = avaibleDVD;
    }
    toJSON() {
      return JSON.stringify({
          numberOfPages: this.numberOfPages,
          title: this.title,
          publisher: this.publisher,
          author: this.author,
          avaibleDVD: this.avaibleDVD,
      })
    }
  }
let book = new Book("Title", 123, "LeverX", "ME");
let audioBook = new AudioBook("AudioTitle", 123, "LeverX", "ME", true);
let textBook = new TextBook("TextTitle", 123, "LeverX", "ME", "basic");


//HW8 with using JQuery
$("#bGetTitle").on("click", ()=>{alert(book.title)});
$("#bGetPages").on("click", ()=>{alert(book.numberOfPages)});
$("#bGetPub").on("click", ()=>{alert(book.publisher)});
$("#bGetAuthor").on("click", ()=>{alert(book.author)});
$("#bSetTitle").on("click", ()=>{
    book.title = prompt("Input title please");
});
$("#bSetPages").on("click", ()=>{
    book.numberOfPages = prompt("Input number of pages please");
});
$("#bSetPub").on("click", ()=>{
    book.publisher = prompt("Input publisher please");
});
$("#bSetAuthor").on("click", ()=>{
    book.author = prompt("Input author please");
});

//HW4 without using JQuery
// document.getElementById("bGetTitle").addEventListener("click", ()=>{alert(book.title)});
// document.getElementById("bGetPages").addEventListener("click", ()=>{alert(book.numberOfPages)});
// document.getElementById("bGetPub").addEventListener("click", ()=>{alert(book.publisher)});
// document.getElementById("bGetAuthor").addEventListener("click", ()=>{alert(book.author)});
// document.getElementById("bSetTitle").addEventListener("click", ()=>{
//     book.title = prompt("Input title please");
// });
// document.getElementById("bSetPages").addEventListener("click", ()=>{
//     book.numberOfPages = prompt("Input number of pages please");
// });
// document.getElementById("bSetPub").addEventListener("click", ()=>{
//     book.publisher = prompt("Input publisher please");
// });
// document.getElementById("bSetAuthor").addEventListener("click", ()=>{
//     book.author = prompt("Input author please");
// });

var data = book.toJSON()

// function getRequest(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "/someAdress/someID";
//   xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var res = JSON.parse(this.responseText);
//     console.log(res)
//   }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// };

// function putRequest(){
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.withCredentials = true;
//   var url = "/someAdress/someID";
//   xmlhttp.addEventListener("readystatechange", function () {
//       if (this.readyState === 4) {
//           console.log(this.responseText);
//       }
//   });
//   xmlhttp.open("PUT", url, true);
//   xmlhttp.setRequestHeader("Content-Type", "application/json");
//   xmlhttp.send(data);
// };
// function postRequest(){
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.withCredentials = true;
//   var url = "/someAdress";
//   xmlhttp.addEventListener("readystatechange", function () {
//       if (this.readyState === 4) {
//           console.log(this.responseText);
//       }
//   });
//   xmlhttp.open("POST", url, true);
//   xmlhttp.setRequestHeader("Content-Type", "application/json");
//   xmlhttp.send(data);
// };
// function deleteRequest(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "/someAdress/someID";
//   xmlhttp.addEventListener("readystatechange", function () {
//       if (this.readyState === 4) {
//           console.log(this.responseText);
//       }
//   });
//   xmlhttp.open("DELETE", url, true);
// };


let ID;
let ref;
function ajaxCallBack(retString){
  ID = retString;
  ref ="http://localhost:2403/books/" + ID ;
}

//jQuery AJAX request with Promises
function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}


ajax({
url: "http://localhost:2403/books",
type: 'get',
}).then((data) => {
  console.log("successGet");
  console.log(data);
  // callback
}
).catch(function errorHandler(error) {
// error
  console.log("errorGet")
});

ajax({
  url: "http://localhost:2403/books",
  type: 'post',
  dataType: 'json',
  data: data,
  }).then((data) => {
    ajaxCallBack(data.id)
    ajax({
      url: ref,
      type: 'delete',
      }).then((data) =>{
        console.log("succDelete")
        // callback
      }
      ).catch(function errorHandler(error) {
      // error
      console.log("errorDelete")
    }); 
  }
  ).catch(function errorHandler(error) {
  // error
    console.log("errorPost")
  });

ajax({
  url: "http://localhost:2403/books/e44287b408b038c4",
  type: 'put',
  dataType: 'json',
  data: data,
  }).then((data) => {
    console.log("successPut");
    // callback
  }
  ).catch(function errorHandler(error) {
  // error
    console.log("errorPut")
  });




