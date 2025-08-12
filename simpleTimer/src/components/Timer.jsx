import { useState ,useRef,useEffect} from 'react'
const Timer = () => { 
        const timerRef = useRef(null);
        const [time,setTime] = useState(0);
        const [isRunning,setIsRunning] = useState(false);
        
        const toggleTimer =() =>{
            if (isRunning) {
                clearInterval(timerRef.current)
                setIsRunning(false)
            }
            else{
                    timerRef.current = setInterval(()=>{
                        setTime(prevTime => prevTime+1)
                    },1000),
                    setIsRunning(true)
            }
            
        }
        const StopTimer=()=>{
            clearInterval(timerRef.current);
            timerRef.current = null; 
            setTime(0);
            setIsRunning(false);
        }
       

    return ( 
   
             
    <>
    
   <>
  <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg text-center">
    <p className="text-3xl font-bold mb-6">Timer: <span className="text-purple-600">{time}</span></p>
    <div className="flex justify-center gap-4">
      <button
        onClick={toggleTimer}
        className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={StopTimer}
        className="px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
      >
        Stop
      </button>
    </div>
  </div>
</>

       
    </> 
   


    );
}
 
export default Timer;