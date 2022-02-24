$('button#btn-about-me').click(function() {
    if (!$('div#about-me').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');

        $('button.btn-tab').removeClass('text-white');
        $('button.btn-tab').removeClass('bg-gray-700');

        $('button#btn-about-me').addClass('bg-gray-700');
        $('button#btn-about-me').addClass('text-white');
        $('button#btn-about-me').addClass('rounded-l-md py-3 px-3');

        $('div#about-me-tab').removeClass('hidden');

    }
});

$('button#btn-education').click(function() {
    if (!$('div#education').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');

        $('button.btn-tab').removeClass('text-white');
        $('button.btn-tab').removeClass('bg-gray-700');
        
        $('button#btn-education').addClass('bg-gray-700');
        $('button#btn-education').addClass('text-white');
        
        $('div#education-tab').removeClass('hidden');
    }
});

$('button#btn-work').click(function() {
    if (!$('div#work').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');

        $('button.btn-tab').removeClass('text-white');
        $('button.btn-tab').removeClass('bg-gray-700');

        $('button#btn-work').addClass('bg-gray-700');
        $('button#btn-work').addClass('text-white');

        $('div#work-tab').removeClass('hidden');
    }
});

$('button#btn-others').click(function() {
    if (!$('div#others').hasClass('hidden')) {
        $('div.tab-section').addClass('hidden');

        $('button.btn-tab').removeClass('text-white');
        $('button.btn-tab').removeClass('bg-gray-700');

        $('button#btn-others').addClass('bg-gray-700');
        $('button#btn-others').addClass('text-white');
        $('button#btn-others').addClass('rounded-r-md py-3 px-3');

        $('div#others-tab').removeClass('hidden');
    }
});