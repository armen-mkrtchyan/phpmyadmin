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
            $('#nv_b').append(`
                          <a class="nav-item nav-link" href="#"><img src="${i.src}" alt=""> ${i.name}</a>`);
        })
    }
});

function Func1(arg) {
    // let container = document.getElementById("big_div_one");
    $('#new_db').children().remove();
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

    if (arg > 1) {

    }

}




