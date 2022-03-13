# Unshelvd

## Background and Overview
“I dunno, what do you want to do?”  Friends are no fun with open-ended questions. Unshelvd is here to fix that.

Unshelvd is a social gaming site that does away with uncertainty at your next meetup amongst friends. Just let the site know how many people you have, what your interests include (or exclude), and Unshelvd will give you a list of the games to pull off the (virtual) shelf.

It will give you suggestions for Connected (online) or Unplugged (in-person) games to play based on what's already on your shelf... or what you have in common with another user!

## Functionality and MVP
### 1. User Auth
* Splash page with option to log in or create new user
* Require user to log in before using any functionality
* BONUS: Without logging in, user can generator suggestion for any free game

### 2. User library/profile
* An index page of all games user has in library
* Ability to add or delete games from library
  * Create new game form will have drop down where possible to keep standardized data
  * Some optional fields will have default values
* BONUS: Use has ability to rate games and add personal comments

### 3. Social Groups
* CRUD cycle to create user groups to combine libraries
* User who creates group will be given a code to share with other users
* Any user with code can join the group
* Groups will persist in database unless admin deletes
  * BONUS: group will timeout after specific time and not persist in DB

### 4. Game Generator
* Feature that will generate a game recommendation based on:
  * Number of people playing
  * Combined user libraries
  * Category selection
* Game recommendation will include:
  * Name
  * Image (or default game image)
  * Player Count
  * Category
  * Description, if avail
  * Instructions link, if avail

### 5. Search (BONUS)
* Add search functionality within game library

## Technologies and Technical Challenges
* AWS for game show page images

## Group Members and Work Breakdown
| Member | Monday                                  | Tuesday                                                          | Wednesday         | Thursday      |
|--------|-----------------------------------------|------------------------------------------------------------------|-------------------|---------------|
| Bill   | Backend skeleton, Auth, Set up heroku   | PM: Group show page including create group                       | Group index page  | Deploy        |
| Emily  | Backend skeleton, Auth, Set up heroku   | Frontend Auth forms, finish splash/auth from Monday              | New game form     | README        |
| Kirby  | Frontend skeleton, splash page          | PM: Game show page                                               | Library show page | Flex          |
| Ethan  | Frontend skeleton, splash page          | PM: Suggestion Form                                              | Flex              | Flex          |
| All    | Regroup for skeleton review, AWS set up | AM: Seed DB (users, groups, games, demo), Meet for CSS framework |                   | Bugs, Styling |

--- 

## Design Wireframes

### Splash
![Splash Page](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/wireframes/01_splash.png?raw=true)

- `About` a brief description of the features and intended use of Unshelvd.
- `The Team` a list of the MERN team members with GH, LI, etc.
- `GitHub` links to the group repo.
- `Signup` and `Login` lead to their respective form pages.

---

### Main Library 
![Main Library](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/wireframes/02_library.png?raw=true)

- **Header** persists on all pages for a logged-in user.  
    - `Library` navLink routes to an index of a user's saved games.  This is the default home page on user login and detailed in this wireframe.
    - `Groups` navlink routes to the `Group Index` page.
    - `Suggest` navlink routes to the `Suggest Form` page. 
    - `DD User` displays username, and when clicked, shows logout in dropdown.
- `Favorites` (bonus feature) displays an index of the user's 'favorite' games.
- `All Games` displays an index of the user's saved games. 

---

### Group Index
![Group Index](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/wireframes/03_group_index.png?raw=true)

- **Header** (see above)
- `DD Add / Join` dropdown provides two options:
    - `Add` If the user is group admin, option to share link/code to allow others to join the group.
    - `Join` Allows the user to submit a link/code to join another user's group.
- `Your Groups` displays an index of groups the user is an admin or member. 
    - Clicking an individual group tile routes the user to the `Group Show` page

---

### Group Show
![Group Show](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/wireframes/04_group_show.png?raw=true)

- **Header** (see above)
- Index of all available games between group members.
- `Group Name` and `Group Users List` displays all members of the currently group.
- `Group Suggest` click to combine, pre-populate, and route to `Suggest Form` with all available group games.
- `Share Group Code` same as `DD Add / Join`, see above.

---

### Suggest Form
![Suggest Form](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/wireframes/05_suggest_form.png?raw=true)

- **Header** (see above)
- Returns index of games that fit selected criteria. Library is the only required criteria.
- `Choose Library` dropdown to select user's personal library or the combined library of any group they are a member.
- `Num Players` dropdown to filter by the number of players.
- `Category` dropdown (allows multiselect) to filter by category of game (casual, strategy, etc.).
- `Unplugged` and `Connected` toggle select (multiselect) to filter by tabletop or online games.
- `Go Fish` submits criteria and returns indexed results below.  Maintains state of selections for possible change and resubmission.

---

### Game Show
![Game Show](https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/wireframes/06_game_show.png?raw=true)

- **Header** (see above)
- Details a specific game and image (if available).
- `Library Status` displays if the game is in the user's saved games (boolean).
- `Num Players` number range of players that can play the game.
- `Category` displays all associated categories of the game (casual, strategy, etc.).
- `Description` short overview of the game. For `Connected` games, this will also contain the link for where to play.
- `Link to Rules` if available.
- `Connected/Un` displays if this is an `Unplugged` (tableop) and/or `Connected` (online) game.

### Game Form

- Not shown, refer to `Game Show` page for overall layout.  
- Game name, number of players, and 1+ categories are required.  




