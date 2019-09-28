<img src="https://github.com/zero-to-mastery/visual-music/blob/master/visual-music-logo/Logo%20Background.jpg" alt="logo" width="150" height="150">

## Visual Music WebApp
An app that converts your favorite music pieces into visual expressions. 

Visual Music is a collaboration project managed by a group of dedicated fellow students. Aimed at all music and arts lovers, it provides the users with a real time visual transcription of a streamed music piece. 

If the visual transcription can be at first of random assignment of colors and shapes, it shouldn't remain so, as **one of the main interest is to transcribe the emotional effects of the music piece**. Therefore, questions will araise as perception is highly cultural and language induced. It might be interesting in a second time to create various themes based on those considerations for the visual transcription.     
     
<img src="https://raw.githubusercontent.com/zero-to-mastery/visual-music/master/visual-music-mockups/landing-page.png" alt="landing page" width="500">

## Applications
The applications could be :
* the possibility to screen the visual expression as background for parties, concerts and stages, 
* accessibility, by giving a visual transcription of music pieces, making them accessible to the hearing impaired,
* creation of original objects, with the possibility of a screen capture going with a downloadable HD print file, the possibility of printing, framing and offering the painting of a song to friends and family,
* tool or interesting experiment for musicologists, linguists, scientists, etc.

## Technology/Stack:
* [Figma](https://www.figma.com/): to design the UI
* [Storybook](https://storybook.js.org/): to test and export the UI components for React
* [React](https://reactjs.org/): to build the UI
* [p5](https://p5js.org/): for visualization
   * using [react-p5-wrapper](https://www.npmjs.com/package/react-p5-wrapper))
* [Firebase](https://firebase.google.com/)                 
* [Travis CI](https://travis-ci.org/): to build and test the deployed app
  
__Idea:__ We want to analyse the data from an uploaded mp3 song, and process it through p5.js. We are not building a player, and not building a simple visualizer: we want to think on how to transcribe the music in an artistic way.       

This means that a dive into visual music theory is necessary. Understanding music theory would allow us to build features such as offering different themes/options based on:

- the **notes**
  - color of tone = amount of overtones
  - frequency/pitch/hertz
  - volume/amplitude/decibels
- the **character** of the music, which can be specified by 3 components:
  - tone of the music piece (major, minor)
  - the tempo / character
  - the bar / measure
- the **rhythm** which can generally be identified from the repetition of different components:
  - notes
  - duration of notes
  - sequencing of notes      
--> This is ultimately the musical expression of the score: a score contains both the notes to play, the duration they must have and of course in what order and how fast play them                      


## Useful Links
[Zero to Mastery - Guidelines on open source](https://github.com/zero-to-mastery/start-here-guidelines)            
[CONTRIBUTING.md](https://github.com/zero-to-mastery/visual-music/blob/master/CONTRIBUTING.md)               
[GitHub and PR Guide](https://github.com/zero-to-mastery/visual-music/blob/master/Visual-Music-GitHub-PR-Guide.pdf)       
[Wiki](https://github.com/zero-to-mastery/visual-music/wiki)                     
[Application Mock-ups](https://github.com/zero-to-mastery/visual-music/wiki/Application-Mock-ups)                 
 

## Functionalities
### Version 1.0
* Landing page
  * parallax effect ->         
Features         
About us        
Contact form          
Social media (links)          
Login/Register/Reset password             
         
* Sign up screen   
* Login screen    
* Reset password screen     
* Onboarding user screen     
* Uploading song screen        
* Visual themes panel   
* Preview visual screen
* Player page         
* Snapshot screen             
* Share on social media screen             
* Download visual screen               

### Features
* Upload mp3 song
* Export/download HD print file
* Share screenshots on social media        
* Various built-in themes for user to choose from


## Release & Launch
Visual Music is being built with the intention of releasing and maintaining the project in the real world. Therefore providing contributors with a great opportunity to expand on and learn new skills, being part of a project that can be included on resumes and showed off to friends, family and potential employers.

A survey for team members is on the Trello board to discuss where and how the app should be released.
* ZTM Discord
* LinkedIn
* ...
