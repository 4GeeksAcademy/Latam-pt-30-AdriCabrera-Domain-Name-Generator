/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "some"];
  let adjs = ["great", "big", "cool", "awesome"];
  let nouns = ["jogger", "racoon", "cat", "player"];
  let domains = [".com", ".org", ".es", ".bo"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          domainNames.push(`${pronoun}${adj}${noun}${domain}`);
        }
      }
    }
  }
  document.body.innerHTML = `<ol>${domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join(" ")}</ol>`;
};
