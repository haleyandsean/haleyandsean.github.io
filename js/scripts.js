$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Haley and Sean's Wedding",

            // Event start date
            start: new Date("2025-06-28T22:00:00.000Z"), 

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date("2025-06-29T06:00:00.000Z"),

            // Event Address
            address: 'Terra Mia Resort and Wedding Venue, 1693 Arbor Rd, Paso Robles, CA 93446',

            // Event Description
            description: "We're so excited to see you! If you have any questions, feel free to reach out at parmeseanmac@gmail.com or your preferred communication channel."
        }
    });

    $('#add-to-cal').html(myCalendar);
    
    $(".collapsible").click(function() {
        $(this).toggleClass("active");
        var content = $(this).prev(".gallery-container");
        
        if ($(this).hasClass("active")){
            content.css("max-height", content.prop("scrollHeight") + "px");
        } else {
            content.css("max-height", "50vh");
        }
        $(this).find("i.fa").toggleClass("fa-angle-down fa-angle-up");
        content.toggleClass('remove');
    });

    /********************** Image Lightbox ************/

    var images = $('.gallery-image');
    var currentIndex = -1;

    function changeImage(index) {
        var imgSrc = $(images[index]).attr('src');
        $('#lightbox-content').attr('src', imgSrc);

        // Hide/show arrows based on currentIndex
        if (index === 0) {
            $('.left-arrow').hide();  // Hide left arrow if on the first image
        } else {
            $('.left-arrow').show();  // Show left arrow otherwise
        }

        if (index === images.length - 1) {
            $('.right-arrow').hide();  // Hide right arrow if on the last image
        } else {
            $('.right-arrow').show();  // Show right arrow otherwise
        }
    }

    $('.gallery-image').click(function() {
        currentIndex = images.index(this);
        changeImage(currentIndex);
        $('#lightbox').css('display', 'flex').hide().fadeIn();
    });

    $('.close, #lightbox').click(function() {
        $('#lightbox').fadeOut();
    });

    // Prevent the lightbox from closing when clicking on the image itself
    $('#lightbox-content').click(function(event) {
        event.stopPropagation();
    });

    $('.light-arrow').click(function(event) {
        event.stopPropagation();
    });

    // Keydown event for arrow keys
    $(document).keydown(function(event) {
        if ($('#lightbox').is(':visible')) {
            if (event.key === 'ArrowRight') {
                if (currentIndex + 1 < images.length){
                    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
                    changeImage(currentIndex);
                }
            } else if (event.key === 'ArrowLeft') {
                if (currentIndex > 0) {
                    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
                    changeImage(currentIndex);
                }
            }
        }
    });

    // Navigate with arrow buttons
    $('.right-arrow').click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        changeImage(currentIndex);
    });

    $('.left-arrow').click(function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeImage(currentIndex);
    });


    /********************** RSVP **********************/
    $('#rsvp-form-name').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        $('#alert-wrapper-name').html(alert_markup('info', '<strong>Just a sec!</strong> Looking up your details.'));
        $("#load-im-submit").attr('src', 'img/fancybox_loading.gif').css('display', '');

        var sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRs9aRCJ4o76Ehvm_qPuoRrnpkzpTI6CIrqAqS0OgScKCwmaHOQemEI3NNzhSpZuw6_aE_OmZsY6VaA/pub?gid=1548690852&single=true&output=csv';
        
        var responseUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRs9aRCJ4o76Ehvm_qPuoRrnpkzpTI6CIrqAqS0OgScKCwmaHOQemEI3NNzhSpZuw6_aE_OmZsY6VaA/pub?gid=564948722&single=true&output=tsv';

        // Validate form input
        var name = $('#name').val();

        fetch(sheetUrl)
            .then((response) => response.text())
            .then((data) => {
                createForm(data, name);
                return fetch(responseUrl);
            })
            .then((response2) => response2.text())
            .then((data2) => checkEdit(data2))
            .then(()=>{
                if ($('#num_guests').val() > 0) {
                    $('#rsvp-fetch').modal('show');
                } else {
                    $('#alert-wrapper-name').html(alert_markup('danger', "<strong>Oops!</strong> We can't find an invite under that name. <a class=\"text-link\" href=\mailto:parmeseanmac@gmail.com\">Email us</a> if you suspect there's an issue."));
                    $("#load-im-submit").attr('src', '').css('display', 'none');
                }
            });
    });

    $('#rsvp-fetch').on('shown.bs.modal', function () {
        $("#load-im-submit").attr('src', '').css('display', 'none');
    });

    $('#rsvp-fetch').on('hidden.bs.modal', function () {
        reInitializeForm();
        $('#alert-wrapper-name').html('');
        $('#modal-message').text("Please wait while your response is recorded...");
        $('#load-im').attr('src', 'img/fancybox_loading.gif').css('display', '');
    });

    $("#checkbox-rsvp").on('submit', function(e) {
        e.preventDefault();

        var valid_email = true;
        var email = document.getElementById('email').value;
        if (email.trim() == ''){
            $('#alert-wrapper-email').html(alert_markup('danger', 'Please enter your email'));
            valid_email = false;
        }
        if (valid_email) {
             $('#alert-wrapper-email').html('');
        }

        var valid_check = true;
        for (var index = 0; index < $('#num_guests').val(); ++index) {
            const checkbox_att = document.getElementById(`attending_${index}`);
            const checkbox_dec = document.getElementById(`declines_${index}`);

            if (!checkbox_att.checked && !checkbox_dec.checked) {
                // Display error message
                $('#alert-wrapper-check').html(alert_markup('danger', 'Please check one option for each guest'));
                valid_check = false;
            }
        }
        if (valid_check) {
             $('#alert-wrapper-check').html('');
        }

        if (valid_check && valid_email) {
            var data = $(this).serialize();

            // Convert form data to an object
            var formObject = {};

            formObject["num_guests"] = $('#num_guests').val();
            $(this).serializeArray().forEach(function(item) {
                if (item.name == "email") {
                    var rawEmails = item.value;
                    // Define a regular expression to match various separators (commas, spaces, semicolons, newlines)
                    const emailArray = rawEmails.split(/[\s,;]+/);
                    
                    // Filter out any empty strings in case there were consecutive separators
                    const cleanedEmails = emailArray.filter(email => email.trim() !== '');
                    
                    // Join the emails into a single comma-separated string
                    const commaSeparatedEmails = cleanedEmails.join(', ');

                    formObject[item.name] = commaSeparatedEmails;
                }
                else{
                    formObject[item.name] = item.value;
                }
            });

            // Find unchecked checkboxes and add them to the object with value 'false'
            $(this).find('input[type="checkbox"]').each(function() {
                if (!$(this).is(':checked')) {
                formObject[$(this).attr('name')] = 'false';
                } else {
                formObject[$(this).attr('name')] = 'true';
                }
            });

            $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));
            $("#rsvp-fetch").modal('hide');       
            $('#rsvp-modal').modal('show');
            $.post('https://script.google.com/macros/s/AKfycbxtkKtSbl1lPB3fPva-r6Hy8NbuBZy2fm6oVOEafz1TeulgTdcyH3PKszt_iYc4ptej/exec', formObject)
            .done(function (data) {
                if (data.result === "error") {
                    $('#alert-wrapper').html(alert_markup('danger', data.message));
                    $('#load-im').attr('src','').css('display', 'none');
                    $('#modal-message').text("Submission failed! Please reach out to parmeseanmac@gmail.com.");
                } else {
                    $('#alert-wrapper').html('');
                    $('#load-im').attr('src','').css('display', 'none');
                    $('#modal-message').text("Submission successful!");
                }
            })
            .fail(function (data) {
                $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
            });
        }
    });

});

