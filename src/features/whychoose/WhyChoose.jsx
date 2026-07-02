import React from "react";
import Container from "../../components/layout/Container";

const points=[

"Independent & Impartial",

"Qualified Technical Experts",

"Clear Inspection Reports",

"Standards Based Assessment",

"Professional Client Support",

"Fast Turnaround"

];

function WhyChoose(){

return(

<section
className="whychoose"
id="whychoose"
>

<Container>

<p className="section-tag">

WHY TRUAXIS

</p>

<h2 className="section-title">

Why Clients Trust Us

</h2>

<div className="why-grid">

{points.map((point)=>(

<div
className="why-card"
key={point}
>

✓ {point}

</div>

))}

</div>

</Container>

</section>

);

}

export default WhyChoose;
