import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import Navbar from "../components/Navbar";
import "./home.css"
import { useState } from "react";



export default function Bots(){
    const [ game , setGame] = useState(new Chess());
    const [history , setHistory] = useState(game.history({verbose : true}))


    function play(modify){
        setGame((g)=>{
            const update = {...g};
            modify(update);
      
            return update;
        })
    }
    function makeMove(){
        const possibleMove = game.moves();
        if(possibleMove.length === 0 || game.game_over() || game.in_draw()){
            return;
        }
        const randomIndex = Math.floor(Math.random()*possibleMove.length);
        play((game)=>{
            game.move(possibleMove[randomIndex]);
            console.log(game.history({verbose: true}))
            setHistory(game.history({verbose : true}))
        })
    }

    function onDrop(source,target){
        let move = null;
        play((game)=>{      
            move = game.move({
                from: source,
                to:target,
                promotion:"q"
            })
   
            
        })

        if(move == null){
           
            return false;
        }
        setTimeout(makeMove,200);
        return true;

    }

    return(
        <div className="Bots">
            <Navbar/>
            <div className="flex justify-center items-center" id="view">
            <div id="board">
                <Chessboard position={game.fen()} onPieceDrop={onDrop} />
            </div>
            <div className="history">
         
                { history.length > 0 && history.map((item)=>{
                    if(item.color === "w"){
                        
                        return <img src={`../assets/images/w/${item.piece}.png`} alt={item.piece} />
                    }
                    else{
                        return <img src={`../assets/images/b/${item.piece}.png`} alt={item.piece} key={item.san}/>
                    }
                    
                })}
                
            </div>


            </div>


        </div>


    )
}