/********************** Extras **********************/

function serializeForm(form) {
    const formData = new FormData(form);
    form.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
        if (!formData.has(checkbox.name)) {
            formData.append(checkbox.name, checkbox.value);
        }
    });
    const params = new URLSearchParams(formData).toString();
    return params;
}

function extractNumber(str) {
    const match = str.match(/(\d+)$/); // Match one or more digits at the end of the string
    return match ? parseInt(match[0], 10) : null;
}

function checkEdit(csv) {
    const rows = csv.split('\n');

    var form = document.getElementById('checkbox-rsvp');
    var data = serializeForm(form);

    const params = new URLSearchParams(data);
    var names = [];
    var idxs = [];
    for (const [name, value] of params) {
        if (name.includes('guest_name')){
            names.push(value);
            idxs.push(extractNumber(name));
        }
    }

    var rowIdxs = [];
    rows.forEach((row, ridx) => {
        const cols = row.replace("\r", "").split('\t');
        for (const [index, name] of names.entries()){
            if ((cols[1].trim() == name.trim()) | (cols[4].trim() == name.trim())){
                if(!rowIdxs.includes(ridx)){rowIdxs.push(ridx);}
            }
        }
    });

    rowIdxs = rowIdxs.slice(-names.length);

    var submitDict = {}
    var otherDict = {}
    rows.forEach((row, ridx) => {
        const cols = row.split('\t');
        if ((ridx == 0)) { return; }
        if (rowIdxs.includes(ridx)){
            var index = rowIdxs.indexOf(ridx);
            if(cols[1].trim() == cols[4].trim()){
                submitDict[`guest_name_${idxs[index]}`] = cols[1].trim();
                submitDict[`attending_${idxs[index]}`] = cols[2];
                submitDict[`declines_${idxs[index]}`] = cols[3];
                submitDict['email'] = cols[5];
                submitDict['diet'] = cols[6];
                submitDict['haiku'] = cols[7].replace(/\r\s*/g, "\r");
                submitDict['comments'] = cols[8].replace(/\r/g, "");
            }
            else{
                otherDict[`guest_name_${idxs[index]}`] = cols[1].trim();
                otherDict[`attending_${idxs[index]}`] = cols[2];
                otherDict[`declines_${idxs[index]}`] = cols[3];
            }
        }
    });

    var editing = false;
    for (const [name, value] of params) {
        const fields = form.querySelectorAll(`[name="${name}"]`);
        fields.forEach(field => {
            if (name in submitDict){
                editing = true;
                if (field.type === 'radio' || field.type === 'checkbox') {
                    field.checked = (submitDict[name].trim() == "TRUE");
                } else {
                    field.value = submitDict[name];
                }
            } else if (name in otherDict){
                editing = true;
                if (field.type === 'radio' || field.type === 'checkbox') {
                    field.checked = (otherDict[name].trim() == "TRUE");
                } else {
                    field.value = otherDict[name];
                }
            }
        });
    }

    if (editing){
        var editMessage = document.getElementById('edit_message');
        editMessage.textContent = " You have already responded. Feel free to edit!";
    }

}


