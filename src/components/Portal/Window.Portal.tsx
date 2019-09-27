import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface windowProps {
    closeWindowPortal: (close: boolean) => void,
    open: boolean,
}

const WindowPortal: React.FC<windowProps> = ({...props}) => {
  const [externalWindow, setExternalWindow] = useState<typeof window | null'>(null);
  const [containerEl, setContainerEl] = useState(null);

    useEffect(() => {
      if(props.open){
        setExternalWindow(window.open('', '', `width=${(window.innerWidth * .8)},height= ${(window.innerWidth * .8)},toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=0,left=${(window.innerWidth * .5)},top=${(window.innerWidth * .5)}`));
        if(externalWindow){
          containerEl = externalWindow.document.createElement('div');
          console.log(externalWindow);
          externalWindow.document.body.appendChild(containerEl);
          externalWindow.document.title = 'A React portal window';
          copyStyles(document, externalWindow.document);
      
          // update the state in the parent component if the user closes the 
          // new window
          externalWindow.addEventListener('beforeunload', () => {
            props.closeWindowPortal(false);
          });
        }
      }

      return () => {
        if(props.open){
          props.closeWindowPortal(false);
        }
      }
    }, [props.open]);

    const copyStyles = (sourceDoc: Document, targetDoc: any) => {
        Array.from(sourceDoc.styleSheets).forEach((styleSheet: any) => {
            if (styleSheet.cssRules) { // true for inline styles
              const newStyleEl = targetDoc.createElement('style');
        
              Array.from(styleSheet.cssRules).forEach((cssRule: any) => {
                newStyleEl.appendChild(targetDoc.createTextNode(cssRule.cssText));
              });
        
              targetDoc.head.appendChild(newStyleEl);
            } else if (styleSheet.href) { // true for stylesheets loaded from a URL
              const newLinkEl = targetDoc.createElement('link');
        
              newLinkEl.rel = 'stylesheet';
              newLinkEl.href = styleSheet.href;
              targetDoc.head.appendChild(newLinkEl);
            }
          });
    }

    return (
      containerEl && props.open ? ReactDOM.createPortal(
        props.children,
        containerEl,
      ) : null
    )
}

export default WindowPortal;