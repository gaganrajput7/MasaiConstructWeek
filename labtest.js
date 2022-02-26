var popular = [
    {image: "https://newassets.apollo247.com/cms/2021-06/infection.png",
    text:"Covid 19"},
    {image: "https://newassets.apollo247.com/cms/2021-07/Senior%20citizen.png",
    text:"Senior Citizen"},
    {image: "https://newassets.apollo247.com/cms/2021-05/diabetes_0.png",
    text:"Diabetes"},
    {image: "https://newassets.apollo247.com/cms/2021-07/Full%20body.png",
    text:"Full Body Che..."},
    {image: "https://newassets.apollo247.com/cms/2021-05/fever.png",
    text:"Fever"},
    {image: "https://newassets.apollo247.com/cms/2021-07/Women%20health_0.png",
    text:"Women's Hea..."},
    {image: "https://newassets.apollo247.com/cms/2021-05/anemia.png",
    text:"Anemia"},
    ];
    
    popular.map(function(elem){
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    div2.setAttribute("class","mainimage");
    div3.setAttribute("class","maintext");
    div4.setAttribute("class","mainimage1");
    var img = document.createElement("img");
    img.setAttribute("src",elem.image);
    img.setAttribute("class","mainimg")
    var text = document.createElement("h3");
    text.innerText=elem.text;
    div3.append(text)
    div4.append(img)
    div2.append(div4)
    div.append(div2,div3);
    
    document.querySelector(".popular").append(div)
    
    });
    
    
    var popular2 = [
    {name:"Special Health Package",
    name1:"Premium",
    text:"TOTAL INCLUSIONS : 63",
    name2:"Hba1c, Glycated Hemoglobin",
    name3:"Estimated Average Glucose(Eag)",
    image1:"https://newassets.apollo247.com/images/circle_logo.png",
    name4:"Price र 2400"},
    {name:"Comprehensive Package ",
    name1:"-Women",
    text:"TOTAL INCLUSIONS : 65",
    name2:"Hba1c, Glycated Hemoglobin",
    name3:"Estimated Average Glucose(Eag)",
    image1:"https://newassets.apollo247.com/images/circle_logo.png",
    name4:"Price र 1999"},
    {name:"Diabetes And Lipid ",
    name1:"Profile ",
    text:"TOTAL INCLUSIONS : 12",
    name2:"Hba1c, Glycated Hemoglobin",
    name3:"Estimated Average Glucose(Eag)",
    image1:"https://newassets.apollo247.com/images/circle_logo.png",
    name4:" Price र 698"},
    ];
    
    popular2.map(function(elem){
        var div = document.createElement("div");
    var head = document.createElement("h3");
    head.innerText=elem.name;
    var name1 = document.createElement("h3");
    name1.innerText=elem.name1;
    var text = document.createElement("p");
    text.innerText=elem.text;
    var name2 = document.createElement("h5");
    name2.innerText=elem.name2;
    var name3 = document.createElement("h5");
    name3.innerText=elem.name3;
    var name4 = document.createElement("p");
    name4.innerText=elem.name4;
    var image1 = document.createElement("img");
    image1.setAttribute("src",elem.image1);
    div.append(head,name1,text,name2,name3,image1,name4);
    
    document.querySelector(".popular2").append(div)
    });
    
    
    
    var topbooked = [
    {image:"https://newassets.apollo247.com/organs/virus.png",
    text:"Covid 19 RTPCR With Home...",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"Complete Blood Count (CBC)",
    simpletext:"13 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"C-Reactive Protein...",
    simpletext:"4 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_thyroid.png",
    text:"Thyroid Profile - Free (FT3, FT4,.",
    simpletext:"8 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_liver.png",
    text:"Liver Function Test (LFT)",
    simpletext:"9 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"Complete Urine Examination",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    ];
    
    
    topbooked.map(function(elem){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div1.setAttribute("class","shortimg");
    var div2 = document.createElement("div");
    div2.innerText=elem.text
    div2.setAttribute("class","h2text");
    var div3 = document.createElement("div");
    div3.setAttribute("class","shorttext")
    div3.innerText=elem.simpletext;
    var img = document.createElement("img");
    img.setAttribute("src",elem.image);
    var line = document.createElement("hr");
    div1.append(img);
    var div4 = document.createElement("div");
    div4.setAttribute("class","circelprice")
    var short = document.createElement("img");
    short.setAttribute("src",elem.shortimage);
    var p = document.createElement("p");
    p.innerText="Price ₹700";
    var div5 = document.createElement("div");
    div5.setAttribute("class","price");
    var h2 = document.createElement("h3");
    h2.innerText="₹ 800";
    div5.append(h2)
    var div6 = document.createElement("div");
    div6.setAttribute("class","cart");
    var addcart = document.createElement("a");
    addcart.innerText ="ADD TO CART";
    div6.append(addcart)
    div4.append(short,p)
    div.append(div1,div2,div3,line,div4,div5,div6)
    
    
    
    document.querySelector(".topbooked").append(div);
    });
    
    var diaeties = [
    {image:"https://newassets.apollo247.com/organs/ic_diabetes.png",
    text:"Diabetes And Lipid Profile",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_diabetes.png",
    text:"Diabetes... Screening",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_diabetes.png",
    text:"Diabetes Package Basic",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_diabetes.png",
    text:"Diabetes Package Advance",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"Lipid Profile",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"HbA1c, Glycated Hemoglobin",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png"},
    ];
    diaeties.map(function(elem){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div1.setAttribute("class","shortimg");
    var div2 = document.createElement("div");
    div2.innerText=elem.text
    div2.setAttribute("class","h2text");
    var div3 = document.createElement("div");
    div3.setAttribute("class","shorttext")
    div3.innerText=elem.simpletext;
    var img = document.createElement("img");
    img.setAttribute("src",elem.image);
    var line = document.createElement("hr");
    div1.append(img);
    var div4 = document.createElement("div");
    div4.setAttribute("class","circelprice")
    var short = document.createElement("img");
    short.setAttribute("src",elem.shortimage);
    var p = document.createElement("p");
    p.innerText="Price ₹700";
    var div5 = document.createElement("div");
    div5.setAttribute("class","price");
    var h2 = document.createElement("h3");
    h2.innerText="₹ 700";
    
    div5.append(h2)
    var div6 = document.createElement("div");
    div6.setAttribute("class","cart");
    var addcart = document.createElement("a");
    addcart.innerText ="ADD TO CART";
    div6.append(addcart)
    div4.append(short,p)
    div.append(div1,div2,div3,line,div4,div5,div6)
    
    
    
    document.querySelector(".diaeties").append(div);
    });
    
    var organ = [
    {image:"https://newassets.apollo247.com/cms/2021-05/heart.png",
    text:"Heart"},
    {image:"https://newassets.apollo247.com/cms/2021-05/thyroid.png",
    text:"Thyroid"},
    {image:"https://newassets.apollo247.com/cms/2021-05/jointpain_0.png",
    text:"Joint Pain"},
    {image:"https://newassets.apollo247.com/cms/2021-05/liver.png",
    text:"Liver"},
    {image:"https://newassets.apollo247.com/cms/2021-05/lungs.png",
    text:"Lungs"},
    {image:"https://newassets.apollo247.com/cms/2021-05/kidney.png",
    text:"Kidney"},
    {image:"https://newassets.apollo247.com/cms/2021-07/Full%20body.png",
    text:"Full Body Ch..."},
    {image:"https://newassets.apollo247.com/cms/2021-05/bone.png",
    text:"Bone"},
    ];
    
    organ.map(function(elem){
    var div = document.createElement("div");
    
    var div1 =  document.createElement("div");
    div1.setAttribute("class","organimage");
    var div2 =  document.createElement("div");
    div2.setAttribute("class","roundimage");
    var image = document.createElement("img");
    image.setAttribute("src",elem.image);
    var text = document.createElement("p");
    text.innerText=elem.text;
    div2.append(image)
    div1.append(div2)
    div.append(div1,text)
    document.querySelector(".vital").append(div)
    
    });
    
    var womenorgan = [
    {image:"https://newassets.apollo247.com/cms/2021-05/anemia.png",
    text:"Anemia"},
    {image:"https://newassets.apollo247.com/cms/2021-05/pregnancy.png",
    text:"Pregnancy"},
    {image:"https://newassets.apollo247.com/cms/2021-05/anemia.png",
    text:"Iron Studies"},
    {image:"https://newassets.apollo247.com/cms/2021-05/vitamin%20deficiency.png",
    text:"Vitamin Defic..."},
    ];
    womenorgan.map(function(elem){
    
    var div = document.createElement("div");
    var div1 =  document.createElement("div");
    div1.setAttribute("class","organimage");
    var div2 =  document.createElement("div");
    div2.setAttribute("class","roundimage");
    var image = document.createElement("img");
    image.setAttribute("src",elem.image);
    var text = document.createElement("p");
    text.innerText=elem.text;
    div2.append(image)
    div1.append(div2)
    
    var div3 = document.createElement("div");
    div3.setAttribute("class","smallad");  
    div.append(div1,text)
    document.querySelector(".women").append(div);
    
    });
    
    var womenwill = [
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"Diabetes And Lipid Profile",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png",
    price:"₹ 469"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"Diabetes... Screening",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png",
    price:"₹ 9469"},
    {image:"https://newassets.apollo247.com/organs/ic_diabetes.png",
    text:"Diabetes Package Basic",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png",
    price:"₹ 2969"},
    {image:"https://newassets.apollo247.com/organs/ic_diabetes.png",
    text:"Diabetes Package ",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png",
    price:"₹ 3469"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"Lipid Profile",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png",
    price:"₹ 2469"},
    {image:"https://newassets.apollo247.com/organs/ic_blood.png",
    text:"HbA1c, Glycated Hemoglobin",
    simpletext:"3 Parameters included",
    shortimage:"https://newassets.apollo247.com/images/circle_logo.png",
    price:"₹ 800"},
    ];
    womenwill.map(function(elem){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div1.setAttribute("class","shortimg");
    var div2 = document.createElement("div");
    div2.innerText=elem.text
    div2.setAttribute("class","h2text");
    var div3 = document.createElement("div");
    div3.setAttribute("class","shorttext")
    div3.innerText=elem.simpletext;
    var img = document.createElement("img");
    img.setAttribute("src",elem.image);
    var line = document.createElement("hr");
    div1.append(img);
    var div4 = document.createElement("div");
    div4.setAttribute("class","circelprice")
    var short = document.createElement("img");
    short.setAttribute("src",elem.shortimage);
    var p = document.createElement("p");
    p.innerText="Price ₹700";
    var div5 = document.createElement("div");
    div5.setAttribute("class","price");
    var h2 = document.createElement("h3");
    h2.innerText=elem.price;
    
    div5.append(h2)
    var div6 = document.createElement("div");
    div6.setAttribute("class","cart");
    var addcart = document.createElement("a");
    addcart.innerText ="ADD TO CART";
    div6.append(addcart)
    div4.append(short,p)
    div.append(div1,div2,div3,line,div4,div5,div6)
    
    
    
    document.querySelector(".womenwell").append(div);
    });