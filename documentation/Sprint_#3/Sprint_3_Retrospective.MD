
#####  PROJECT SPACEWORDLE SPRINT 3 RETROSPECTIVE  ######
#####  DATE: 07/06/2022  ######

## Team name and members                
Group 12: @Thabo-PROG
          @Muchaveleli
          @Gabriella139 (Scrum Master)
          @Christina-css
          @RosvoC

## Sprint Start Date (Expected)
01/06/2022

## Sprint Completion Date (Expected)
07/06/2022

## Days (actual sprint duration)
7 days

## Goal for this sprint
By the end of this sprint, the SpaceWordle product that must be achieved by completing the following stories:
 - See how long it took to play the game (story point 1)
 - Get access to the number of plays and wins in my profile (story point 3)
 - Get a pin to share with my chosen group in multiplayer mode. (story point 2)
 - Choose to play with my preferred opponents (story point 3)
 - Access the game log to see all guesses and moves made (story point 5)
 - Choose a word for my group of opponents to guess (story point 2)
 - See the leader board from my group play (story point 3)
 - See my opponents' moves on highlighted board (story point 4)*
 - Go to a multiplayer room and wait for all opponenents (story point 2)

 And the completion of five backlog stories:
 - See if my opponent's correctly guessed the word (story point 2)*
 - See word guess distribution for the most recent game (story point 3)
 - As a player I must be able to choose my own playing time limit (story point 2)
 - See correct word after six wrong attempts (story point 2)
 - Enter valid username password to sign-in. (story point 4)*

 Which is a total of 14 stories for this sprint. 5 of these were completed (indicated by *) and 9 were not completed , which yields a 36% completion rate. The product is accessed on http://spacewordle.azurewebsites.net/

In addition, all necessary tests should be implemented and test execution and deployment should be automated at the end of this sprint

## Sprint inspection

### What went well during the Sprint

 - Routing was understood by all members which allowed easier web application flow and integration. 
 - All commits were made and all merged code deployed as required
 - The correct manner in which TBD is supposed to be carried out(updating master regularly by merging throughout the sprint) was almost fully understood and  in this sprint pull requests are observed throughout the sprint instead of just towards the end of the sprint.
- Once again, consistency was maintained in relation to TBD which prevented issues encountered in the first Sprint.

### Problems encountered

 - Not all the stories assigned to this sprint were completed, subsequently not all game features were accomplished.
 - Implementing data handling through the databse by relating data tables was understood conceptually yet was challenging to implement. 
 - The stories assigned to this final sprint required the database much more than previous stories, and this was required much progress to be done in a short span of time. 

### How the sprint went with regards to processes and tools 
- MongoDB was used to implemented a database which was used to store usernames and passwords
- Jest testing was implemented yet Travis was not utilised
- The deployment of the game from azure provided some challenges when refusing to deploy several times during this sprint but this was resolved by selecting the correct start command (node app.js) and correct deployment port (8080)

### Sprint velocity 


- As was predicted, the number of points for the remaining stories being over the last number of user stories meant not all of the user stories could be completed in the given time. The determined sprint velocity was 31.5 points per sprint and this sprint had a total of 36 points, and less stories were completed [1][2]

##### References: [1] https://www.lucidchart.com/blog/how-to-estimate-sprint-velocity
#####             [2] https://asana.com/resources/story-points