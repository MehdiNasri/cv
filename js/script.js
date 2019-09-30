window.addEventListener('load',function(){
    var dl = document.getElementById('dl');
    dl.addEventListener('click',function(){
        var urlDuFichier = "CV.pdf";
        window.open(urlDuFichier,"_blank", null);
    })
})