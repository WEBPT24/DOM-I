const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.title = 'Great Idea!';
//nav bar
const navBar = document.querySelectorAll('a');
const downloadLink = document.createElement('a');
const previewLink = document.createElement('a');
const grabNav = document.querySelector('nav');

navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6']

grabNav.appendChild(downloadLink);
downloadLink.textContent = 'Download';
downloadLink.setAttribute('href', '#');
downloadLink.style.color = 'green';

grabNav.prepend(previewLink);
previewLink.textContent = 'Preview';
previewLink.setAttribute('href', '#');
previewLink.style.color = 'green';

navBar.forEach((a) => {
	a.style.color = 'green';
});

//cta
const ctaTitle = document.querySelector('.cta-text > h1');
ctaTitle.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text > button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main content
const contentTitle = document.querySelectorAll('h4');
const contentParagraph = document.querySelectorAll('p');

contentTitle[0].textContent = siteContent['main-content']['features-h4'];
contentTitle[1].textContent = siteContent['main-content']['about-h4'];
contentTitle[2].textContent = siteContent['main-content']['services-h4'];
contentTitle[3].textContent = siteContent['main-content']['product-h4'];
contentTitle[4].textContent = siteContent['main-content']['vision-h4'];

contentParagraph[0].textContent =
	siteContent['main-content']['features-content'];
contentParagraph[1].textContent = siteContent['main-content']['about-content'];
contentParagraph[2].textContent =
	siteContent['main-content']['services-content'];
contentParagraph[3].textContent =
	siteContent['main-content']['product-content'];
contentParagraph[4].textContent = siteContent['main-content']['vision-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//footer and address
const contactTitle = document.querySelector('.contact > h4');
contactTitle.textContent = siteContent.contact['contact-h4'];

const contactAddr = document.querySelectorAll('.contact > p');

contactAddr[0].textContent = siteContent.contact.address;
contactAddr[1].textContent = siteContent.contact.phone;
contactAddr[2].textContent = siteContent.contact.email;

const addFooter = document.querySelector('footer > p');
addFooter.textContent = siteContent.footer.copyright;