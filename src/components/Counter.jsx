export const Counter = () {
    //let count=0;//initialisation avec let et pas cons pour avoir l accees et possibilite de changer la variable de l'exterieur
    const [count,setCount] = useState(0); 
    function handleClick  ()  {//methode de declaration de fonction
        //count++;
        setCount
        console.log(count);// mise a jour dans la console et pas dans count 
    }
    return(
        <>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}