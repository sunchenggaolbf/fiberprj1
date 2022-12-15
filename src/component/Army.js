import Soldier from './Soldier'
export default function Army(){
    return(
        <>
        <Soldier position={[-2,0,0]} />
        <Soldier position={[2,0,0]} />
        <Soldier position={[4,0,0]} />
        </>
    );
}