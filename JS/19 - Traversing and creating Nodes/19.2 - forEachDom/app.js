// 1. Loop over the array with the forEach method and dynamically 
// create an ordered list of the first and last names from the objects.
// 2. Remove the bullet points of the ordered list with javaScript.
// 2. Create a custom data attribute called “data-id” and attach the id 
// value to each li.

const users = [
        {
          id: 167464,
          firstName: "Jimmy",
          lastName: "Arnold",
          email: "jimmya@gmail.com",
        },
        {
          id: 578447,
          firstName: "Martha",
          lastName: "Goldman",
          email: "gold@hotmail.com",
        },
        {
          id: 864578,
          firstName: "Tim",
          lastName: "Burton",
          email: "timmy.hotmail.com",
        },
      ];

      //1 
      var personName = '<ul>'
      users.forEach((obj) =>
      {
              personName += '<li>' + obj.firstName + " " + obj.lastName + '<li>'
      })
      document.getElementById("list").innerHTML = personName;
      list.style.listStyleType="none";

      //2
