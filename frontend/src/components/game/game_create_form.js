import React from 'react';

class CreateGameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: 'https://github.com/Bill-the-dev/Unshelvd_MERN/blob/main/z-images/game-piece-1.png?raw=true',
      min: 1, //playerCount.min: '' (?)
      max: 1000, //playerCount.max: '' (?)
      category: [],
      descriptors: [],
      gameType: [],
      description: '',
      rulesLink: '',
      userCreator: props.currentUser,
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateSelect(field) {
    const curStateVals = this.state[field]
    
    return e => curStateVals.includes(e.currentTarget.value) ?
      this.setState({[field]: curStateVals.filter(val => val !== e.currentTarget.value)})
      : this.setState({[field]: curStateVals.concat(e.currentTarget.value)})
    }

    handleSubmit(e) {
      e.preventDefault();
      let game = {
        name: this.state.name,
        image: this.state.image,
        min: parseInt(this.state.min),
        max: parseInt(this.state.max),
        category: this.state.category.concat(this.state.descriptors), 
        gameType: this.state.gameType,
        description: this.state.description,
        rulesLink: this.state.rulesLink,
        userCreator: this.state.userCreator
      };

      let submitGame = async() => this.props.createGame(game);
      
      submitGame()
      .then(game => { 
        const updatedUser = this.props.currentUser
        updatedUser.games = this.props.currentUser.games.concat(game.game.data._id)
        this.props.updateUser(updatedUser)
      })
      .then(() => this.props.history.push({pathname: `/library`}),3000)
      .catch(err => console.log({err: err}))
    }

    componentWillUnmount() {
      this.props.removeErrors()
    }

    renderErrors() {
      return(
        <ul>
          {
            this.props.errors.map((err,i) => (
              <li key={`error-${i}`}>
                {err.message}
              </li>
            ))
          }
        </ul>
      )
    }

    render() {  
    return (
      <div className='new-game-form-container'>
        <form className='new-game-form' onSubmit = {this.handleSubmit}>
        <p className='game-form-header'>Create a New Game</p>
          <div className='game-form-name'>
            <label >Name:<span className='asterik'>*</span> 
              <input type='text' value={this.state.name} onChange={this.update('name')}/>
            </label>
          </div>
          <div className='game-form-numplayers'>
            <p><span>Number of Players</span> (leave blank if no restriction):</p>
            <div>
              <label>Min 
                <input type='number' onChange={this.update('min')} min="1"/>
              </label>
              <label>Max 
                <input type='number' onChange={this.update('max')} min="1"/>
              </label>
            </div>
          </div>
          <div className='game-form-category'>
            <h2>Select all categories that apply:<span className='asterik'>*</span></h2>
            <div>
              <label className='category-grid-item add-game-input'>Board Game
                <input type='checkbox' className='type-checkbox' name='category' value='Board Game' onClick={this.updateSelect('category')}/>
              </label>

              <label className='category-grid-item add-game-input'>Playing Cards
                <input type='checkbox' className='type-checkbox' name='category' value='Playing Cards' onClick={this.updateSelect('category')}/>
              </label>

              <label className='category-grid-item add-game-input'>Dice
                <input type='checkbox' className='type-checkbox' name='category' value='Dice' onClick={this.updateSelect('category')}/>
              </label>

              <label className='category-grid-item add-game-input'>Pen and Paper
                <input type='checkbox' className='type-checkbox' name='category' value='Pen and Paper' onClick={this.updateSelect('category')}/>
              </label>

              <label className='category-grid-item add-game-input'>App
                <input type='checkbox' className='type-checkbox' name='category' value='App' onClick={this.updateSelect('category')}/>
              </label>

            </div>
          </div>
          <div className='game-form-descriptors'>
            <h2>Select additional descriptors:</h2>
            <div>

              <label className='category-grid-item add-game-input'>Party
                <input type='checkbox' name='descriptors' value='Party' onClick={this.updateSelect('descriptors')}/>
              </label>
              <label className='category-grid-item add-game-input'>Word
                <input type='checkbox' name='descriptors' value='Word' onClick={this.updateSelect('descriptors')}/>
              </label>
              <label className='category-grid-item add-game-input'>Puzzle
                <input type='checkbox' name='descriptors' value='Puzzle' onClick={this.updateSelect('descriptors')}/>
              </label>
              <label className='category-grid-item add-game-input'>Quick
                <input type='checkbox' name='descriptors' value='Quick' onClick={this.updateSelect('descriptors')}/>
              </label>
              <label className='category-grid-item add-game-input'>Team Play
                <input type='checkbox' name='descriptors' value='Team Play' onClick={this.updateSelect('descriptors')}/>
              </label>
              <label className='category-grid-item add-game-input'>Bluffing
                <input type='checkbox' name='descriptors' value='Bluffing' onClick={this.updateSelect('descriptors')}/>
              </label>
              <label className='category-grid-item add-game-input'>Deduction
                <input type='checkbox' name='descriptors' value='Deduction' onClick={this.updateSelect('descriptors')}/>
              </label>
            </div>
          </div>
          <div className='game-form-type'>
            <h2>What setting is this best played in?<span className='asterik'>*</span></h2>
            <div>
              <label>Connected (online)
                <input type='checkbox' name='gameType' value='Connected' onClick={this.updateSelect('gameType')}/>
              </label>
              <label>Unplugged (in person)
                <input type='checkbox' name='gameType' value='Unplugged' onClick={this.updateSelect('gameType')}/>
              </label>
            </div>
          </div>
          <div className='game-form-description'>
            <label>Description:
              <br/>
              <textarea placeholder='Include link to play online if applicable' onChange={this.update('description')}/>
            </label>
          </div>
          <div className='game-form-rules'>
            <label>Link to Rules:
              <br/>
              <input type='text' onChange={this.update('rulesLink')}/>
            </label>
          </div>
          <div className='game-form-submit'>
            <input className='button' type='submit' value='Create Game'/>
          </div>
          <div className='game-errors'>
            {
              this.props.errors?.map((err,i) => (
                <li key={`error-${i}`}>
                  {err.message}
                </li>
              ))
            }
          </div>
        </form>
      </div>


    )
  }

}

export default CreateGameForm;