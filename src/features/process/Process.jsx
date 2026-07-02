import React from "react";
import Container from "../../components/layout/Container";

const steps = [

"Inspection Request",

"Site Visit",

"Technical Assessment",

"Detailed Report",

"Client Support"

];

function Process(){

return(

<section
className="process"
id="process"
>

<Container>

<p className="section-tag">

OUR PROCESS

</p>

<h2 className="section-title">

Simple.
Transparent.
Professional.

</h2>

<div className="process-grid">

{steps.map((step,index)=>(

<div
className="process-card"
key={step}
>

<div className="process-number">

0{index+1}

</div>

<h3>{step}</h3>

</div>

))}

</div>

</Container>

</section>

);

}

export default Process;