function displayCSVData(csv, name) {
    const rows = csv.split('\n');
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');

    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    rows.forEach((row, index) => {
        const cols = row.split(',');
        if ((cols[0] == name) && (index != 0)){
            const tr = document.createElement('tr');

            cols.forEach(col => {
                const cell = document.createElement(index === 0 ? 'th' : 'td');
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });

            if (index === 0) {
                tableHead.appendChild(tr);
            } else {
                tableBody.appendChild(tr);
            }
        }
    });
}

function getNumInvites(csv, name) {
    const rows = csv.split('\n');
   
    var guestID = '';
    var properName = '';
    rows.forEach((row, index) => {
        const cols = row.split(',');
        if ((index == 0) || (guestID != '')) { return; }
        if ((cols[0].trim().toUpperCase() == name.trim().toUpperCase()) && (cols[0] != '')) {
            guestID = cols[1]; 
            properName = cols[0];
        }
    });

    var numInvites = 0;
    var names = [properName.trim()];
    rows.forEach((row, index) => {
        const cols = row.split(',');
        if (index == 0) { return; }
        if (cols[1].trim() == guestID.trim()) {
            if (cols[0].trim() != properName.trim()){
                names.push(cols[0].trim());
            }
            numInvites += 1; 
        }
    });

    return { numInvites, names };
}

 // Function to create and return a row with textbox and checkboxes
