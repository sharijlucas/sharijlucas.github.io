const requestURL = 'guides.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const guides = jsonObject['guides'];
        guides.forEach(guide => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            let fullname = `${guide.name} ${guide.lastname}`;

            h2.innerHTML = fullname;
            p1.innerHTML = "Certifications: " + guide.certification;
            p2.innerHTML = "Years of Experience: " + guide.years;
            p3.innerHTML = "Email: " + guide.email;
            p4.innerHTML =  guide.bio;

            image.setAttribute('src', guide.imageurl);
            image.setAttribute('alt', fullname);

            card.appendChild(h2);
            card.appendChild(image);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            
            
            
            //card.appendChild(birthdate);
            

            document.querySelector('div.cards').appendChild(card);
        });

    })