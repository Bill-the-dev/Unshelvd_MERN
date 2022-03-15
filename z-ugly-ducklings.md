

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
