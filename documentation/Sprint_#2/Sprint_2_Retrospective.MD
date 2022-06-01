
#####  PROJECT SPACEWORDLE SPRINT 2 RETROSPECTIVE  ######
#####  DATE: 01/06/2022  ######

## Team name and members                
Group 12: @Thabo-PROG
          @Muchaveleli
          @Gabriella139 (Scrum Master)
          @Christina-css
          @RosvoC

## Sprint Start Date (Expected)
24/05/2022

## Sprint Completion Date (Expected)
31/05/2022

## Days (actual sprint duration)
8 days

## Goal for this sprint
By the end of this sprint, the SpaceWordle product that must be achieved by completing the following stories:
 - Choose to sign in or sign up for an account (story point 1)
 - Create or enter valid username and password to sign in (story point 5)*
 - Choose multiplayer mode to play with random opponents (story point 2)
 - Choose time limits if you want to play in timed mode (story point 5) *
 - Get to see my opponent's grid on my screen as well as my own grid and    keyboard displayed on my screen (story point 5)
 - Get an error when makng a guess with a word that does not exist (story point 3)
 - See my word guess distribution for the most recent game (story point 3) *
 - See if my opponents correctly guessed the word once they are done playing (story point 5) *

 And the completion of two backlog stories:
 - Share my color coded-game grid without exposing my word guesses (story point 3)
 - See correct word after six wrong attempts (story point 2) *

 Which is a total of 10 stories for this sprint. 5 of these were completed and 5 were not completed (indicated by *), which yields a 50% completion rate. The product is accessed on http://spacewordle.azurewebsites.net/

In addition, all necessary tests should be implemented and test execution and deployment should be automated at the end of this sprint

## Sprint inspection

### What went well during the Sprint
 - Team communicated regularly throughout the week and held physical and virtual meetings for better collaboration, as with sprint 1
 - More of the user stories were completed successfully and the game structure was improved
 - Consistency was maintain in relation to TBD which prevented issues encountered in the first Sprint.
 - Routing was understood by all members which allowed easier web application flow and integration. 
 - All commits were made correctly, and clean commit history was produced.

### Problems encountered
 - The sprint ended later than was scheduled, delayed by a day, because of delayed story completions.
 - Some pull requests did not deploy which will be fixed in the next sprint 
 - Knowledege regarding database for application to specific stories led to delay in sprint.
 - The implemented stories did not contain any tests as was aimed for in this sprint. 
 - Not all the stories assigned to this sprint were completed. The features for stories that were not completed did not function as expected and require to be de-bugged. Other features from these stories are more difficult to implement and require more time. 

### How the sprint went with regards to processes and tools 
- All implemented small features where created in their own branches and pushed to Github. TBD was implemented better than in the first sprint with short-lived branches being merged to the trunk only after reviews
- Deployment was automated in the first sprint as was seen by deployement of the game in this sprint (2) yielding a better result (one can login to the game and see game features)

### Resolutions to problems and future improvements
- The causes for the the deployment failure of some features need to be determined and the features need to be re-built
- Tests need to be implemented for as many features as is possible

### Sprint velocity 

- From sprint 1, the estimated sprint velocity was 29 points per sprint. Since sprint 2 had a total of 34 sprints it was expected that at least 85.3% of the stories would be completed based on the calculated sprint velocity. As stated above, 50% of the stories were completed due to the other stated factors.  
- Using the Fibonacci sequence method [1], the stories for this sprint were again assigned points between 1 and 5, and the total story points were 34[2]. The achieved sprint velocity by the end of this sprint was then 63_points/2_sprints = 31.5 points per sprint. 
- With the number of points for the remaining stories being slightly over this value, it can be expected that the stories would need more sprints to be completed. However, by distributing the stories evenly between collaborators an effort will be made to complete all stories by the next sprint.

##### References: [1] https://www.lucidchart.com/blog/how-to-estimate-sprint-velocity
#####             [2] https://asana.com/resources/story-points