var dio = {}
module.exports = {
    beforeEach: browser => {
        dio = browser.page.pageObjects()
        .maximizeWindow()
        dio.navigate()
    },
    after: browser => {
        browser.end()
    },
"Close Popup": browser => {
dio
    .waitForElementVisible('@popupBox', 10000)
    .waitForElementVisible('@popupCloseBtn', 10000)
    .click('@popupCloseBtn')
    .api.pause(2000)
dio
},
"Can I Add An Item To My Cart": browser => {
dio
    .click('@searchBtn')
    .setValue('@mainSearchInput', 'Qanun')
    .click('@mainSearchSingleResult')
    .waitForElementVisible('@addToCart')
    .click('@addToCart')
    .api.pause(10000)
dio
    .click('@goToCart')
    .waitForElementVisible('@removeItem', 10000)
dio
    .assert.visible('@removeItem')
    },
"Can I Remove An Item From My Cart": browser => {
dio
    .api.pause(4000)
dio
    .click('@goToCart')
    .waitForElementVisible('@removeItem', 6000)
    .click('@experimentRemoveItem')
    .api.pause(5000)
dio
    .click('@homeBtn')
    .api.pause(6000)
dio
    .click('@goToCart')
    .api.pause(6000)
dio
    .waitForElementVisible('@verifyCartEmpty')
    .expect.element('@verifyCartEmpty').text.to.contain('Your cart is currently empty.')
dio
    .click('@continueShopping')

    },
"Can I Login (With Existing Account)?": browser => {
dio
    .api.pause(4000)
dio
    .click('@myAccount')
    .waitForElementVisible('@loginSubmitBtn')
    .setValue('@loginEmailInput', 'coastal6music@gmail.com')
    .setValue('@loginPassInput', 'DarthVader623712')
    .click('@loginSubmitBtn')
    .waitForElementVisible('@goToCart')
    .assert.visible('@goToCart')
    .assert.visible('@homeBtn')
    },
"Can I Logout, When Logged In?": browser => {
dio
    .api.pause(2000)
dio
    .click('@myAccount')
    .waitForElementVisible('@logout', 7000)
    .click('@logout')
    .waitForElementVisible('@loginSubmitBtn', 10000)
    .verify.visible('@loginSubmitBtn')
    },
// "Can I Leave A Review? (Don't do this one much, I don't want to spam reviews)": browser => {
// dio
//     .api.pause(2000)
// dio 
//     .click('@homeBtn')
//     .waitForElementVisible('@myAccount')
//     .click('@myAccount')
//     .waitForElementVisible('@loginSubmitBtn')
//     .setValue('@loginEmailInput', 'coastal6music@gmail.com')
//     .setValue('@loginPassInput', 'DarthVader623712')
//     .click('@loginSubmitBtn')
//     .waitForElementVisible('@goToCart')
//     .assert.visible('@goToCart')
//     .assert.visible('@homeBtn')
//     .click('@searchBtn')
//     .api.pause(2000)
// dio
//     .setValue('@mainSearchInput', 'Majestica')
//     .api.pause(5000)
// dio
//     .click('@mainSearchSingleResult')
//     .waitForElementVisible('@leaveReview', 6000)
//     .click('@leaveReview')
//     .api.pause(5000)
// dio
//     .setValue('@reviewInput', "This is fantastic! Used in countless projects to great effect.")
//     .setValue('@reviewTitle', 'Love It!')
//     .api.pause(3000)
// dio
//     .moveToElement('@leaveReviewHeader', 10, 10)
//     .click('@fiveStarReview')
//     .click('@reviewSubmitBtn')
//     .api.pause(10000)
// dio
//     },
"Can I Play a Video?": browser => {
dio
    .api.pause(4000)
dio
    .click('@myAccount')
    .waitForElementVisible('@loginSubmitBtn')
    .setValue('@loginEmailInput', 'coastal6music@gmail.com')
    .setValue('@loginPassInput', 'DarthVader623712')
    .click('@loginSubmitBtn')
    .waitForElementVisible('@goToCart')
    .assert.visible('@goToCart')
    .assert.visible('@homeBtn')
    .api.pause(3000)
dio
    .click('@searchBtn')
    .setValue('@mainSearchInput', 'Solo Taiko')
    .click('@mainSearchSingleResult')
    .waitForElementVisible('@addToCart')
    .moveToElement('@videoAreaHeader', 10, 10)
    .waitForElementVisible('@videoAreaHeader')
    .click('@playVideo1')
    .api.pause(6000)
dio
    browser.keys("k")
dio
    .api.pause(4000)
dio
    .click('@closeVideo')
    },
}