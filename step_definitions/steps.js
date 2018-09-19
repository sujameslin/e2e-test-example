const { client } = require('nightwatch-cucumber')
const { Given, Then, When } = require('cucumber')
//
// Given(/^I open app$/, () =>{
//   client.url(client.launchUrl).waitForElementVisible('body', 5000);
//   return client;
// });
// Then(/^I see textbox with value "(.*?)"$/, number => {
//   const calc = client.page.calc();
//   calc.getValue('@textBox', function(result){
//     this.assert.equal(result.value, number);
//   });
//   return client;
// });
//
// module.exports = function () {
//   this.Given(/^I open the Modus Create home page$/, function (callback) {
//     this
//       .url(this.launch_url)
//       .waitForElementVisible('body', 1000)
//
//     callback(null, 'pending')
//   })
// }

Given(/^I open the Modus Create home page$/, () => {
  client.url(client.launchUrl).waitForElementVisible('body', 1000)

  return client
})

Then(/^the title is "([^"]*)"$/, text => {
  return client.assert.title(text)
})

Then(/^the About Page link exists$/, () => {
  return client.assert.elementPresent('a.CybotCookiebotDialogBodyButton')
})
