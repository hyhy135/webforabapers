function BookPr(title, numberOfPages, publisher, author) {
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.publisher = publisher;
    this.author = author;
  }
  
  BookPr.prototype.getTitle = function() {
    return this.title;
  }
  
  BookPr.prototype.getNumberOfPages = function() {
    return this.numberOfPages;
  }
  
  BookPr.prototype.getPublisher = function() {
    return this.publisher;
  }
  
  BookPr.prototype.getAuthor = function() {
    return this.author;
  }
  
  BookPr.prototype.setTitle = function(title) {
    this.title = title;
  }
  
  BookPr.prototype.setNumberOfPages = function(numberOfPages) {
    this.numberOfPages = numberOfPages;
  }
  
  BookPr.prototype.setPublisher = function(publisher) {
    this.publisher = publisher;
  }
  
  BookPr.prototype.setAuthor = function(author) {
    this.author = author;
  }
  
  
  function TextBookPr(title, numberOfPages, publisher, author, bindingType) {
    BookPr.apply(this, arguments);
    this.bindingType = bindingType;
  }
  
  TextBookPr.prototype = Object.create(BookPr.prototype);
  
  TextBookPr.prototype.getBindingType = function() {
    return this.bindingType;
  }
  
  TextBookPr.prototype.setBindingType = function(bindingType) {
    this.bindingType = bindingType;
  }
  
  
  function AudioBookPr(title, numberOfPages, publisher, author, avaibleDVD) {
    BookPr.apply(this, arguments);
    this.avaibleDVD = avaibleDVD;
  }
  
  AudioBookPr.prototype = Object.create(BookPr.prototype);
  
  AudioBookPr.prototype.getAvaibleDVD = function() {
    return this.avaibleDVD;
  }
  
  AudioBookPr.prototype.setAvaibleDVD = function(avaibleDVD) {
    this.avaibleDVD = avaibleDVD;
  }