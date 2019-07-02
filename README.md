## Visual Music WebApp
An app that converts your favorite music pieces into visual expressions. 

Visual Music is a collaboration project managed by a group of dedicated fellow students. Aimed at all music and arts lovers, it provides the users with a real time visual transcription of a streamed music piece. 

If the visual transcription can be at first of random assignment of colors and shapes, it shouldn't remain so, as **one of the main interest is to transcribe the emotional effects of the music piece**. Therefore, questions will araise as perception is highly cultural and language induced. It might be interesting in a second time to create various themes based on those considerations for the visual transcription.

## Applications
The applications could be :
* the possibility to screen the visual expression as background for parties, concerts and stages, 
* accessibility, by giving a visual transcription of music pieces, making them accessible to the hearing impaired,
* creation of original objects, with the possibility of a screen capture going with a downloadable HD print file, the possibility of printing, framing and offering the painting of a song to friends and family,
* tool or interesting experiment for musicologists, linguists, scientists, etc.

## Technology/Stack:
* [Figma](https://www.figma.com/): to design the UI
* [Storybook](https://storybook.js.org/): to test and export the components for React
* [React](https://reactjs.org/): to build the UI
* [p5](https://p5js.org/): for visualization
   * using [react-p5-wrapper](https://www.npmjs.com/package/react-p5-wrapper))
* [Firebase](https://firebase.google.com/)                 
* [Docker](https://www.docker.com/): to run and deploy the app
* [Travis CI](https://travis-ci.org/): continuous integration service used to build and test projects hosted at GitHub
  
__Idea:__ We want to analyse the data from an uploaded mp3 song, and process it through p5.js. We are not building a player, and not building a simple visualizer: we want to think on how to transcribe the music in an artistic way - the emotions, patterns, etc. Challenges have to be solved but it could mean working on rhythms, beats, melodies, frequencies, loops, etc.

## Current tasks and challenges
#### Design
* Design of the app on Figma
* Create the logo
* Create "React friendly" components with Storybook

#### Setup, docs and wikis
* Set up the "All-Contributors" on GitHub repo              
* Set up Travis CI on the repo

#### Frontend, DSP, visualization
* Dive into p5 to create various visuals
* Give user the possibility to export and download the visualization as HD print file from a p5 canvas in React

#### Backend
* Upload song to Firebase
* User authentification
* Remember user on the local/session storage, to prevent re-sign in every refresh.

### Please check the Trello board, as tasks evolve continuously             

## Useful Links
[Zero to Mastery - Guidelines on open source](https://github.com/zero-to-mastery/start-here-guidelines)            
[CONTRIBUTING.md](https://github.com/zero-to-mastery/visual-music/blob/master/CONTRIBUTING.md)               
[GitHub and PR Guide](https://github.com/zero-to-mastery/visual-music/blob/master/Visual-Music-GitHub-PR-Guide.pdf)


## Functionalities
### Version 1.0
* Navigation:
  * landing page
  * registration form
  * sign in form
  * player page
* Play/Stand-By
* Export and download screen capture
* One main theme for visual transcribe
* User registration functionalities
    
### Version 2.0
* New visual themes
* User can upload other types of audio files?
* User can input live music?

## Release & Launch
Visual Music is being built with the intention of releasing and maintaining the project in the real world. Therefore providing contributors with a great opportunity to expand on and learn new skills, being part of a project that can be included on resumes and showed off to friends, family and potential employers.

A survey for team members is on the Trello board to discuss where and how the app should be released.
* ZTM Discord
* LinkedIn
* ...
