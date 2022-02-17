$('button#btn-about-me').click(function() {
    if (!$('div#about-me').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');
        $('div#about-me-tab').removeClass('hidden');
    }
});

$('button#btn-education').click(function() {
    if (!$('div#education').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');
        $('div#education-tab').removeClass('hidden');
    }
});

$('button#btn-work').click(function() {
    if (!$('div#work').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');
        $('div#work-tab').removeClass('hidden');
    }
});

$('button#btn-others').click(function() {
    if (!$('div#others').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');
        $('div#others-tab').removeClass('hidden');
    }
});