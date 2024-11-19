document.querySelectorAll('[href="#"]'). forEach(anchor => {
    anchor.addEventListener('click', funtion (e)) ({
        e:PreventDefault(),

        document:queryselctor(this.getAttribute('href')). scrolIntoview({
            behavior: 'smooth'
      })
    });
  });