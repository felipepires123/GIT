function lingua(){

    var idioma = document.getElementById('idioma')
    var p1 = document.getElementById('p1')
    var p2 = document.getElementById('p2')
    var calc = document.getElementById('calc')
    var pontos = document.getElementById('pontos')
    var planilha = document.getElementById('planilha')

    if (idioma.value == 1) {
        p1.innerHTML = 'Olá meu nome é Carlos Felipe Ramos Pires, sou programador iniciante, e criei esta página web para apresentar algumas páginas que criei ao longo do tempo, desde que comecei a programar.'
        p2.innerHTML = 'A linguagem que uso é JavaScript, também conheço o básico de PHP, mas não uso nestas páginas, e uso HTML e CSS para estruturar tudo.'
        calc.innerHTML = 'Calculadora'
        pontos.innerHTML = 'Caça aos pontos' 
        planilha.innerHTML = 'Calculadora'

    }
    else{
        p1.innerHTML = 'Hello my name is Carlos Felipe Ramos Pires, I am a beginner programmer, and I created this webpage to present some pages that I have created over time, since I started programming.'
        p2.innerHTML = 'The language i use is JavaScript, i also know the basics of PHP, but not used on these pages, and using HTML and CSS to structure everything.'
        calc.innerHTML = 'Calculate'
        pontos.innerHTML = 'Search the points'
        planilha.innerHTML = 'Data sheet'
    }
}