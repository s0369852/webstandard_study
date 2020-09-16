 // 버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".title .btn").click(function(e){
    e.preventDefault(); // -> click을 하면 "#"이 이동하는 값(0,0) 으로 이동을 하게되는데 그것을 막아준다. 
    // $("#cont_nav").css("display","block");
    // $("#cont_nav").show(); // -> .show() = display:none 에서 display:block으로 바꿔주는 메서드.
    // $("#cont_nav").fadeIn(); // 서서히 나타나게 하는 메서드.
    // $("#cont_nav").slideDown(); // 슬라이드 해서 나타나는(애니메이션이 적용) 메서드. -> 단점은 한번 밖에 쓰지 못한다는 것.
    // $("#cont_nav").toggle(); // toggle(); = 나타났다가 사라졌다가(show & hide) 반복해서 할 수있는 메서드 
    // $("#cont_nav").fadeToggle(); // fade애니메이션을 toggle하는 메서드.
    $("#cont_nav").slideToggle(300); // slide애니메이션을 toggle하는 메서드. (300)은 시간을 조절할 수 있다.
    // $(".title .btn").addClass("on"); // .addClass(); = class속성을 추가하는 메서드. 
    $(this).toggleClass("on"); // this = 1. 자기 자신을 표현할 때 사용한다. 
    // jQuery의 메서드는 많이 알수록 좋다.  
});

// 배너 스크립트
// html 마크업 세팅 -> css 연동 -> jQuery 연동 -> jQuery 호출
$(".banner").slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
dots: true
});

// 탭 메뉴 스크립트
var $tab_list = $(".tab_menu"); //변수는 데이터를 저장하는 저장소
$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this); // tabMenu함수에서 버튼을 클릭했다면 이 버튼의 타겟인 $(this)가 $this로 저장이 된 것이다.
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
    // 버튼을 클릭했을 때 해당하는"ul"을 보여주고, 부모인 "li"박스에 active클래스를 붙여주고, "li"의 형제들한테는 active클래스가 주어진게 있다면 지워줘라, 그 밑에 있는 "ul"역시 안보이게 해줘라. 
}
$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);
// ".tab_menu"의 ul의 li의 a태그를 클릭을하면 "tabMenu"라는 함수가 작동이 되고, focus가 작동이 되게 하라.
// focus를 준 이유는 웹 접근성을 준수하기 위해서 그런 것이다.
// focus를 준 이유 => (tab키를 눌렀을 때 공지사항 1번 메뉴로 갔다가 아래있는 글들을 순차적으로 갔다가 다시 공지사항2로 넘어가고 공지사항2에서도 마찬가지로 순차대로 진행이 되게끔 하게 하기 위해서.
// 일반 스크립트로 짜게 되면 공지사항1번 탭에서 아래 메뉴들을 훓고 공지사항2로 넘어가고 공지사항2에서는 아래메뉴들을 훓지 않고 공지사항3으로 넘어간다.)

// 갤러리 스크립트
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
}); //slick에 속성을 추가하고 싶다면 "{}"을 넣어주면 된다.

$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
}); //".play"버튼을 클릭하면 재생이 된다.

$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
});

$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
});

$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
});

// 레이어 팝업
// 팝업은 2종류가 있다. "레이어 팝업", "윈도우 팝업"
// "윈도우 팝업"을 잘 안쓰는 이유 => 닫으면 또 열리고, 닫으면 또 열리고 하는 기능을 브라우저에서 아예 다 차단을 시켜버렸다.
// "레이어 팝업"=> 3일동안 보지 않기, 일주일 동안 보지 않기 등.
$(".layer").click(function(e){
    e.preventDefault(); //"e"는 변수이기 때문에 다른 글자를 넣어줘도 상관이 없다. e=event
    // $("#layer").css("display", "block");
    // $("#layer").show();
    // $("#layer").fadeIn();
    $("#layer").slideDown(400);
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").slideUp(400);
});

// 윈도우 팝업
// 브라우저 자체 같은 팝업.
// 브라우저마다 다 다르게 나타날 수 있다.
$(".window").click(function(e){
    e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    // 옵션 => top, left, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("sample_popup.html", "popup_01", "width=800px, height=550px, top=50px, left=50px, scrollbars=0, toolbar=0, menubar=0");
});

// 라이트 박스 (lightgallery(jQuery_plugin)사용 - IE8부터 지원)
// = "레이어 팝업" + "이미지 슬라이드"
$(".lightgallery").lightGallery({
    thembnail: false,
    autoplay: true,
    pause: 3000,
    progressBar: true,
}); 

