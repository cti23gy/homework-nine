import * as MODEL from "../model/model.js";

function init() {
    let currentHeroImage = "home";
    MODEL;            //places code from model.js
    $("nav a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";

        $(".hero")
            .removeClass(`${currentHeroImage}-hero-content`)
            .addClass(`${btnID}-hero-content`);
        currentHeroImage = btnID;
        $(`.${currentHeroImage}-hero-content .page-name`).html(btnID);
        console.log(btnID);

        MODEL.getPageContent(contentID);
    });
}

//checks for all elemants to be read by browser
$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
});