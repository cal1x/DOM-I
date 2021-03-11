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

// nav Links
const navLinks = document.querySelectorAll('nav a');
for(let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}

// CTA Content section
let headingText = siteContent.cta.h1;
headingText = headingText.split(" ").join("<br> ");
document.querySelector('h1').innerHTML = headingText;

document.querySelector('.cta button').textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src'])


// main Content section
const mainContentHeadings = document.querySelectorAll('.text-content h4');
mainContentHeadings[0].textContent = siteContent['main-content']['features-h4'];
mainContentHeadings[1].textContent = siteContent['main-content']['about-h4'];
mainContentHeadings[2].textContent = siteContent['main-content']['services-h4'];
mainContentHeadings[3].textContent = siteContent['main-content']['product-h4'];
mainContentHeadings[4].textContent =siteContent['main-content']['vision-h4'];

const mainContentText = document.querySelectorAll('.text-content p');
mainContentText[0].textContent = siteContent['main-content']['features-content'];
mainContentText[1].textContent = siteContent['main-content']['about-content'];
mainContentText[2].textContent = siteContent['main-content']['services-content'];
mainContentText[3].textContent = siteContent['main-content']['product-content'];
mainContentText[4].textContent = siteContent['main-content']['vision-content'];

const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// contact Info section
const contactInfo = document.querySelectorAll('.contact');
contactInfo[0].childNodes[1].textContent = siteContent['contact']['contact-h4'];
contactInfo[0].childNodes[2].textContent = siteContent['contact']['address']
contactInfo[0].childNodes[3].textContent = siteContent['contact']['phone']
contactInfo[0].childNodes[4].textContent = siteContent['contact']['email']


// footer section
const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright'];