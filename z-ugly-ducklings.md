

`/validations/games` opted to comment out the validations at the category and game type on the backend.
  ```JS
    // if (!Validator.isLength(data.category.split(", ").length, { min: 1 })) {
    //   errors.category = 'Category cannot be empty';
    // }

    // if (!Validator.isLength(data.gameType.length, { min: 1 })) {
    //   errors.gameType = 'Game type cannot be empty';
    // }
  ```


`/models/Game` unique index needed

^ also groups


change "gameType" to "setting"

add game.status to display if the game is in a user's library

<!-- `/routes/users` when you create a user automatically add a set of free/online games
  - double check update user -->