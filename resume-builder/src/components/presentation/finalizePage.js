import React, { useEffect } from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

   function Finalize(props) {
    let educationSection= props.educationSection
    let contactSection=props.contactSection
    let documentd=props.document;
    const history=useHistory();

    useEffect(()=>{
      if(props.document.id==null){
        history.push("/gettingStarted");
      }
    })
  
    const saveToDatabase= async()=>{
      //gets store in firebase
    }
     const downloadResume=()=> {
    
      //  const input = document.getElementById('resumePreview');
      // console.log(document)
      //  html2canvas(input)
      //    .then((canvas) => {
      //      const imgData = canvas.toDataURL('image/png');
      //      const pdf = new jsPDF("p", "mm", "a4");
      //      var width = pdf.internal.pageSize.getWidth();
      //      var height = pdf.internal.pageSize.getHeight();
      //      pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
      //      // pdf.output('dataurlnewwindow');
      //      pdf.save("resume.pdf");
      //    }).catch(function(error){
      //      console.log(error)
      //    })

      const input=document.querySelector("#resumePreview");
      html2canvas(input).then((canvas)=>{
          const imgData=canvas.toDataURL("image/png");
          const pdf=new jsPDF("p","mm","a4");
          const width=pdf.internal.pageSize.getWidth();
          const height=pdf.internal.pageSize.getHeight();
          pdf.addImage(imgData,"JPEG",0,0,width,height);
          pdf.save("resume.pdf");

      }).catch((error)=>{
          console.log(error);
      })
     }
    return (
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={props?.document?.skinCd}></ResumePreview>   
          </div>
          <div className="finalize-settings center">            

             
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
    </div>
    </div>
    </div>
    )


    
}

const mapstateToProps=(state)=>{
  return {
    document:state.document,
    educationSection:state.education,
    contactSection:state.contactSection,

  }
}


export default connect(mapstateToProps)(Finalize)
