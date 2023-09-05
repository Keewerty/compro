import { createSignal, type Component, onMount, For, Show, JSXElement } from "solid-js"; 
export interface SertificateProps { children?: JSXElement }
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Sertificate: Component<SertificateProps> = (props: any) => {

    const [hh,setHh] = createSignal('CEK 1')
    
const [htmlContent, setHtmlContent]: any = createSignal(`
<div>
<div style="    background-size: cover;
background-image: url(../../public/sdp.png);
width: 100%;
height: 150vh;
background-repeat: no-repeat;
text-align: center;
">
<div style="width: 165px;
margin-left: 70px;
padding-top: 77px;"><img src="../../public/logo_bc_alt-c.png" /></div>
<div style="    padding-top: 163px;
font-size: 20px;
font-style: italic;
font-weight: 500;">Front End Developer Solid JS</div>
<div style="    font-size: 50px;
padding-top: 10px;
font-style: italic;">Fadhil Budhi Prasetya</div>
<div style="    padding-top: 15px;
font-style: italic;
font-weight: 500;
font-size: 20px;">Diberikan kepada</div>
<div style="font-style: italic;
padding-top: 75px;
font-weight: 500;
font-size: 20px;">Karena telah menyelesaikan pelatihan selama waktu pelathian (1 jam)</div>
<div style="font-size: 20px;
font-weight: bold;
padding-top: 18px;
font-style: italic;">LULUS dengan predikat "SANGAT BAIK"</div>

<div ><img src="../../public/ttd.png" style="    width: 210px;
margin-left: 70vw;
padding-top: 252px;" /></div>
<div style="margin-left: 51vw; 
font-size: 25px;
font-weight: 600;">Yahya Ayyash Nasrullah</div>

</div>

`);


   
const [htmlContent1, setHtmlContent1]: any = createSignal(`
<div>
<div style="    background-size: cover;
background-image: url(../../public/sp.png);
width: 100%;
height: 150vh;
background-repeat: no-repeat;
text-align: center;
">
<div style="    padding-top: 390px;
font-size: 20px;
font-style: italic;
font-weight: 500;">Front End Developer Solid JS</div>
<div style="text-align: left;
margin-left: 36vh;
font-size: 17px;
font-weight: 400;
padding-top: 50px;
color: black;">
<div style="margin: 12px;">1.penjelasan tentang node js, npm, npx ,dan solid js build base project</div>
<div style="margin: 12px;">2.penjelasan tentang struktuk folder & file" base project </div>
<div style="margin: 12px;">3.penjelasan tentang struktur component dan fungsi const ,return, fragment & parenthese</div>
<div style="margin: 12px;">4.penjelasan tentang ngecompile project ,penjelasan dist folder, penjelasan nginx server  & deploy ke server nginx</div>
<div style="margin: 12px;">5.penjelasan tentang utilitas dan fungsi bawaan solid js (createSignal & createStore)</div>
<div style="margin: 12px;">6.penjelasan tentang createMemo untuk memperbarui nilai secara otomatis ketika dependensinya berubah</div>
<div style="margin: 12px;">7.penjelasan tentang onMount & onCleanup </div>
<div style="margin: 12px;">8.penjelasan tentang createEffect , fetch & then </div>
</div>

</div>

`);



// const convertToPDF = async () => {

// const pdf = new jsPDF();
// const contentElement = document.createElement('div');
// contentElement.innerHTML = htmlContent();
// document.body.appendChild(contentElement);

// try {
//   const canvas = await html2canvas(contentElement);
//   const imageData = canvas.toDataURL('image/jpeg', 1.0);
//   pdf.addImage(imageData, 'JPEG', 10, 10, 325, 170);
//   pdf.save('converted_content.pdf');
// } catch (error) {
//   console.error('Error generating PDF:', error);
// }
// };

const convertToPDF = () => {
    const pdf = new jsPDF('p', 'px', [500, 500]);
    const element = document.createElement('div');
    element.innerHTML = htmlContent();
    document.body.appendChild(element);
            
    // Convert the HTML element to canvas
    html2canvas(element,{
        allowTaint: true,
        useCORS: true,
        scale: 1
    }).then(canvas => {
        const imageData = canvas.toDataURL('image/png', 1.0);
        pdf.addImage(imageData, 'PNG', 10, 10, 480, 320);
        pdf.save('converted_content.pdf');
    });
};

const convertToPDF1 = () => {
    const pdf = new jsPDF('p', 'px', [500, 500]);
    const element = document.createElement('div');
    element.innerHTML = htmlContent1();
    document.body.appendChild(element);
            
    // Convert the HTML element to canvas
    html2canvas(element,{
        allowTaint: true,
        useCORS: true,
        scale: 1
    }).then(canvas => {
        const imageData = canvas.toDataURL('image/png', 1.0);
        pdf.addImage(imageData, 'PNG', 10, 10, 480, 320);
        pdf.save('converted_content.pdf');
    });
};



  return (
     <>
     <div style="padding-top:100px">
     <button onClick={convertToPDF}>Convert to PDF</button>

     <button onClick={convertToPDF1}>Convert to PDF 1</button>
     </div>
     </>
  );
};


export default Sertificate;