import React from "react";
import Container from "../../components/layout/Container";

const faqs = [

{
q:"What inspection services do you provide?",
a:"We provide independent inspection services for lifts, escalators and moving walkways."
},

{
q:"Are your inspections independent?",
a:"Yes. Our inspections are impartial and independent from maintenance providers."
},

{
q:"Do you provide inspection reports?",
a:"Yes. Every inspection includes a professional technical report."
},

{
q:"Can inspections be scheduled?",
a:"Yes. We schedule inspections based on client requirements."
}

];

function Faq(){

return(

<section
className="faq"
id="faq"
>

<Container>

<p className="section-tag">

FAQ

</p>

<h2 className="section-title">

Frequently Asked Questions

</h2>

<div className="faq-list">

{faqs.map((faq)=>(

<div
className="faq-item"
key={faq.q}
>

<h3>{faq.q}</h3>

<p>{faq.a}</p>

</div>

))}

</div>

</Container>

</section>

);

}

export default Faq;
