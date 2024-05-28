const buttonsList = ["+1","-1","x2","/2"]

let inProgress = true

export default function buttonsGame() {
    if(inProgress){
        return (
            <>
                <button onClick={x=>x}>+1</button>
                <button onClick={x=>x}>-1</button>
                <button onClick={x=>x}>x2</button>
                <button onClick={x=>x}>/2</button>
                
            </>
        )
    }
    else {
        return (
            <>
            <button onClick={x=>x}>New Game</button>
            <button onClick={x=>x}>Quit</button>
            </>
        )
    }
}