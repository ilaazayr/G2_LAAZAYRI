$(document).ready(function(){
    var autre = document.getElementById('croix');
    var defaut = document.getElementById('barre');
    
    $('.menu-toggle').click(function(){
      $('nav').toggleClass('active')
      $('#overlay').toggleClass('active')
      $('body').toggleClass('active')
      
      
    })
    $('.menu-toggle2').click(function(){
        $('nav').toggleClass('active')
        $('#overlay').toggleClass('active')
        $('body').toggleClass('active')
        
        
      })
    $('#overlay').click(function(){
      $('nav').toggleClass('active')
      $('#overlay').toggleClass('active')
      $('body').toggleClass('active')
      autre.style.display = (autre.style.display == 'none' ? '' : 'none');
      defaut.style.display = (defaut.style.display == 'none' ? '' : 'none');
    })
    $('.menu-toggle3').click(function(){
      $('#connexion').toggleClass('active')
      $('#overlay2').toggleClass('active')
      $('body').toggleClass('active')
    })

    $('#overlay2').click(function(){
      $('#connexion').toggleClass('active')
      $('#overlay2').toggleClass('active')
      $('body').toggleClass('active')
    })
    

  })