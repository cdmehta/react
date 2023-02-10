export default function Propdemo(props)
{
    const marks=props.mark;
    return(
        <>
        { marks>36 ? <Pass/>:<Fail />}
        </>
    );
}
function Pass()
{
    return <h1>Congrates You did it</h1>
}
function Fail()
{
    return <h1>Oops !!! Better Luck Next time</h1>
}
