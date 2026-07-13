import Grid from "./Grid";

export default function AnimatedBackground(){

return(

<div className="absolute inset-0 overflow-hidden">

<Grid/>

<div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"/>

<div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] animate-pulse"/>

<div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]"/>

</div>

)

}