var myRequest = new XMLHttpRequest();
myRequest.open('GET','https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json');
var productmm;
myRequest.send();

myRequest.onreadystatechange = function()
{
    if(myRequest.readyState == 4)
    {
        var elementsOfObj = JSON.parse(myRequest.responseText);
        for(var i = 0 ; i < elementsOfObj['ProductCollection'].length ; i++)
        {
          var product = '<div class="product">'+
          '<div class="product_image"><img src="'+elementsOfObj['ProductCollection'][i]['ProductPicUrl']+'" alt=""></div>'+
          '<div class="product_extra product_hot button" type ="button">Cart</div>'+
          '<div class="product_content">'+
              '<button class="button contact_button ptitle" id="cart1"><span>'+elementsOfObj['ProductCollection'][i]['Name']+'</span></button>'+
              '<div class="product_price">'+elementsOfObj['ProductCollection'][i]['Price']+'</div>'+
              '<div class="product_price">'+elementsOfObj['ProductCollection'][i]['Status']+'</div>'+
              '<div class="product_Qty" style="display:none">'+elementsOfObj['ProductCollection'][i]['Quantity']+'</div>'+
              '<div class="product_Id" style="display:none">'+elementsOfObj['ProductCollection'][i]['ProductId']+'</div>'+
          '</div>';
          var div_c =document.getElementById("pro");  
          div_c.innerHTML += product;
        }
    }
}
var items = [];
var totalPrice = 0;

home    = document.getElementById("H"),
about   = document.getElementById("A"),
contact = document.getElementById("C"),

home.addEventListener("click", openHomePage);

function openHomePage()
{
    var productContainer = document.getElementById("product1");
    productContainer.style.display = ""; 
    //var aboutContainer = document.getElementById("about1");
    var contactContainer = document.getElementById("contact1");
    contactContainer.style.display = "none"; 

    var aboutContainer = document.getElementById("about1");
    aboutContainer.style.display = "none";

    var productContainers = document.getElementById("product2");
    productContainers.style.display = "none";

    var cartContainers = document.getElementById("c1");
    cartContainers.style.display = "none";

    var productTitle = document.getElementsByClassName("ptitle");

    for(var i = 0 ; i < productTitle.length ; i++)
    {
         productTitle[i].addEventListener("click", openProductPage);
    }

    cart = document.getElementsByClassName("product_hot");
    for(var i = 0 ; i < cart.length ; i++)
    {cart[i].addEventListener("click", addToCart);
    };

    function addToCart()
    {
     const productItem = event.target;
            
            var divParent = productItem.parentNode;
            var productImg = divParent.getElementsByTagName('img')[0].src;
            var divSub = divParent.getElementsByClassName('product_content')[0];
            var productPrice = divSub.getElementsByClassName('product_price')[0].innerText;
            var productQty = divSub.getElementsByClassName('product_Qty')[0].innerText;
            var productId = divSub.getElementsByClassName('product_Id')[0].innerText;
            var productName = divSub.getElementsByClassName('button')[0].innerText;

            var productCart = {
                id:productId,
                name:productName,
                price:productPrice,
                qty:productQty,
                orderQty:1,
                img:productImg
            };
        var flag = 0;
        if (items.length > 0)
        {
            for(var i = 0 ; i < items.length ; i++)
            {
                  if(items[i].id === productId)
                    {
                        items[i].orderQty ++;
                        flag = 1;
                    }
            }
            if(flag == 0)
            {
                items.push(productCart);
            }
        }
        else
        {
            items.push(productCart);
        }
        localStorage.setItem("items",JSON.stringify(items));
        var fltDiv = document.getElementById("gtc");
        fltDiv.style.display = "";
    }
}

