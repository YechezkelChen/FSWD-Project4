export default function AddPlayer(props) {
    
    return (
        <div className="setup">
            <form className='addForm' onSubmit={props.handleAddPlayer} style={{display:"inline-block"}}>
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
            </form>
            <button onClick={props.handleStartButton} style={{margin:"0 10px"}}>Start</button>
        </div>
        
    )
}