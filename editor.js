
function onload(){
    var elem = document.getElementById('editor');
    elem.contentEditable=true;
    elem.focus();


}

var incrementno=''; // for genearte unique id for generated span

function bold(){
     var text = window.getSelection(); 
         if(text!=""){                      // check if particular word is perform action or all div perform
             let data=document.getElementById('editor').innerHTML.trim();
             let lastword=data.split(" ").splice(-1)[0]; 
             console.log(lastword);
             var range = window.getSelection().getRangeAt(0),   
             span = document.createElement('span');
             let nodespace= document.createTextNode( '\u00A0' );   // add space 
             if(range.cloneRange().startContainer.parentNode.tagName=='DIV'){ // check if no other span is present before
                   span.style.fontWeight = 'bold';
                   span.id=text+incrementno;    // unique id is genearte next time we will get id and update it not add new span
                   span.appendChild(range.extractContents());
                   range.insertNode(span);
                   if(lastword==text){
                     span.after(nodespace);   // addd space if it is last word because we are adding span to make it bold
                   }
                   incrementno++;
               }else{
                     let span2=range.cloneRange().startContainer.parentNode;
                
                   if((span2.style.cssText).includes('font-weight: bold;')){
                       span2.style.fontWeight = 'normal';
                   }else{
                     if (span2.style.removeProperty) {
                         span2.style.removeProperty('font-weight');
                     } 
                     span2.style.fontWeight = 'bold';
                   }
             }
              window.getSelection().empty();
           }else{                               /// all div word perform action
            let div = document.getElementById('editor');
            if(div!=null){
            if((div.style.cssText).includes('font-weight: bold;')){
               document.getElementById('editor').style.fontWeight = 'normal';
                let docs =document.getElementById('editor').children;
                for(var i = 0; i < docs.length; i++) {   // loop for all words if there any span tag is available
                 if(docs[i].tagName == 'SPAN') {
                          docs[i].style.fontWeight = 'normal';
                   }
               }
             }else{
               document.getElementById('editor').style.fontWeight = 'bold';
                let docs=document.getElementById('editor').children;
                for(var i = 0; i < docs.length; i++) {
                 if(docs[i].tagName == 'SPAN') {
                          docs[i].style.fontWeight = 'bold';
                   }
               }
             }
            }
         }
    
}

// function for italic
function italic(){
      var text = window.getSelection();
          if(text!=""){
              let data=document.getElementById('editor').innerHTML.trim();
              let lastword=data.split(" ").splice(-1)[0]; 
              var range = window.getSelection().getRangeAt(0),
              span = document.createElement('span');
              let type=range.cloneRange().startContainer.parentNode.tagName;
              let nodespace= document.createTextNode( '\u00A0' );
              if(range.cloneRange().startContainer.parentNode.tagName=='DIV'){
                    span.style.fontStyle = 'italic';
                    span.id=text+incrementno;
                    span.appendChild(range.extractContents());
                    range.insertNode(span);
                    if(lastword==text){
                      span.after(nodespace);
                    }
                    incrementno++;
                }else{
                      let span2=range.cloneRange().startContainer.parentNode;
                 
                    if((span2.style.cssText).includes('font-style: italic;')){
                        span2.style.fontStyle = 'normal';
                    }else{
                      if (span2.style.removeProperty) {
                          span2.style.removeProperty('font-style');
                      } 
                      span2.style.fontStyle = 'italic';
                    }
              }
               window.getSelection().empty();
            }else{
             let div = document.getElementById('editor');
             if(div!=null){
             if((div.style.cssText).includes('font-style: italic;')){
                document.getElementById('editor').style.fontStyle = 'normal';
                 let docs =document.getElementById('editor').children;
                 for(var i = 0; i < docs.length; i++) {
                  if(docs[i].tagName == 'SPAN') {
                           docs[i].style.fontStyle = 'normal';
                    }
                }
              }else{
                document.getElementById('editor').style.fontStyle = 'italic';
                 let docs=document.getElementById('editor').children;
                 for(var i = 0; i < docs.length; i++) {
                  if(docs[i].tagName == 'SPAN') {
                           docs[i].style.fontStyle = 'italic';
                    }
                }
              }
             }
          } 
       
    }

    // function for underline
    function underline(){
          var text = window.getSelection();
              if(text!=""){
                  let data=document.getElementById('editor').innerHTML.trim();
                  let lastword=data.split(" ").splice(-1)[0]; 
                  var range = window.getSelection().getRangeAt(0),
                  span = document.createElement('span');
                  let type=range.cloneRange().startContainer.parentNode.tagName;
                  let nodespace= document.createTextNode( '\u00A0' );
                  if(range.cloneRange().startContainer.parentNode.tagName=='DIV'){
                        span.style.textDecoration = 'underline';
                        span.id=incrementno;
                        span.appendChild(range.extractContents());
                        range.insertNode(span);
                         if(lastword==text){
                          span.after(nodespace);
                        }
                        incrementno++;
                    }else{
                          let span2=range.cloneRange().startContainer.parentNode;
                     
                        if((span2.style.cssText).includes('text-decoration: underline;')){
                            span2.style.textDecoration = 'none';
                        }else{
                          if (span2.style.removeProperty) {
                              span2.style.removeProperty('text-decoration');
                          } 
                          span2.style.textDecoration = 'underline';
                        }
                  }
                   window.getSelection().empty();
                }else{
                 let div = document.getElementById('editor');
                 if(div!=null){
                 if((div.style.cssText).includes('text-decoration: underline;')){
                    document.getElementById('editor').style.textDecoration = 'none';
                     let docs =document.getElementById('editor').children;
                     for(var i = 0; i < docs.length; i++) {
                      if(docs[i].tagName == 'SPAN') {
                               docs[i].style.textDecoration = 'none';
                        }
                    }
                  }else{
                    document.getElementById('editor').style.textDecoration = 'underline';
                     let docs=document.getElementById('editor').children;
                     for(var i = 0; i < docs.length; i++) {
                      //console.log(docs[i]);
                      if(docs[i].tagName == 'SPAN') {
                             //  var div2 = document.getElementById(docs[i].id);
                               docs[i].style.textDecoration = 'underline';
                        }
                    }
                  }
                 }
              }
    }

