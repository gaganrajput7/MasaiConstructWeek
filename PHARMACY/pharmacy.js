       
       
            //--SHOP BY HEALTH CONDITIONS---//

       var  healthData = [
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
                name:"COVID Care"
                },
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/coronavirus_protection_1.png",
                name:"Covid Protection"
                },
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_diabetes.png",
                name:"Diabetes Care"
                },
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/m/i/mind_care.jpg",
                name:"Mind Care"
                },
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/l/i/liver_care.jpg",
                name:"Liver Care"
                },
                {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_heart.png",
                name:"Cardiac"
                },
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_arthritis.png",
        // name:"Pain Relief"
        // },
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/o/r/oral_care_2.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_lungs.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_stomach.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_condom.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/c/o/cold_and_immunity_21oct.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_eyeear.png"},
        // {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/a/d/adult.png"},
    ]
       
        healthData.map(function(elem){
                    
            var maindiv1=document.createElement("div")
        
            var achorTag=document.createElement("a")
            achorTag.setAttribute("href","")
            achorTag.setAttribute("class","achorTag")

            var innerDiv=document.createElement("div")
            innerDiv.setAttribute("id","innerDiv")

           var childDiv1=document.createElement("div")
           var image= document.createElement("img")
            image.setAttribute("src",elem. image);
            image.setAttribute("id", "shopByHelthConditionImg")
            childDiv1.append(image)


           var childDiv2=document.createElement("div")
            var name=document.createElement("p");
            name.innerText=elem.name
            childDiv2.append(name)

            innerDiv.append(childDiv1,childDiv2)

            achorTag.append(innerDiv)

            maindiv1.append(achorTag)

           document.querySelector("#container").append(maindiv1)
           

        })
        


        // POST COVID ESSENTIALS Js ---//

        var postCovidEssentialsData=[
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/_/c.jpg",
                name:"Zincovi Tablet 15s",
                 price:"MRP  Rs. 105",
               
                discount:"₹ 6 discount back",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210108_163844__front__biotin_tablets_60_s.jpg",
                name:"Apollo Life Biotin 5000 mcg, 60 Tablets",
                 price:"MRP  Rs. 475",
               
                discount:"₹ 48 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/o/hor0160_1_2.jpg",
                name:"Horlicks Protein+ Vanilla Flavoured Health and...",
                 price:"MRP  Rs. 490",
               
                discount:"₹ 29 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/i/lim0003.jpg",
                name:"Limcee Vitamin C 500 mg Orange Flavour....",
                 price:"MRP  Rs. 20.09",
               
                discount:"₹ 1 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/e/hea0485_1_.jpg",
                name:"Healthvit Melatonin 10 mg, 60 Tablets",
                 price:"MRP  Rs. 360",
               
                discount:"₹ 22 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/h/n/hnb0014.jpg",
                name:"Holland &amp; Barrett Vitamin D3 10 ug..",
                 price:"MRP  Rs. 715.5",
               
                discount:"₹ 43 extra cashback",
               addcart:"ADD TO CART"
            },

        ]


        postCovidEssentialsData.map(function(elem){
            main1=document.createElement("div");
             main1.setAttribute("id","main1")

             mainImage=document.createElement("img");
             mainImage.setAttribute("src",elem.image)
             mainImage.setAttribute("id","mainImage")

             nameDiv=document.createElement("div");
             nameDiv.setAttribute("id","nameDiv")
             nameDiv.innerText=elem.name

             hrDiv=document.createElement("div");
             hrDiv.setAttribute("id","hrDiv")
             hr=document.createElement("hr");
             hrDiv.append(hr)

            priceDiv3=document.createElement("div");
            priceDiv3.setAttribute("id","priceDiv3")
                 var span1=document.createElement("h3");
                 span1.innerText=elem.price
     
                priceDiv3.append(span1)

            discountDiv=document.createElement("div");
            discountDiv.setAttribute("id","discountDiv")
            discountDiv.innerText=elem. discount
                
            buttonDiv=document.createElement("div")
            buttonDiv.setAttribute("id","buttonDiv")
                 button=document.createElement("button");
                 button.setAttribute("id","button")
                 button.addEventListener("click",function(){
                    addcartfunction(elem)
                })
                 button.innerText=elem.addcart
                 buttonDiv.append(button)

            main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
             document.querySelector("#container2").append(main1)
        })



        // SKIN CARE js

        var skinCareData=[
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/2/12757_h-8901030722202.jpg",
                name:"Ponds Men Energy Bright Facewash, 100 gm",
                 price:"MRP  Rs. 143.5",
               
                discount:"₹ 9 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/e/cet0236.jpg",
                name:"Cetaphil Restoraderm Moisturising Lotion...",
                 price:"MRP  Rs. 1960",              
                discount:"₹ 118 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/l/a/las0139.jpg",
                name:"La Shield Sunscreen Gel SPF 50 PA+++ UVA..",
                 price:"MRP  Rs. 224",              
                discount:"₹ 13 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/e/seb0040_2.jpg",
                name:"Sebamed Clear Face Cleansing Foam, 150 ml",
                 price:"MRP  Rs. 580",              
                discount:"₹ 35 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/h/aha0006.jpg",
                name:"Ahaglow Skin Rejuvenating Gel Face...",
                 price:"MRP  Rs. 477",              
                discount:"₹ 29 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/h/pho0052.jpg",
                name:"Photostable Sunscreen Emulgel SPF 40+ PA+",
                 price:"MRP  Rs. 675",              
                discount:"₹ 41 extra cashback",
               addcart:"ADD TO CART"
            },

        ]


        skinCareData.map(function(elem){
            main1=document.createElement("div");
             main1.setAttribute("id","main1")

             mainImage=document.createElement("img");
             mainImage.setAttribute("src",elem.image)
             mainImage.setAttribute("id","mainImage")

             nameDiv=document.createElement("div");
             nameDiv.setAttribute("id","nameDiv")
             nameDiv.innerText=elem.name

             hrDiv=document.createElement("div");
             hrDiv.setAttribute("id","hrDiv")
             hr=document.createElement("hr");
             hrDiv.append(hr)

            priceDiv3=document.createElement("div");
            priceDiv3.setAttribute("id","priceDiv3")
                 var span1=document.createElement("h3");
                 span1.innerText=elem.price
     
                priceDiv3.append(span1)

            discountDiv=document.createElement("div");
            discountDiv.setAttribute("id","discountDiv")
            discountDiv.innerText=elem. discount
                
            buttonDiv=document.createElement("div")
            buttonDiv.setAttribute("id","buttonDiv")
                 button=document.createElement("button");
                 button.setAttribute("id","button")
                 button.addEventListener("click",function(){
                    addcartfunction(elem)
                })
                 button.innerText=elem.addcart
                 buttonDiv.append(button)

            main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
             document.querySelector("#container3").append(main1)
        })



        // HEALTH DEVICES js

         var healthDevicesData=[
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/c/acc0005_3.jpg",
                name:"Accu-Chek Active Blood Glucose Monitoring...",
                 price:"MRP  Rs. 1279",              
                discount:"₹ 77 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/p/bpm0063_1_1.jpg",
                name:"Omron Blood Pressure Monitor HEM-7121J...",
                 price:"MRP  Rs. 1875",              
                discount:"₹ 113 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/o/n/one0174_-_sps_amazon_imgs1.jpg",
                name:"OneTouch Select Plus Simple Glucometer ...",
                 price:"MRP  Rs. 875",              
                discount:"₹ 53 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/a/c/acc0008.jpg",
                name:"Accu-Chek Active Test Strips, 50 Count",
                 price:"MRP  Rs. 819",              
                discount:"₹ 49 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210116_122912__front__digital_thermometer_flexible.jpg",
                name:"Apollo Pharmacy Digital Flexible Thermometer",
                 price:"MRP  Rs. 100",              
                discount:"₹ 10 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/i/m/img_20210115_170438__front__pulse_oximeter.jpg",
                name:"Apollo Pharmacy Pulse Oximeter ZM-700-01",
                 price:"MRP  Rs. 750",              
                discount:"₹ 75 extra cashback",
               addcart:"ADD TO CART"
            },

        ]


        healthDevicesData.map(function(elem){
            main1=document.createElement("div");
             main1.setAttribute("id","main1")

             mainImage=document.createElement("img");
             mainImage.setAttribute("src",elem.image)
             mainImage.setAttribute("id","mainImage")

             nameDiv=document.createElement("div");
             nameDiv.setAttribute("id","nameDiv")
             nameDiv.innerText=elem.name

             hrDiv=document.createElement("div");
             hrDiv.setAttribute("id","hrDiv")
             hr=document.createElement("hr");
             hrDiv.append(hr)

            priceDiv3=document.createElement("div");
            priceDiv3.setAttribute("id","priceDiv3")
                 var span1=document.createElement("h3");
                 span1.innerText=elem.price
     
                priceDiv3.append(span1)

            discountDiv=document.createElement("div");
            discountDiv.setAttribute("id","discountDiv")
            discountDiv.innerText=elem. discount
                
            buttonDiv=document.createElement("div")
            buttonDiv.setAttribute("id","buttonDiv")
                 button=document.createElement("button");
                 button.setAttribute("id","button")
                 button.addEventListener("click",function(){
                    addcartfunction(elem)
                })
                 button.innerText=elem.addcart
                 buttonDiv.append(button)

            main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
             document.querySelector("#container4").append(main1)
        })


        // HOT SELLERS js

        var  hotSellersData=[
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/s/w/swa0093_2.jpg",
                name:"Swadeshi Ayush Kadha, 50 gm",
                 price:"MRP  Rs. 39.5",              
                discount:"₹ 2 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/f/r/friends_underpads_classic_1.png",
                name:"Friends Classic Underpads Large...",
                 price:"MRP  Rs. 318.5",              
                discount:"₹ 19 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/c/e/cet0347_2.jpg",
                name:"Cetaphil Baby Daily lotion With Shea Butter...",
                 price:"MRP  Rs. 665",              
                discount:"₹ 40 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/z/a/zan0027.jpg",
                name:"Zandu Pancharistha Ayurvedic Digestive Tonic",
                 price:"MRP  Rs. 126",              
                discount:"₹ 8 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/p/a/pam0314_1.jpg",
                name:"Pampers Premium Care Diaper Pants XL...",
                 price:"MRP  Rs. 1609",              
                discount:"₹ 97 extra cashback",
               addcart:"ADD TO CART"
            },
            {
                image:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/b/p/bpm0063_1_1.jpg",
                name:"Omron Blood Pressure Monitor HEM-7121J...",
                 price:"MRP  Rs. 1875",              
                discount:"₹ 113 extra cashback",
               addcart:"ADD TO CART"
            },

        ]


        hotSellersData.map(function(elem){
            main1=document.createElement("div");
             main1.setAttribute("id","main1")

             mainImage=document.createElement("img");
             mainImage.setAttribute("src",elem.image)
             mainImage.setAttribute("id","mainImage")

             nameDiv=document.createElement("div");
             nameDiv.setAttribute("id","nameDiv")
             nameDiv.innerText=elem.name

             hrDiv=document.createElement("div");
             hrDiv.setAttribute("id","hrDiv")
             hr=document.createElement("hr");
             hrDiv.append(hr)

            priceDiv3=document.createElement("div");
            priceDiv3.setAttribute("id","priceDiv3")
                 var span1=document.createElement("h3");
                 span1.innerText=elem.price
     
                priceDiv3.append(span1)

            discountDiv=document.createElement("div");
            discountDiv.setAttribute("id","discountDiv")
            discountDiv.innerText=elem. discount
                
            buttonDiv=document.createElement("div")
            buttonDiv.setAttribute("id","buttonDiv")
                 button=document.createElement("button");
                 button.setAttribute("id","button")
                 button.addEventListener("click",function(){
                    addcartfunction(elem)
                })
                 button.innerText=elem.addcart
                 buttonDiv.append(button)

            main1.append(mainImage,nameDiv,hrDiv, priceDiv3,discountDiv,buttonDiv)
             document.querySelector("#container5").append(main1)
        })

        // SHOP BY CATEGORY js

        var   shopByCatagoryData = [
            {image:"https://newassets.apollo247.com/pub/media/healtharea/247images/i/c/ic_immunity_1.png",
            name:"Covid Essentials"
            },
            {image:"https://newassets.apollo247.com/pub/media/catalog/category/otc.png",
            name:"Health Condition"
            },
            {image:"https://newassets.apollo247.com/pub/media/catalog/category/ayurveda.jpg",
            name:"Ayurveda"
            },
            {image:"https://newassets.apollo247.com/pub/media/catalog/category/health_devices_22oct.png",
            name:"Health Devices"
            },
            {image:"https://newassets.apollo247.com/pub/media/catalog/category/baby_care_22oct.png",
            name:"Baby Care"
            },
            {image:"https://newassets.apollo247.com/pub/media/catalog/category/elderly_care.png",
            name:"Adult Diapers"
            },
    
]
   
    shopByCatagoryData.map(function(elem){
                
        var maindiv1=document.createElement("div")
    
        var achorTag=document.createElement("a")
        achorTag.setAttribute("href","")
        achorTag.setAttribute("class","achorTag")

        var innerDiv=document.createElement("div")
        innerDiv.setAttribute("id","innerDiv")

       var childDiv1=document.createElement("div")
       var image= document.createElement("img")
        image.setAttribute("src",elem. image);
        image.setAttribute("id", "shopByHelthConditionImg")
        childDiv1.append(image)


       var childDiv2=document.createElement("div")
        var name=document.createElement("p");
        name.innerText=elem.name
        childDiv2.append(name)

        innerDiv.append(childDiv1,childDiv2)

        achorTag.append(innerDiv)

        maindiv1.append(achorTag)

       document.querySelector("#container6").append(maindiv1)
       

    })


    // EXPLORE - POPULAR PRODUCTS js 

    var exploreMoreProductsData=[
        {
            image:"https://newassets.apollo247.com/pub/media/wysiwyg/home/healthvit_dod1_247.jpg"
        },
        {
            image:"https://newassets.apollo247.com/pub/media/wysiwyg/home/247_baby_diapers_dod2.jpg"
        },
        {
            image:"https://newassets.apollo247.com/pub/media/wysiwyg/home/ND_dod3_247.jpg"
        }
    ];

    exploreMoreProductsData.map(function(elem){

        var diplayImage=document.createElement("img");
        diplayImage.setAttribute("src",elem.image)

        document.querySelector("#container7").append( diplayImage)
    })


        

        
