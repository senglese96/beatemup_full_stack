* **Overview** 

This site is meant to be a version of the popular website Meetup. My version is specifically focused on fighting games and events related to them. The app allows users to log in, create a group for a specific game, or join other groups for that game. Owners of groups may create events that will occur on a certain date. Other users can then RSVP for that event, indicating that they will attend.

The site can be found [here](https://beat-em-up.herokuapp.com/#/)

The logo was designed by Andrew Wei, who can be contacted at Weiandrew2012@gmail.com

* **Technologies**

The site uses Ruby on Rails connecting to a postgresql database. It connects this through jbuilder to a React/Redux frontend and uses CSS for most of the animations along with some pure javascript. It uses webpack in order to bund.le the javascript and display it in the root view of the rails backend.

* **Features** 

  * One of the features I am most proud of is the slideshow that is displayed on the main page of the website. At the time this was very outside of my comfort zone and there were many challenges to implimenting this in an aesthetically pleasing way. I achieved this by creating an array of div elements, and then setting an interval that would change a variable in the state to the first value of that array, then cycling the array. However, this was rather visually displeasing so I wanted to add in a slow fade in and out of each slide. This would clash with my sliding animation in the CSS however, so I had to make the fade in and out one animation and eyeball what percent through it should happen in order to best cover the switch between frames of the slideshow.  
  
  * The other feature that took a lot of time and effort to make work was filtering through the events by day and displaying each event that's on the same day under the same header. I wasn't sure how to impliment it at first but eventually figured out that if I were to map with two different returns based on the previous date then it would be simple. It renders a header and a component if there was no previous header or if the last header was an earlier date than the current event, and it will just render a component otherwise. the effect is an easily sortable and searchable index of events.
  