contact.addEventListener("click", openContactPage);
function openContactPage()
{
    var productContainer = document.getElementById("product1");
    productContainer.style.display = "none"; 
    //var aboutContainer = document.getElementById("about1");
    var contactContainer = document.getElementById("contact1");
    contactContainer.style.display = ""; 

    var aboutContainer = document.getElementById("about1");
    aboutContainer.style.display = "none";

    var productContainers = document.getElementById("product2");
    productContainers.style.display = "none";

    var cartContainers = document.getElementById("c1");
    cartContainers.style.display = "none";


var contactHtml = '<div class="container">'+
'<div class="row">'+
   //<!-- Get in touch -->
    '<div class="col-lg-8 contact_col">'+
        '<div class="get_in_touch">'+
            '<div class="section_title">Get in Touch</div>'+
            '<div class="section_subtitle">Say hello</div>'+
            '<div class="contact_form_container">'+
                '<form action="#" id="contact_form" class="contact_form" name="contact">'+
                    '<div class="row">'+
                        '<div class="col-xl-6">'+
                            //<!-- Name -->
                            '<label for="contact_name">First Name*</label>'+
                            '<input type="text" id="contact_name" class="contact_input" name="name" required="required">'+
                        '</div>'+
                        '<div class="col-xl-6 last_name_col">'+
                            //<!-- E-mail -->
                            '<label for="contact_last_name">E-Mail*</label>'+
                            '<input type="text" id="contact_last_name" class="contact_input" name="email" required="required">'+
                        '</div>'+
                    '</div>'+
                    '<div>'+
                        //<!-- Subject -->
                        '<label for="contact_company">Subject</label>'+
                        '<input type="text" id="contact_company" class="contact_input" name="subject">'+
                    '</div>'+
                    '<div>'+
                        '<label for="contact_textarea">Message*</label>'+
                        '<textarea id="contact_textarea" class="contact_input contact_textarea" name="message" required="required"></textarea>'+
                    '</div>'+
                    '<button class="button contact_button" type ="submit"><span>Send Message</span></button>'+
                '</form>'+
            '</div>'+
        '</div>'+
    '</div>'+
    //<!-- Contact Info -->
    '<div class="col-lg-3 offset-xl-1 contact_col">'+
        '<div class="contact_info">'+
            '<div class="contact_info_section">'+
                '<div class="contact_info_title">Information</div>'+
                '<ul>'+
                    '<li>Phone: <span>010-111 60 239</span></li>'+
                    '<li>Email: <span>cap.mohamed.abdelhay@gmail.com</span></li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>'+
'</div>';
            var div_contact =document.getElementById("contact1");  
            div_contact.innerHTML = contactHtml;


var contact_form = document.forms['contact'];
contact_form.addEventListener('submit',function(event)
{
   var contact1 = document.forms['contact'];

        console.log(contact1['name'].value);
        console.log(contact1['email'].value);
        console.log(contact1['subject'].value);
        console.log(contact1['message'].value);

    event.preventDefault();
    console.log(event);

    var data = {
        name: contact1['name'].value,
        email: contact1['email'].value,
        subject: contact1['subject'].value,
        message: contact1['message'].value
        };

    var myRequest = new XMLHttpRequest();
    myRequest.open('POST','http://js.vacsera.com/api/final-project',true);

    myRequest.setRequestHeader('Content-type','application/json');

    myRequest.send(JSON.stringify(data));
})
}

about.addEventListener("click", openAboutPage);
function openAboutPage()
{
    var productContainer = document.getElementById("product1");
    productContainer.style.display = "none"; 
    //var aboutContainer = document.getElementById("about1");
    var contactContainer = document.getElementById("contact1");
    contactContainer.style.display = "none"; 

    var aboutContainer = document.getElementById("about1");
    aboutContainer.style.display = "";

    var productContainers = document.getElementById("product2");
    productContainers.style.display = "none";

    var cartContainers = document.getElementById("c1");
    cartContainers.style.display = "none";

    var aboutHtml = '<div class="container">'+
			'<div class="row details_row">'+
				//<!-- My Image -->
				'<div class="col-lg-6">'+
					'<div class="details_image">'+
						'<div class="details_image_large"><img src="images/details_1.jpg" alt=""></div>'+
						'<div class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between"></div>'+
					'</div>'+
				'</div>'+

				//<!-- My Content -->
				'<div class="col-lg-6">'+
					'<div class="details_content">'+
						'<div class="details_name">Mohamed Abd Elhay</div>'+
						'<div class="details_price">Open Source Developer</div>'+

						'<div class="details_text">'+
							'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="row description_row">'+
				'<div class="col">'+
					'<div class="description_title_container">'+
						'<div class="description_title">Previous Experience</div>'+
					'</div>'+
					'<div class="description_text">'+
						'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>'+
					'</div>'+
				'</div>'+
			'</div>'+
        '</div>';
        var div_about =document.getElementById("about1");  
            div_about.innerHTML = aboutHtml;
}