function createRow(index, name) {
    const row = document.createElement("tr");
    
    // Textbox in the first column
    const textboxCell = document.createElement("td");
    const tb_wrap = document.createElement("div");
    tb_wrap.className = "col-md-12 col-sm-12";
    const in_group = document.createElement("div");
    in_group.className = "form-input-group";

    const textbox = document.createElement("input");
    textbox.name = `guest_name_${index}`;
    textbox.className = "small-input";
    textbox.value = "";
    in_group.appendChild(textbox);
    tb_wrap.appendChild(in_group);
    textboxCell.appendChild(tb_wrap);
    row.appendChild(textboxCell);

    if (name != '') {
        // Pre-fill the first textbox in the first row
        textbox.value = name;
    }
    
    // Checkboxes in the second and third columns
    const checkbox1Cell = document.createElement("td");
    const checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox1.name = `attending_${index}`;
    checkbox1.id = `attending_${index}`;
    checkbox1.className = "form-check-input";
    checkbox1Cell.appendChild(checkbox1);
    row.appendChild(checkbox1Cell);

    const checkbox2Cell = document.createElement("td");
    const checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.name = `declines_${index}`;
    checkbox2.id = `declines_${index}`;
    checkbox2.className = "form-check-input";
    checkbox2Cell.appendChild(checkbox2);
    row.appendChild(checkbox2Cell);

    // Add event listener to each pair
    checkbox1.addEventListener('change', function() {
      if (checkbox1.checked) {
        checkbox2.disabled = true;
        checkbox2.checked = false;
      } else {
        checkbox2.disabled = false;
      }
    });

    checkbox2.addEventListener('change', function() {
      if (checkbox2.checked) {
        checkbox1.disabled = true;
        checkbox1.checked = false;
      } else {
        checkbox1.disabled = false;
      }
    });

    return row;
}

// Function to add a new row to the form
function addRow(name) {
    const formBody = document.getElementById("rsvpBody");

    const index = formBody.children.length; // Index of the new row
    const row = createRow(index, name); // Create the new row
    formBody.appendChild(row); // Add the new row to the form
}

// Function to create checkboxes dynamically
function createForm(csv, name) {
    var {numInvites, names} = getNumInvites(csv, name);
    document.getElementById('num_guests').textContent = `${numInvites}`;
    document.getElementById('num_guests').value = numInvites;

    for (let i = 0; i < numInvites; i++) {
        addRow(names[i]);
    }
}

function reInitializeForm(){
    var form = document.getElementById('checkbox-rsvp');
    var formBody = document.getElementById('rsvpBody');
    formBody.innerHTML = "";
    form.reset();
    
    var editMessage = document.getElementById('edit_message');
    editMessage.textContent = '';

    var numGuests = document.getElementById('num_guests');
    numGuests.textContent = '?';
    numGuests.value = 0;
}


// Function to create checkboxes dynamically
function createChecklist(csv, name) {
    var { numInvites, names } = getNumInvites(csv, name);
    var checkboxList = document.getElementById('checkboxList');

    for (let i = 0; i < numInvites; i++) {
        const listItem = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `item${i}`;
        checkbox.name = `item${i}`;
        checkbox.value = `Item ${i + 1}`;
        
        const label = document.createElement('label');
        label.htmlFor = `item${i}`;
        label.appendChild(document.createTextNode(`Item ${i + 1}`));

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        checkboxList.appendChild(listItem);
    
    }
}


// Google map
function initMap() {
    var location = {lat: 22.5932759, lng: 88.27027720000001};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 20.305826, lng: 85.85480189999998};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};