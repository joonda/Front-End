var btn = $('.tab-button');
var ctt = $('.tab-content');


// for (let i = 0; i < btn.length; i++) {

//     btn.eq(i).on('click', function () {
//         open_tab(i);
//     });
// }

$('.list').click(function(e) {
    // console.log(e.target);
    // console.log(document.querySelectorAll('.tab-button'))
    // console.log(e.target.dataset.id);
    open_tab(e.target.dataset.id);
})

function open_tab(num) {
    btn.removeClass("orange");
    btn.eq(num).addClass('orange');
    ctt.removeClass('show');
    ctt.eq(num).addClass('show');
}