/*
jQuery is mandatory for this to work, this could also be made with pure js but iam more comfortable with jQuery
*/
$(window).on('load', function () {

    //Just put querySelector instead of #demo-wrapper for element already in the page when window.load event happens.
    //Must be parenting (dont have to be direct parent tho) node to this multiCheckbox
    $('#demo-wrapper')
        .on('click', '.multiChkbox-main>input[type=checkbox]', (e) => {
            if (!$(e.target).prop('checked')) {
                $('.multiChkbox-option-container').removeClass('multiChkbox-visibleContainer');
                $(e.target).closest('.multiChkbox-main').removeClass('multiChkbox-subIsSelected');
                //TODO: Your code block for deselecting everything
            } else {
                $('.multiChkbox-option-container').removeClass('multiChkbox-visibleContainer');
                //TODO: Your code block for selecting all
            }
        })
        .on('mousedown', '.multiChkbox-selection', (e) => {

            if ($('.multiChkbox-option-container').hasClass('multiChkbox-visibleContainer')) {
                $('.multiChkbox-option-container').removeClass('multiChkbox-visibleContainer');
            } else {
                $('.multiChkbox-option-container').addClass('multiChkbox-visibleContainer');
            }

        })
        .on('click', '.multiChkbox-option-container > div > [data-multiChkbox-option]', (e)=>{
            var $parent = $(e.target).closest('.multiChkbox-container');
            $('.multiChkbox-option-container').removeClass('multiChkbox-visibleContainer');
            $parent.find('.multiChkbox-main').addClass('multiChkbox-subIsSelected');
            $parent.find('.multiChkbox-main > input[type=checkbox]').prop( "checked", true );

            //variable holding the name of selected selection from checkbox
            var selectedSelection = $(e.target).attr('data-multiChkbox-option');
            //TODO: Your code block for handling the selection actions based on the data-sets you set in the html

        });

});