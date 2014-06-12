// 1.How can I get file extensions with JavaScript?
// http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript

function getExt(fname){
return fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
}
