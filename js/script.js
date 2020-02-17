$.ajax({
    url: "json/collapse.json",
    dataType: "json",
    type: "GET",
    success: function (data) {
        data.collapse.forEach((y) => {
            $('#accordion').append(`<div class="card my_style">
                        <div class="card-header collapse_bg" role="tab" id="accordionHeadingOne${y.id}">
                            <div class="mb-0 row">
                                <div class="col-12 no-padding accordion-head">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#accordionBodyOne${y.id}" aria-expanded="false" aria-controls="accordionBodyOne"
                                       class="collapsed get-id" data-id = '${y.id}'>
                                        <div class="plus_icon d-flex" onclick="Func1(2)">
                                        <div id="load${y.id}" style="width: 16px">
                                        <img src="${y.src}" id="load${y.id}">
                                        </div>
                                        <div>
                                         <img src="img/dat.png" alt="logo">
                                         </div>
                                            <span>${y.name}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="accordionBodyOne${y.id}" class="collapse" role="tabpanel" aria-labelledby="accordionHeadingOne" aria-expanded="false" data-parent="accordion">
                            <div class="card-block col-12">
                                <div class="new_db" id = '${y.id}'">
                                    <a href="#"><img src="img/new3.png" alt=""> New</a>
                                </div>

                            </div>
                        </div>
                </div> `);

        })

    }
});


$(document).on('click', '.get-id', function () {
    let id = $(this).attr('data-id');
    // console.log(id);
    let prop = true;
    if ($(this).hasClass("change")) {
        $(this).removeClass("change");
        prop = false;
    } else {
        $(this).addClass("change");
        prop = true;
    }
    $.ajax({
        url: "json/table_two.json",
        type: "GET",
        dataType: "json",
        beforeSend: function () {
            $("#load" + id).children().remove();
            $("#load" + id).append(`<img src="img/load.gif">`);
        },
        success: function (data) {
            $('.remove-data-' + id).remove();
            data.table.forEach((i, k) => {
                if (id == i.db_id) {
                    $('#' + id).append(`<div class="card my_style remove-data-${id}">
                        <div class="card-header collapse_bg" role="tab" id="accordionHeadingOne${i.id}">
                            <div class="mb-0 row">
                                <div class="col-12 no-padding accordion-head">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#accordionBodyOne${i.id}" aria-expanded="false" aria-controls="accordionBodyOne"
                                       class="collapsed get-id" data-id = '${i.id}'>
                                        <div class="plus_icon" id="latscoll">
                                        <img src="${i.src}" alt="">
                
                                            <span>${i.lasttitle}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> `);
                    setTimeout(function () {
                        $("#load" + id).children().remove();
                        if (prop == true) {
                            $("#load" + id).append(`<img src="img/minus.png">`);
                        } else {
                            $("#load" + id).append(`<img src="img/plus.png">`);
                        }
                    }, 300)

                }
            })
        }
    });
});


$.ajax({
    url: 'json/nav.json',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        data.nav.forEach((i, x) => {
            $('#nv_b').append(`
                          <a class="nav-item nav-link" href="#"><img src="${i.src}" alt=""> ${i.name}</a>`);
        })
    }
});

