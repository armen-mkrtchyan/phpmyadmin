$.ajax({
    url: "json/collapse.json",
    dataType: "json",
    type: "GET",
    success: function (data) {
        data.collapse.forEach((y, i) => {
            $('#accordion').append(`<div class="card my_style">
                        <div class="card-header collapse_bg" role="tab" id="accordionHeadingOne${y.id}">
                            <div class="mb-0 row">
                                <div class="col-12 no-padding accordion-head">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#accordionBodyOne${y.id}" aria-expanded="false" aria-controls="accordionBodyOne"
                                       class="collapsed ">
                                        <div class="plus_icon">
                                        <img src="${y.src}" alt="">
                                            <img src="img/dat.png" alt="">
                                            <span>${y.name}</span>
                                        </div>


                                    </a>
                                </div>
                            </div>
                        </div>

                        <div id="accordionBodyOne${y.id}" class="collapse" role="tabpanel" aria-labelledby="accordionHeadingOne" aria-expanded="false" data-parent="accordion">
                            <div class="card-block col-12">
                                <div class="new_db">
                                    <a href="#"><img src="img/new3.png" alt=""> New</a>
                                </div>
                                <div class="character">
                                    <a href="#"><img src="img/new.png" alt=""> Character</a>
                                </div>

                            </div>
                        </div>
                    </div>`)
        })

    }
});

$.ajax({
    url: 'json/nav.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        data.nav.forEach((i, x) => {
            console.log(i);
            $('#nv_b').append(`
                          <a class="nav-item nav-link" href="#"><img src="${i.src}" alt=""> ${i.name}</a>`);
        })
    }
});
