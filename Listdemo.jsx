export function Listdemo(props)
{
    const chocolate=['Oreo Silk','Schmitten','Toblerone']
    return(
    <>
    <ul>
    {
        chocolate.map((chk)=><Chocolate brand={chk}/>)
        
    }
    </ul>
     </>);
}
function Chocolate(props)
{
    return <li>I like {props.brand}</li>
}
