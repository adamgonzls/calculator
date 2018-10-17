const header = document.querySelector('#header');
const headerContainer = document.querySelector('.page-container');

const salesRepContainer = document.getElementById('salesRep');

const titles = ["energy consultant", "technical sales representative", "solar consultant", "solar sales specialist", "solar energy consultant", "account manager", "solar sales engineer"];

const randomTitle = titles[Math.floor(Math.random() * titles.length)];

const requestButton = document.getElementById("requestRep");
requestButton.addEventListener("click", requestData);
// requestData();