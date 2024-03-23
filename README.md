
![App logo](assets/images/wingit-logo.png)
[View the live project here](https://gustafenebog.github.io/project-2/)


# Parametric Wing planform Design App
This App creates a simple top-view drawing of a wing based on parametric user-input such as for example wing span, chord and sweep give. This way of designing lends itself better for otimization algoritms and works the other way around to when a designer/user first use CAD/drawing software to first draw the wing and afterward recieve or having to calculate the wing design parameters.

The app is particilary usefull for hobbyist designing model airplanes as well as (as more features and parameters are being added) for Aircraft Conceptual Designers since the user imediatly recieves a live updated graphics to his inputed numbers.

![Image of App on different sized devices.](assets/images/readme/amiresponsive-enebog-art.jpg)

## Index – Table of Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Design](#design)
* [Miscellanious](#miscellanious)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Experience (UX)
Aas a user I want to be able to :

1. Easily determine the purpose of the website.
2. Play around (step up and down or type in form field) with different values of Wing Design Parameters to view...
 - a live updated drawing of the wing planform
 - live updated dependent parameters outputed as they are calculated using the inputed independent parameters
3. View graphical legend defining the characteristic Wing Design Parameters in the form of a hover over tool tip
3. View legends for variable symbols in the form of a hover over tool tip
3. Toogle between a default light mode and a dark mode.

## Features
The Logotype
The Drawing Area
The Input/Output Area


The Drawing Area
    Calculating the wing planforms width and Height as well as its ratio. 'getDrawingWidth'-function which in turn calls upon the 'getDrawingSize'-function. 'getDrawingHeight'-function

    Moving potentially negative values (as in the case when a forward sweep wing panel moves ahead of the root leading edge). 'getNegXCompFactor'-function calculates this factor and it is applied in the 'compensateNegX'-function.

    Calculating the factor (zoomFactor) and applying this to the plot coordinates in order to make the drawing the same size as the drawing sizes (canvas size of, width: 320px; height: 569px;). Responsible for this is the function 'getZoomFactor'

    Plotting the drawing using different line weights and both solid and dashed line
sweepP1XC
sweepP2XC
sweepP3XC
sweepP1YC
sweepP2YC
sweepP3YC
outlineP1XC
outlineP2XC
outlineP3XC
outlineP1YC
outlineP2YC
outlineP3YC
    The Input/Output Area
    help section and tool tips
      delay in displaying tooltip
    Dark Mode
      Toogle button
    complete input feedback/confirmation
    Input
      live update using eventlistener for input
        'funcForEvent'-function
      Alert message
    Output
      Calculation of wing parameters (output) based on other wing parameters (input) using standard equations
      Commensinc calculation of output paramaters only as all neccesary input parameters has been inputed (solved by if-statements)
    x


### The Drawing Area

  + The header features the artist Enebog-logo to the left and the four navigation links: Home, Works, About, Contact (for larger devices) or the “hamburger” icon (for smaller devices) to the right.
  + This is a single page scrolling website (with the exception of the individual art-piece-display pages the user is taken to when clicking on an art piece on the main page). These takes the user to the correct section, within the page, when a link is clicked.
  + The header with its nav elements is always fixed  (except on the individual art-piece-display pages) and creates therefore a quick and easy to understand navigation experience.
  + The Enebog-logo also doubles as an extra home button.
  + On larger devices the navigation is lined up in a row on the right side of the header.
  + The navigation links for large screen devices are being underlined when hoovered over.
  + A click anywhere on the individual art display page takes the user back top of the main page.  

![Mobil: "Header"-section with drop-down nav menu.](assets/images/readme/nav-elements-iphon14promax.jpg)
![Large Device: "Header"-section.](assets/images/readme/header-laptop.jpg)

### Features remaining to be implemented
+ Evaluating if a revision of the code structure and handling of events could allow the number of global variables to be reduced.
+ Completing a Dark Mode alternative interface. The button (with javascript-code) to toggle back and forth between the dark and the default light mode is already created but has been removed since the feature/function not yet is complete.
+ A 500 ms delay for the tooltips to appear (no delay for them to disapear)
+ Removing the frame around the drawing (canvas)
+ Implementing more parameters, e.g. Aerodynamic Center, a.c. AC ac
Neutral Point, n.p. NP
Center of Gravity, c.g. CG
Static Margin, s.m. SM
Horisontal Tail Volume, VH
Control Surface Root Chord, csc,r
Control Surface Tip Chord, csc,t
Control Surface Start, bsc,r
Control Surface End, bsc,t
LE or TE
+ The drawing coordinates are are faulty for sweep angle, Δ of 0 which is why this angle is taken out of the allowed input range the sweep angle, Δ
+ Implement radiobuttons (and functionality) for:
  + Showing right wing half instead of leaft as is now the case (write function that multiples y-coordiantes with -1 and then subtracts half span)
  + Showing the whole wing, i.e. both left and right wing halves (write functions that subtracts half span to left wing half and then add right wing half)
  + Rotate wing into a horisontal position write function that transposes plot coordiantes or use the [canvas rotate method](https://www.w3schools.com/jsref/canvas_rotate.asp)

+ Implementing more featuers, e.g. 

•	YES: Expanding input matrix depending on two inputs (one nested into the other)
o	Nr. of wings
	Nr. of panels
•	YES: Choosing unit (%, cm or m) next to input in a drop down menu
•	YES: no “calculate”-button! Instead each making of an entry update the parameters and drawing
•	MAYBE: Pop up instruction window upon hoover (after  1 or 2 sec.) showing also equations
•	MAYBE: Color in input/output field characterising value
•	MAYBE: Wings but to but alternative radio-button
•	Let drawing (white background) field expand to wing + breathing space all around and input value grow to fit (do together with min and max height/width). OR is this too dynamics
•	NO: simple drawing top view

+ Make drawing area adapting to available view port instead of having to resort to the current fixed size of 320px X 569px.


+ A Dark Mode including a button toggling between dark and luight mode has been prepared yet removed since it is not yet complete


## Design
+ The interface is simple and plain with and a focus on the relevant aspects, the drawing and the input/output area. The drawing area is at top, (below the breakpoint) and to the left (above the breakpoint) and the opposite for the input/output area.

interface
Inspiration for this clean minimalistic design came from many sites and tools including monday.com and xxxxx



![wireframe color coding](assets/images/wireframe-color-coding.jpg)
![wireframe initial idea](assets/images/wireframe-initial-idea.jpg)
![wireframe input inline](assets/images/wireframe-input-inline.jpg)
![wireframe input stack](assets/images/wireframe-input-stack.jpg)
![wireframe tool tip](assets/images/wireframe-tool-tip.jpg)
![light mode button](assets/images/light-mode.jpg)
![dark mode button](assets/images/dark-mode.jpg)
![parameters equations](assets/images/parameters-equations.jpg)
![dependency matrix](assets/images/dependency-matrix.jpg)
![unsolved bug drawing overflow of canvas boundaries](assets/images/unsolved-bug-wing-overflow.jpg)
![Noto Sans font](assets/images/noto-sans-google-font.jpg)
![Monday.com](assets/images/monday-com.jpg)
![Color example](assets/images/color-example.jpg)

### Colors
+ The Grey and White color theme provides a color-neutral background setting the stage for potential colorcoding.

lightgrey #d3d3d3 or rgb(211, 211, 211)

## Features

### Favicon
+ The favicon is made up by the W in the WINGIT-logo.
+ The favicon has been produced in all relevant file formats.

![Favicon](assets/images/readme/android-chrome-192x192-enebogart.png)

### Typography
Noto Sans has been used as a font since it features greek letters necessary for the some of the input/output parameters. "Montserrat" and sans-serif is used as fallback fonts.

## Miscellanious
+ As much as it is good practise to keep variables local and to avoid global variables it is sometimes necessary and this code is such an example where relativly many global variables was necessary or the code structure would have had to become very complicated.

## Technologies Used
+ [HTML 5](https://html.spec.whatwg.org/multipage/) Website structure and content
+ [canvas (2D) element in HTML 5](https://www.w3schools.com/html/html5_canvas.asp) To generate bitmap drawings of the wing planform.
+ [CSS3](https://www.w3.org/TR/CSS/#css)
+ [Java Script]( https://262.ecma-international.org/6.0/)
+ [Google Fonts:](https://fonts.google.com/) To import font family "Open Sans Regular 400", "Montserrat" into the style.css file which is used on all pages.
+ [Font Awesome:](https://fontawesome.com/) used in footer section to social icons and "hamburger"-icon in navbar for smaller devices.
+ [Balsamiq:](https://balsamiq.com/) Super nice program for creating wireframe drafts of the website.
+ [Krita:](https://krita.org/en/) Used for creating, editing and re-sizing images (bitmap art).
+ [Clip Studio Paint:](https://www.clipstudio.net/en/) Used for creating and editing vectorgraphics (as well as bitmap-art) such as the Enebog-logo.
+ [Am I Responsive:](http://ami.responsivedesign.is) Checking the responsiveness and generating the image in the beginning of this document showing my website on different devices/screensizes.
+ [GitPod](https://www.gitpod.io/) GitPod has been used as a cloud based IDE from which code was commited and pushed to GitHub.
+ [GitHub:](https://github.com/) GitHub is used to store the code that has been pushed from GitPod.

## Testing
### Manual testing
+ I have manually tested that:
  + The most complex function in the code (cyclomatic complexity rating of 13) can be considered "More complex to understand" and with a "moderate risk to modify" whereas the median function (cyclomatic complexity rating of 5) can be considered as a "Simple procedure to understand" and with a "little risk to modify"
	+ the "tool tip on hover" (also known as screentips) all work.
  + Wrong input, e.g. letters are not accepted, decimal numbers!!!
	+ wrong input, e.g. email address field without an @-sign receive a complaint as well as a form submission-button-click results in a confirmation page.
  + Responsive design shifts correctly at the breakpoint (width: 576px) between the drawing- and the input-output-area stacked (mobil) and side-by-side (inline) for larger devices

+ Manual testing has been carried out on:
  + Different browsers: Except Chrome the website has also been tested in Firefox (Safari as not been tested) where a a bug in the form element was appearing.
  + Responsiveness using different standard screen sizes testing the responsive design.
  + name, email and message is required to submit the form in the contact section.
  + the email input field must contain @ symbol to submit the form in the contact section.
  ![Large Device: "Form"-submit confirmation page.](assets/images/readme/form-submit-confirmation.jpg)

  I have tested that this page works using macOS (Macbook Air).
I have tested that this page works in the following browsers using macOS: Chrome, Safari and Firefox.
I have tested this page works on iOS devices using Safari browser (iPhone X and iPad Air).

Responsivness
Chrome developer tool have been used to check the responsivness.
I have tested that this page works on different screen sizes from iPhone 5 (320px wide) and very large screens like 5K iMac Pro (5120 x 2880 px).

### Validator Testing
+ All code was tested for syntactical errors with perfect results using official validators (Java Script 62 warnings all relating to potential compability issies with java script or browser versions) :
  + HTML using the W3C-the official validator for html-code (https://validator.w3.org/)
![W3C result](assets/images/readme/html-validator.jpg)
  + CSS using Jigsaw-the official validator for CSS-code (https://jigsaw.w3.org/css-validator/)
![Jigsaw result](assets/images/readme/css-validator.jpg)
  + Java Script using the JSHint validator for Java Script-code (https://jshint.com/)
![JSHint result](assets/images/jshint-result.jpg)
  + performance, accessibility, SEO etc. using Lighthouse in Chrome developer tools.
![Jigsaw result](assets/images/readme/css-validator.jpg)
![Lighthouse](assets/images/lighthouse-result.jpg)
  + The low performance scoore is inherent for a calculation-heavy App and with the live update adding insult to injury.
![Lighthouse point of improvement](assets/images/readme/lighthouse-accesibility-improve.jpg)
+ The code was also beautified using GitPods built in beautifyer.

![The first computer Bugs.](assets/images/9th-sept-1947-first-computer-bug-harvard-markII.jpg)
### Bugs
+ Fixed bugs:
  + Change in logo and header height would not come through due to conflicting css-rules.
  + Page overflowed horizontaly (slider appeared).
  + "Underline on hover" in large display navbar disapeared due to a typo.
  + Hamburge-icon could not be vertically centered.
  + One-page-scroll-navigation stopped to far down in the work-, about- and contact-sections.
+ Remaining bugs:
  + The form flows down into the footer (or vice versa) in Firefox.
  + The "click-anywhere-on-page"-link on the display page has stopped working in the last versions.

### Deployment
+ Go to your GitHub repo and choose the **settings** tab and then **Pages** on the left-hand sidebar and then make sure that the following is set as below:
  + **Sources** is set to ‘Deploy from Branch’
  + **Main** branch is selected
  + **Folder** is set to / (root)
+ Click save and go back to the **Code** tab and wait a few minutes for the build to finish. Make sure that you do not push to the repo during this time since this will cause the rebuild to fail.
+ Go to the **github-pages** under the **Deployment** section, further down on the right hand side.
+ Now you can see the URL to your deployed site under **Active deployments**. Click on the URL to go to your site. The URL will follow the following format: your-username.github.io/your project name/

![Deployment](assets/images/readme/deployment.jpg)

## Credits

### Readme
+ Inspiration for this readme-file has been taken from the readme-files of:
  + ANAGRAM word puzzle website by elainebroche
  + rock-paper-scissors by mittnamnkenny

### Code
+ The code for the header with navbar, form and footer from Code Institute's "Love Running" was used as a starting point for my code.
+ Code that is supposed to making the whole page clickable (not just back arrow) is taken from a forum however I am sorry to say that I have not been able to retrieve the source back to give credit.
+ "Zoom on Hoover" code snippet from 3W Schools (https://www.w3schools.com/howto/howto_css_zoom_hover.asp) has been used and modified to make images in the galleries in the work-section zoom when they are being hovered.

### Acknowledgement
A special thanks to my mentor at Code Institute for his time, nice ways and for most helpful input!