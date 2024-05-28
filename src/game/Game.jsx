import HighScores from './HighScoresGame';
import ParticipantGame from './ParticipantGame';
import AddPlayer from './AddPlayer';
import './Game.css'
import { useState } from 'react';



export default function Game() {
    //useStates
    const [players, setPlayers] = useState([]);
    const [newPlayer, setNewPlayer] = useState('');
    const [run, setRun] = useState(false);

    //Helper Functions
    const addPlayer = (name) => {
        if(players.indexOf(name) > -1) return;
        else {
            const register = name;
            setPlayers([...players, register]);
            if(localStorage.getItem(name) === null){
                localStorage.setItem(name,'[]');
            }
        }
    }

    const removePlayer = (name) => {
        setPlayers(players.filter(p => p.name !== name));
    }

    const startGame = () => {
        if(players.length === 0) {
            alert("No players in Queue!")
        }
        else{
            setRun(true);
        }
    }

    const checkRemaining = () => {
        if(players.length <= 1) {
            setRun(false);
        }
    }

    //handler functions
    const handleAddPlayer = (e) => {
        e.preventDefault();
        if(!newPlayer) return;
        addPlayer(newPlayer);
        setNewPlayer('');
    }

    const handleStartButton = (e) => {
        startGame()
    }

    const handleRemovePlayer = (n,e) => {
        setPlayers([...players].filter(x => x != n));
        checkRemaining();
    }

    //JSX return
    return(
        <>
            <div className='title-card'>
                <h1>Get To 100!!!</h1>
                <HighScores />
            </div>
            <main>
                {!(run) && <AddPlayer 
                    newPlayer = {newPlayer}
                    setNewPlayer = {setNewPlayer}
                    handleAddPlayer = {handleAddPlayer}
                    handleStartButton = {handleStartButton}
                />}
                <ParticipantGame 
                    players = {players}
                    run = {run}
                    handleRemovePlayer = {handleRemovePlayer}
                />
            </main>
                
        </>
    )
}