$(function () {
    $(".search-btn").on("click", function () {
      $(".search-open").css({
        top: "0rem",
      });
    });

    $(".search-close").on("click", function () {
      $(".search-open").css({
        top: "-42rem",
      });
    });

    $(".all-menu-open").on("click", function () {
      $(".all-menu-wrap").css({
        top: "0",
        transform: "translateY(0)"
      });
    });

    $(".all-menu-close").on("click", function () {
      $(".all-menu-wrap").css({
        top: "-100%",
        transform: "translateY(-150%)"
      });
    });

  });
$(function () {
    
  });