document.querySelector('.htmlli').addEventListener('click', function () {
    document.querySelector('.htmldiv').style.display = 'block';
    document.querySelectorAll('.aas').style.display = 'none';

    // document.querySelector('.cssiv').style.display = 'none';
})
document.querySelector('.cssli').addEventListener('click', function () {
    document.querySelector('.cssiv').style.display = 'block';
    document.querySelectorAll('lili').style.display = 'none';

    // document.querySelector('.jsdiv').style.display = 'none';

})
document.querySelector('.javali').addEventListener('click', function () {
    document.querySelector('.jsdiv').style.display = 'block';
    document.querySelectorAll('lili').style.display = 'none';
    // document.querySelector('.htmldiv').style.display = 'none';
})
