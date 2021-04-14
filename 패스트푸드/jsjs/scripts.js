var API_URL = "http://floating-harbor-78336.herokuapp.com/fastfood";

// $(function () {
//     $('.btn-search').click(function () {
//         $.get(API_URL, {}, function (data) {
//             console.log(data)
//         })
//     })
// })

$(function () {
    $('.btn-search').click(function () {
        let searchKeyword = $('#txt-search').val();
        $.get(API_URL, {searchKeyword: searchKeyword }, function (data) {
            //실제 로직
            let list = data.list;
            let total = data.total;
            

            $('.total').html('총 ' + total + '개의 패스트푸점을 찾았습니다.');
            
            let $list = $('.list');
        

            for (let i = 0; i < list.length; i++) {
                let item = list[i];
                // 각 아이템 하나하나마다 DOM 객체를 만들어서 $list에 추가한다.

                //1. 템플릿을 복제한다.
                //2. 복제한 템플릿에 데이터를 세팅한다.
                //3. 목록에 복제한 템플릿을 추가한다.

                let $elem = $('#item-template')
                .clone()
                    .removeAttr('id');
                $elem.find('.item-no').html(i + 1);
                $elem.find('.item-name').html(item.name);
                $elem.find('.item-addr').html(item.addr);

                $list.append($elem);

            }
        });
    });
});

$('#txt-search').on('keypress', function (e) {
    if (e.keyCode === 13) {
        $('.btn-search').trigger('click');
    }
});

// $(function () {
//     $('.btn-search').click(function () {
//         let searchKeyword = $('#txt-search').val(); // input에서 입력한 값

//         search(searchKeyword);
//     });

//     $('#txt-search').on('keypress', function (e) {
//         if (e.keyCode === 13) {
//             $('.btn-search').trigger('click');
//         }
//     });
// });

// function search(searchKeyword) {
//     $.get(API_URL, { searchKeyword: searchKeyword }, function (data) {
//         let list = data.list;
//         let total = data.total;

//         $('.total').html('총 ' + total + '개의 패스트푸드점을 찾았습니다.');

//         let $list = $('.list');

//         for (let i = 0; i < list.length; i++) {
//             let item = list[i];

//             let $elem = $('#item-template')
//             .clone()
//                 .removeAttr('id');
            
//             $elem.find('.item-no').html(i + 1);
//             $elem.find('.item-name').html(item.name);
//             $elem.find('.item-addr').html(item.addr);

//             $list.append($elem);
            
        
//         }
      
        
//     })
// }

// //함수 호출 부분
// $(function () {
//         $('.btn-search').click(function () {
//             let searchKeyword = $('#txt-search').val(); // input에서 입력한 값
    
//             search(1, 10, searchKeyword);
//         });
    
//         $('#txt-search').on('keypress', function (e) {
//             if (e.keyCode === 13) {
//                 $('.btn-search').trigger('click');
//             }
//         });
//     });



// //페이징 구현
// function search(page, perPage, searchKeyword) {
//     if (typeof page !== 'number' || page < 1)
//         page = 1;
//         if (typeof perPage !== 'number' || perPage <= 0)
//         perPage = 10;
//     $.get(API_URL, {page:page, perPage:perPage, searchKeyword: searchKeyword }, function (data) {
//         let list = data.list;
//         let total = data.total;

//         $('.total').html('총 ' + total + '개의 패스트푸드점을 찾았습니다.');

//         let $list = $('.list');

//         for (let i = 0; i < list.length; i++) {
//             let item = list[i];

//             let $elem = $('#item-template')
//             .clone()
//                 .removeAttr('id');
            
//             $elem.find('.item-no').html(i + 1);
//             $elem.find('.item-name').html(item.name);
//             $elem.find('.item-addr').html(item.addr);

//             $list.append($elem);
//         }
//         showPaging(page, perPage, total);
//     })
// }

// //페이징 구현2
// function showPaging(page, perPage, total) {
//     //1~5까지만 출력되는 페이징
//     let $paging = $('.paging').empty();
//     let numPages = 5;
//     let pageStart = Math.floor((page - 1) / numPages) * numPages + 1;
//     let pageEnd = pageStart + numPages - 1;
//     let totalPages = Math.floor((total - 1) / perPage) + 1;

//     if (pageEnd > totalPages)
//         pageEnd = totalPages;

//     // for (let i = 1; i <= 5; i++) {
//     //     let $elem = $('<a href="javascript:search(' + i + ')">' + i + '</a>');

//     //     if (i == page) {
//     //         $elem.addClass('current');
//     //     }

//         for (let i = pageStart; i <= pageEnd; i++) {
//             let $elem = $('<a href="javascript:search(' + i + ',' + perPage + ')">' + i + '</a>');
    
//             if (i === page) {
//                 $elem.addClass('current');
//             }
//             $paging.append($elem);
//         }
//     }


