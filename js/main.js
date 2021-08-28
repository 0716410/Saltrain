$(document).ready(function(){

    $('.all_box').hide();

    $('.ham').click(function(){
        $('.all_box').fadeIn();
    });

    $('.all_close').click(function(){
        $('.all_box').fadeOut();
    });

    $('.topbtn').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 400);
    });

    
    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 500){
            $('.topbtn').addClass('on_topbtn')
        }   else { $('.topbtn').removeClass('on_topbtn');
            }

        if(sct >= 700){
            $('.sec2_title').addClass('sec2_title_active')
        }  else { $('.sec2_title').removeClass('sec2_title_active');
            }

        if(sct >= 700){
            $('.sec2-1_title').addClass('sec2-1_title_active')
        }   else { $('.sec2-1_title').removeClass('sec2-1_title_active');
            }

        if(sct >= 920){
            $('header').addClass('on_header')
        }   else { $('header').removeClass('on_header');
            }

        if(sct >= 1400){
            $('.sec3_text1').addClass('sec3_text1_active')
        }  

        if(sct >= 1600){
            $('.sec3_text2').addClass('sec3_text2_active')
        } 

        if(sct >= 1800){
            $('.sec3_text3').addClass('sec3_text3_active')
        }

        if(sct >= 3500){
            $('.section_5').css({
                backgroundColor: '#0091fb',
                color: 'white'
            })
        }

        if(sct >= 4500){
            $('.section_6').css({
                backgroundColor: '#0091fb',
                color: 'white'
            })
        }
        

    });


  
  

});//end