// function for fontsize
    function fontsize(fontsize){
        var text = window.getSelection();
        if (text != "") {
          let data = document.getElementById('editor').innerHTML.trim();
          let lastword = data.split(" ").splice(-1)[0];
          var range = window.getSelection().getRangeAt(0),
            span = document.createElement('span');
          let type = range.cloneRange().startContainer.parentNode.tagName;
          let nodespace = document.createTextNode('\u00A0');
          if (range.cloneRange().startContainer.parentNode.tagName == 'DIV') {
            span.style.fontSize = fontsize;
            span.id = text + incrementno;
            span.appendChild(range.extractContents());
            range.insertNode(span);
            if (lastword == text) {
              span.after(nodespace);
            }
            incrementno++;
          } else {
            let span2 = range.cloneRange().startContainer.parentNode;
            span2.style.fontSize = fontsize;
          }
          window.getSelection().empty();
        } else {
          let div = document.getElementById('editor');
          if (div != null) {
            document.getElementById('editor').style.fontSize = fontsize;
            let docs = document.getElementById('editor').children;
            for (var i = 0; i < docs.length; i++) {
              if (docs[i].tagName == 'SPAN') {
                docs[i].style.fontSize = fontsize;
              }
            }
          }
        }

    }

    // function for font
    function changeFont(font){
         var text = window.getSelection();
            if(text!=""){
                let data=document.getElementById('editor').innerHTML.trim();
                let lastword=data.split(" ").splice(-1)[0];
                var range = window.getSelection().getRangeAt(0),
                span = document.createElement('span');
                let type=range.cloneRange().startContainer.parentNode.tagName;
                let nodespace= document.createTextNode( '\u00A0' );
                if(range.cloneRange().startContainer.parentNode.tagName=='DIV'){
                      span.style.fontFamily = font;
                      span.id=text+incrementno;
                      span.appendChild(range.extractContents());
                      range.insertNode(span);
                      if(lastword==text){
                        span.after(nodespace);
                      }
                      incrementno++;
                  }else{
                        let span2=range.cloneRange().startContainer.parentNode;
                        span2.style.fontFamily=font;
                }
                 window.getSelection().empty();
              }else{
               let div = document.getElementById('editor');
               if(div!=null){
                  document.getElementById('editor').style.fontFamily = font;
                   let docs =document.getElementById('editor').children;
                   for(var i = 0; i < docs.length; i++) {
                    if(docs[i].tagName == 'SPAN') {
                             docs[i].style.fontFamily = font;
                      }
                  }
               }
            }
      }

        // function for image upload
      function imageupload(event){
        //  console.log(URL.createObjectURL(event.target.files[0]));
       if(event.target.files[0].type =='image/jpeg' || event.target.files[0].type =='image/png'){  // check type of upload file
            var image = '<span><img  src='+URL.createObjectURL(event.target.files[0])+'  width="100px" height="100px"></span>'; 
            var text = window.getSelection();
            var sel, range, node;
            if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
            range = window.getSelection().getRangeAt(0);
            node = range.createContextualFragment(image);
                        range.insertNode(node);
                    }
            } else if (document.selection && document.selection.createRange) {
                        document.selection.createRange().pasteHTML(image);
            }
       }else{
           alert("file type is not correct");
       }
      }