function openProductPage(){
    const element = event.target;
    
    var productContainer = document.getElementById("product1");
    productContainer.style.display = "none";    
   
    var contactContainer = document.getElementById("contact1");
    contactContainer.style.display = "none"; 

    var aboutContainer = document.getElementById("about1");
    aboutContainer.style.display = "none";

    var productContainers = document.getElementById("product2");
    productContainers.style.display = "";

    var cartContainers = document.getElementById("c1");
    cartContainers.style.display = "none";

    var productSubMain = element.parentNode; 
    var productMain = productSubMain.parentNode;
    var productPrice = productMain.getElementsByClassName('product_price')[0].innerText;
    //console.log(productSubMain.getElementsByTagName('img')[0]);
    var productImg = productMain.getElementsByTagName('img')[0].src;
    var productName = element.innerText;
    
    var productHtml = '<div class="container">'+
            '<div class="row details_row">'+
                //<!-- My Image -->
                '<div class="col-lg-6">'+
                    '<div class="details_image">'+
                        '<div class="details_image_large"><img src="'+ productImg +'" alt=""></div>'+
                    '</div>'+
                '</div>'+

                //<!-- My Product -->
                '<div class="col-lg-6">'+
                    '<div class="details_content">'+
                        '<div class="details_name">'+productName+'</div>'+
                        '<div class="details_name"> Price: '+productPrice+'</div>'+
                        //<!-- In Stock -->
						'<div class="in_stock_container">'+
							'<div class="availability">Availability:</div>'+
							'<span>In Stock</span>'+
						'</div>'+
						'<div class="details_text">'+
							'<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>'+
						'</div>'+

						//<!-- Product Quantity -->
						'<div class="product_quantity_container">'+
							'<div class="button cart_button"><a>Add to cart</a></div>'+
						'</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '<div class="row description_row">'+
                '<div class="col">'+
                    '<div class="description_title_container">'+
                        '<div class="description_title">Product Description</div>'+
                    '</div>'+
                    '<div class="description_text">'+
                        '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

        productContainers.innerHTML = productHtml;

        var goToCart = document.getElementsByClassName('cart_button');
        goToCart[0].addEventListener("click",addToCartPage);

        function addToCartPage()
        {
            console.log("Hello");
            var productQty = productMain.getElementsByClassName('product_Qty')[0].innerText;
            var productId = productMain.getElementsByClassName('product_Id')[0].innerText;

            var productCart = {
                id:productId,
                name:productName,
                price:productPrice,
                qty:productQty,
                orderQty:1,
                img:productImg
            };
            var flag = 0;
            if (items.length > 0)
            {
               for(var i = 0 ; i < items.length ; i++)
                {
                      if(items[i].id === productId)
                        {
                            items[i].orderQty ++;
                            flag = 1;
                        }
                }
                if(flag == 0)
                {
                    items.push(productCart);
                }
            }
            else
            {
                items.push(productCart);
            }
            localStorage.setItem("items",JSON.stringify(items));
            var fltDiv = document.getElementById("gtc");
            fltDiv.style.display = "";
        }
}
var fltDiv = document.getElementById("gtc");
fltDiv.addEventListener("click",goToCartPage);
if(localStorage.length > 0) 
{
    //var fltDiv = document.getElementById("gtc");
    fltDiv.style.display = ""; 
}
    function goToCartPage()
    {
        var productContainer = document.getElementById("product1");
        productContainer.style.display = "none";    
   
        var contactContainer = document.getElementById("contact1");
        contactContainer.style.display = "none"; 

        var aboutContainer = document.getElementById("about1");
        aboutContainer.style.display = "none";

        var productContainers = document.getElementById("product2");
        productContainers.style.display = "none";

        var cartContainers = document.getElementById("c1");
        cartContainers.style.display = "";

        var cartItems = JSON.parse(localStorage.getItem('items'));
        console.log(cartItems);
        for(var i = 0 ; i < cartItems.length ; i++)
        {
            var cartHTML = '<div class="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">'+
            //<!-- Name -->
            '<div class="cart_item_product d-flex flex-row align-items-center justify-content-start">'+
                '<div class="cart_item_image">'+
                    '<div><img src="'+cartItems[i].img+'" alt=""></div>'+
                '</div>'+
                '<div class="cart_item_name_container">'+
                    '<div class="cart_item_name"><a>'+cartItems[i].name+'</a></div>'+
                '</div>'+
            '</div>'+
            //<!-- Price -->
            '<div class="cart_item_price">+'+cartItems[i].price+'</div>'+
            //<!-- Quantity -->
            '<div class="cart_item_quantity">'+
                '<div class="product_quantity_container">'+
                    '<div class="product_quantity clearfix">'+
                        '<span>Qty</span>'+
                        '<input id="quantity_input" type="text" pattern="[0-9]*" value="'+cartItems[i].orderQty+'">'+
                        '<div class="quantity_buttons">'+
                            '<div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>'+
                            '<div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            //<!-- Total -->
            '<div class="cart_item_total">'+(cartItems[i].price)*(cartItems[i].orderQty)+'</div>'+
            '</div>';

            var carPos = document.getElementById('here');
            carPos.innerHTML += cartHTML;
            totalPrice = totalPrice+((cartItems[i].price)*(cartItems[i].orderQty));
        }
        var tPrice = document.getElementsByClassName("totalP");
        tPrice[0].innerText = totalPrice;
        tPrice[1].innerText = totalPrice;
    }

    var finallyCart = document.getElementsByClassName("finally");

    for(var i = 0 ; i < finallyCart.length ; i++)
    {
        finallyCart[i].addEventListener("click",finalStep);
    }

    function finalStep()
    {
        var productContainer = document.getElementById("product1");
        productContainer.style.display = "";    
   
        var contactContainer = document.getElementById("contact1");
        contactContainer.style.display = "none"; 

        var aboutContainer = document.getElementById("about1");
        aboutContainer.style.display = "none";

        var productContainers = document.getElementById("product2");
        productContainers.style.display = "none";

        var cartContainers = document.getElementById("c1");
        cartContainers.style.display = "none";

        var fltDiv = document.getElementById("gtc");
        fltDiv.style.display = "none";

        localStorage.removeItem('items'); 
    }