function Func1(arg) {
    $('#new_db').children().remove();
    $(".hell").remove();
    if (arg === 0) {
        $('#new_db').append(`<div class="col-md-7">
                    <div class="left_border_one">
                        <div class="top_content_one">
                            <h5 class="demo">phpMyAdmin Demo Server</h5>
                        </div>
                        <div class="para_demo">
                            <p>You are using the demo server. You can do anything here, but please do not change root,
                                debian-sys-maint and pma users. More information is available at <a
                                        href="#">demo.phpmyadmin.net.</a></p>
                        </div>
                    </div>
                    <div class="left_border_two">
                        <div class="top_content_one">
                            <h5 class="demo">General settings</h5>
                        </div>
                        <div class="server_connect">
                            <img src="img/sel2.png" alt="">
                            <span>Server connection collation:</span>
                            <a href="#"><img src="img/what.png" alt=""></a>

                            <select class="form-control-sm select_width">
                                <option>Small select</option>
                            </select>

                        </div>
                        <div class="more">
                            <a href="#"> <img src="img/set.png" alt=""> More settings</a>
                        </div>
                    </div>
                    <div class="left_border_three">
                        <div class="top_content_one">
                            <h5 class="demo">Appearance settings</h5>
                        </div>
                        <div class="lang">
                            <img src="img/lang.png" alt="">
                            <span>Language</span>
                            <a href="#"><img src="img/what.png" alt=""></a>
                        </div>
                        <div class="options">
                            <select class="form-control-sm select_width">
                                <option>Small select</option>
                            </select>
                        </div>
                        <div class="theme">
                            <img src="img/theme.png" alt="">
                            <span>Theme:</span>
                            <select class="form-control-sm">
                                <option>Small select</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="rigth_border_one">
                        <div class="top_content_one">
                            <h5 class="demo">Database server</h5>
                        </div>
                        <div class="list_one">
                            <ul>
                                <li>Server: phpMyAdmin demo - MySQL (192.168.30.23 via TCP/IP)</li>
                                <li>Server type: MySQL</li>
                                <li>Server connection: <span>SSL is not being used</span><a href="#"><img
                                        src="img/what.png" alt=""></a></li>
                                <li>Server version: 8.0.18 - MySQL Community Server - GPL</li>
                                <li>Protocol version: 10</li>
                                <li>User: root@192.168.30.20</li>
                                <li>Server charset: UTF-8 Unicode (utf8mb4)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="rigth_border_two">
                        <div class="top_content_one">
                            <h5 class="demo">Web server</h5>
                        </div>
                        <div class="list_two">
                            <ul>
                                <li>nginx/1.10.3</li>
                                <li>Database client version: libmysql - mysqlnd 7.4.0</li>
                                <li>PHP extension: mysqli <a href="#"><img src="img/what.png" alt=""></a></li>
                                <li>PHP version: 7.4.0</li>
                            </ul>
                        </div>
                    </div>
                    <div class="rigth_border_three">
                        <div class="top_content_one">
                            <h5 class="demo">phpMyAdmin</h5>
                        </div>
                        <div class="list_three">
                            <ul>
                                <li>Version information: 5.1.0-dev, latest stable version: 4.9.4</li>
                                <li>Git revision: 3a9b762 from master branch,</li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Official Homepage</a></li>
                                <li><a href="#">Contribute</a></li>
                                <li><a href="#">Get support</a></li>
                                <li><a href="#">List of changes</a></li>
                                <li><a href="#">License</a></li>
                            </ul>
                        </div>
                    </div>
                </div>`);
    }

    if (arg === 1) {
        $('#new_db').children().remove();
        $(".hell").remove();
        $('#new_db').append(`<div class="col-md-12" >
                    <div class="Data_title" id="data_title">
                        <h3>Databases</h3>
                    </div>
                    <div class="Crate_db">
                        <img src="img/new2.png" alt="">
                        <span>Create database</span>
                        <img src="img/what.png" alt="">
                    </div>
                    <div class="input_create">
                        <input type="text" id="exampleFormControlInput1" placeholder="Database name">
                        <select id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <input type="submit" value="Create" class="sub_one">
                    </div>
                    <div class="table_one">
                        <fieldset>
                            <legend>Filters</legend>
                            <div>
                                Contains the word:<input type="text">
                            </div>
                        </fieldset>
                    </div>
                    <div class="table_new_db">
                        <table id="table_new_db_id" class="table-striped">
                            <tr>
                                <th colspan="1" class="circle_th"></th>
                                <th colspan="1" class="th_padd">Database</th>
                                <th colspan="1" class="th_padd">Comparison</th>
                                <th colspan="1" class="th_padd">Host server replication</th>
                                <th colspan="1">Act</th>
                            </tr>
                            
                            
                        </table>
                    </div>
                </div>`);

        $.ajax({
            url: 'json/database.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                data.database.forEach((y, k) => {
                    $('#table_new_db_id').append(`
                       
                        <tr id="${y.id}">
                                <td><input type="checkbox" id="${y.id}"></td>
                                <td><a href="#">${y.title}</a></td>
                                <td>${y.comp}</td>
                                <td><img src="img/del3.png" alt="">Not replicated</td>
                               <td><a href="#"><img src="img/user.png" alt="">Check privileges</a></td>
                        </tr>
                       
                    `)


                })
            }
        });
    }
    if (arg === 2) {
        $('#new_db').children().remove();
        $(".hell").remove();
        $('#tables').append(`<div class="col-md-12 pt-4 hell">
                    <div class="table_one">
                        <fieldset>
                            <legend>Filters</legend>
                            <div>
                                Contains the word:<input type="text">
                            </div>
                        </fieldset>
                    </div>
                    <div class="table_new_db">
                        <table id="tables_db">
                            <tr>
                                <th colspan="1" class="circle_th"></th>
                                <th colspan="1" class="th_padd">Table</th>
                                <th colspan="1" class="th_padd">Action</th>
                                <th colspan="1" class="th_padd">Rows <img src="img/what.png" alt=""></th>
                                <th colspan="1" class="th_padd">Type</th>
                                <th colspan="1" class="th_padd">Collation</th>
                                <th colspan="1" class="th_padd">Size</th>
                                <th colspan="1">Overhead</th>
                            </tr>
                        </table>
                        <div class="count_table_inform">
                            
                        </div>
                        <div class="slak mt-3">
                            <img src="img/slak.png" alt="">
                            <input type="checkbox" class="ml-3">
                            <a href="#">Check all</a>
                            <select class="input_width ml-5" id="exampleFormControlSelect1">
                                <option>With selected:</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="hr mt-4">
                        </div>
                        <div class="print mt-4">
                            <a href="#"><img src="img/print.png" alt=""> Print</a>
                            <a href="#"><img src="img/34.png" alt="">  Data dictionary</a>
                        </div>
                        <div class="table_two mt-4">
                            <fieldset>
                                <legend><img src="img/t.png" alt=""><span>Create table</span></legend>
                                <div class="mt-4 ml-3">
                                    Contains the word:<input type="text">
                                    Number of columns: <input type="number" min="1">
                                </div>
                                <div class="bottom_bord mt-4">
                                    <button class="btn_border mr-2 mt-2">Go</button>

                                </div>
                            </fieldset>

                        </div>
                    </div>

                </div>`);

        $.ajax({
            url: 'json/filterTable.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                data.filtertable.forEach((j) => {
                    $('#tables_db').append(`<tr>
                                <td><input type="checkbox" id="exampleCheck6"></td>
                                <td><a href="#">${j.title}</a></td>
                                <td><a href="#"><img src="img/b_no_favorite.png" alt=""></a>
                                    <a href="#"><img src="img/bd_browse.png" alt="">Browse</a>
                                    <a href="#"><img src="img/b_props.png" alt="">Structure</a>
                                    <a href="#"><img src="img/bd_select.png" alt="">Search</a>
                                    <a href="#"><img src="img/b_insrow.png" alt="">Insert</a>
                                    <a href="#"><img src="img/bd_empty.png" alt="">Empty</a>
                                    <a href="#"><img src="img/b_drop.png" alt="">Drop</a>


                                </td>
                                <td class="float_td">${j.rows}</td>
                                <td>${j.type}</td>
                                <td>${j.collattion}</td>
                                <td><a href="#">${j.size}</a></td>
                                <td class="float_td">-</td>
                            </tr>`)
                });

                document.getElementsByClassName('count_table_inform')[0].innerHTML =
                    `${data.filtertable.length} tables`


            }
        });
    }

}



$.ajax({
   type:'GET',
   dataType:'json',
   url:'json/teble_two.json',
    success:function(data){
        data.teble_two.forEach((x) =>{
            console.log(x.id);
        })
    }
});


