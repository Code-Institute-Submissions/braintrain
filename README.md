
<h1 align="center">Brain Train</h1>

[View the live project here.](https://sykez12.github.io/braintrain/)

The idea of this project was to create a memory game that would be accessible to people of all ages.

The user can play through endless levels, challenging themselves and improving their memory capability.


<img src="https://github.com/sykez12/braintrain/blob/9cb351504916edc0b39fcbff21ccd536c0955710/Documentation/amiresponsivebraintrain.png" alt="Amiresponsive">

## User Experience (UX)

-   ### User stories

    -   #### Young Visitor Goals 

        1. As a Young Visitor, I want a site that will be visually appealing.
        2. As a Young Visitor, I want a site that will be appealing to the ears.
        3. As a Young Visitor, I want a memory game that is easy to understand.

    -   #### Adult Visitor Goals

        1. As an Adult Visitor, I want access to a quick-start memory game to challenge myself.
        2. As an Adult Visitor, I want to be able improve my memory capability and compete against my friends.

    -   #### Elderly Visitor/Alzheimer Patient Goals

        1. As an Elderly Visitor/Alzheimer Patient, I want a way to keep my mind active.
        2. As an Elderly Visitor/Alzheimer Patient, I want a game that will be easily understandable.

-   ### Design
    -   #### Colour Scheme
        -   Mostly dark grey and white to ensure there is no clashing with the game colours.
        -   A light aquamarine background to improve visual appeal for very young/old users.

*   ### Wireframes

    -   Wireframes for all devices - [View](https://github.com/sykez12/braintrain/blob/9cb351504916edc0b39fcbff21ccd536c0955710/Documentation/Wireframes/WireframesBT.pdf)

## Features

-   Responsive on all device sizes.

-   Memory game with endless levels.

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import Original Surfer font and the emboss effect
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/sykez12/beatles/blob/a4b13fb29759178925693f71149ea6ade09a0024/Documentation/Wireframes/New%20Project%201.pdf) during the design process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/sykez12/braintrain/blob/9cb351504916edc0b39fcbff21ccd536c0955710/Documentation/MarkupBT.png)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](https://github.com/sykez12/braintrain/blob/9cb351504916edc0b39fcbff21ccd536c0955710/Documentation/CSSValidationBT.png)

### Testing User Stories from User Experience (UX) Section

-   #### Young Visitor Goals

    1. As a Young Visitor, I want a site that will be visually appealing.

        1. Upon entering the site, users are immediately greeted with a colourful page and a colourful game.
        2. When the computer or the user selects a colour, the element will flash with a new, brighter colour.

    2. As a Young Visitor, I want a site that will be appealing to the ears.

        1. When the computer selects a colour, a sound will play that is allocated to that specific colour.
        2. When the user selects the right colour, the sound will play. It acts as a victory noise.

    3. As a Young Visitor, I want a memory game that is easy to understand.
        1. The rules are fixed above the game itself, ensuring any user is constantly able to read them..
        2. The game starts at a nice easy level, with a sequence length of 3.

-   #### Adult Visitor Goals

    1. As an Adult Visitor, I want access to a quick-start memory game to challenge myself.

        1. The site is a singular page that the user can return to and can be playing within a matter of seconds.

    2. As an Adult Visitor, I want to be able improve my memory capability and compete against my friends.

        1. The endless levels mean there is a challenge for even the most intelligent users.
        2. Experienced users can train their memory, and try to beat their friends' best scores.

-   #### Elderly Visitor/Alzheimer Patient Goals

    1. As an Elderly Visitor/Alzheimer Patient, I want a way to keep my mind active.

        1. The memory game is a fantastic way to keep the brain active, and the memory fresh.
        2. As an Elderly Visitor/Alzheimer Patient I can keep track of my progress via the levels I can get to.

    2. As an Elderly Visitor/Alzheimer Patient, I want a game that will be easily understandable.

        1. The rules are constantly on display for users to refer to.
        2. The basic colours used within the game help to keep it simple.
        3. The noises used in tandem with the colours help with remembering the sequences.
        4. The low amount of elements available (four) to interact also help to keep it simple.

### Further Testing

1. Playing the game
    * Click the start button and click the elements to ensure the user cannot interact while compTurn=true.
    * Repeat the computer sequence to see if nextTurn is working correctly.
    * Lose the game to see if the game resets as intended.
    * Keep clicking the start button to see if the game restarts correctly despite the interference.
    * Complete the level to see if the next level starts correctly.
    * Repeat the above steps for every level.
    * Complete these steps on every device size.


-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was tested on Laptop, Desktop, Ipad, GalaxyS5, OnePlus6.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   If the user clciks on the same colour in rapid succession, the element might not play sound due to the length of the sound used.
-   If the user spam clicks the colours very quickly before the game starts, the sequence might break, and the page may need to be refreshed.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/sykez12/braintrain)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://sykez12.github.io/braintrain/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/sykez12/braintrain)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/sykez12/braintrain)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/sykez12/braintrain
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/sykez12/braintrain
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code


-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.


### Acknowledgements

-   My Mentor Reuben for his continuous, helpful input.

-   Tutor support at Code Institute and online tutorials for their assistance.

