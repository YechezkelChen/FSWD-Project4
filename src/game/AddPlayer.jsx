export default function AddPlayer(props) {

    return (
        <div className="setup">
            <form className='add-form' onSubmit={props.handleAddPlayer} style={{ display: "inline-block" }}>
                <label htmlFor="add-player">Add Player</label>
                <input
                    autoFocus
                    id='add-player'
                    type='text'
                    placeholder="Your name"
                    required
                    value={props.newPlayer}
                    onChange={(e) => props.setNewPlayer(e.target.value)}
                />
                <button
                    className="game-buttons"
                    type="submit"
                    aria-label="Add Player">+</button>
            </form>
            <button className="game-buttons" onClick={props.handleStartButton} style={{ margin: "0 10px" }}>Start</button>
        </div>

    )
}
