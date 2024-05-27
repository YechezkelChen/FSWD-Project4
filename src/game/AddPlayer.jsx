export default function AddPlayer(props) {
    
    return (
        <form className='addForm' onSubmit={props.handleAddPlayer}>
            <label htmlFor="addPlayer">Add Player</label>
            <input
                autoFocus
                id='addPlayer'
                type='text'
                placeholder="Your name"
                required
                value = {props.newPlayer}
                onChange={(e) => props.setNewPlayer(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Player">+</button>
            <button>Start</button>
        </form>
    )
}