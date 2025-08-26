$(document).ready(function(e) {
  // e.stopPropagation();
    var owl = $('.bestsellers-carousel').owlCarousel({
      loop: true,            
      margin: 10,
      rewind:false,           
      nav: true, 
      navText : ["←","→"],           
      dots: false,
      ditsEach:true,            
      stagePadding: 50,      
      items: 4,             
      slideBy: 3,            
      responsive: {
        320: {
          items: 1,          
          slideBy: 1        
        },
        576: {
          items: 2,          
          slideBy: 1        
        },
        768: {
          items: 3,         
          slideBy: 1       // Slide 2 cards at a time
        },
        992: {
          items: 4,         
          slideBy: 1       // Slide 2 cards at a time
        },
      }
    });
  
    


   

  });

 
  

  // Get all indicators
const indicators = document.querySelectorAll('.indicator');
indicators.forEach((indicator) => {
  indicator.addEventListener('click', () => {
    
    indicators.forEach((i) => i.classList.remove('clicked'));

    
    indicator.classList.add('clicked');
  });
});



 //-------------------------------------------------------------------//




















 
 const profiles = document.querySelectorAll('.profile');
 const testimonialCard = document.querySelector('.testimonial-card');
 const triangle = document.querySelector('.triangle');
 
 // Update headings and texts hereK
 const testimonials = [
     { name: 'Tom', heading: 'It was a very good experience', text: ' consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu' },
     { name: 'Jane', heading: 'It was a very good knowlege ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu' },
     { name: 'Anna', heading: 'It was a very good experience', text: ' consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu' },
     { name: 'Bob', heading: 'It was a very good knowlege', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu' },
     { name: 'Alice', heading: 'It was a very good experience', text: ' consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu' }
 ];
 
 let currentIndex = 0;
 
 function updateTestimonial(index) {
     const headingElement = testimonialCard.querySelector('.testimonial-heading');
     const textElement = testimonialCard.querySelector('.testimonial-text');
 
     // Update the heading and text
     headingElement.innerText = testimonials[index].heading;
     textElement.innerText = testimonials[index].text;
 
     profiles.forEach((profile, i) => {
         profile.classList.toggle('active', i === index);
     });
 
     const activeProfile = profiles[index];
     const profileOffset = activeProfile.offsetLeft + (activeProfile.offsetWidth / 2) - (triangle.offsetWidth / 1);
     triangle.style.left = `${profileOffset}px`;
 }
 
 profiles.forEach((profile, index) => {
     profile.addEventListener('click', () => {
         currentIndex = index;
         updateTestimonial(currentIndex);
     });
 });
 
 document.querySelector('.left-arrow').addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
     updateTestimonial(currentIndex);
 });
 
 document.querySelector('.right-arrow').addEventListener('click', () => {
     currentIndex = (currentIndex + 1) % testimonials.length;
     updateTestimonial(currentIndex);
 });
 
 // Initialize the first testimonial on page load
 updateTestimonial(currentIndex);
 




//----------------------------------------------------------------//







const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', function() {
    this.classList.toggle('collapsed');
    const listIcon = this.querySelector('.bi-x');
    const xIcon = this.querySelector('.bi-list');

    if (this.classList.contains('collapsed')) {
        listIcon.style.display = 'block';
        xIcon.style.display = 'none';
    } else {
        listIcon.style.display = 'none';
        xIcon.style.display = 'block';
    }
});











