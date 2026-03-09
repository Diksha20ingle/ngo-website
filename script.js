function setLanguage(lang){

if(lang === "mr"){

document.getElementById("welcome").innerText="आपले स्वागत आहे";

document.getElementById("intro").innerText="शिक्षण, महिला सक्षमीकरण आणि ग्रामीण विकासासाठी कार्य.";

document.getElementById("about-title").innerText="आमच्याबद्दल";

document.getElementById("about-text").innerText="विश्वदर्शा फाउंडेशन मानवता ही संस्था सामाजिक विकासासाठी कार्य करते.";

document.getElementById("obj-title").innerText="उद्दिष्टे";

document.getElementById("act-title").innerText="उपक्रम";

}

else{

document.getElementById("welcome").innerText="Welcome";

document.getElementById("intro").innerText="Working for education, women empowerment and rural development.";

document.getElementById("about-title").innerText="About Us";

document.getElementById("about-text").innerText="Vishvadarsha Foundation Manavta is a social organization.";

document.getElementById("obj-title").innerText="Objectives";

document.getElementById("act-title").innerText="Our Activities";

}

}