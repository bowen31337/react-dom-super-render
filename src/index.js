
const reactDomSuperRender:Function = (reactDomRender, action = 'replaceWith') => (el, rootEl, cb=()=>{} ) => {
  let fragment  = new DocumentFragment();
  let div = document.createElement('div') ;
  
  return reactDomRender(el, div, () => {
      cb();
      for(  let child of div.querySelectorAll(':scope > *') ) {
          fragment.appendChild(child);
      }
      rootEl[action](fragment);
  });
}

export default reactDomSuperRender;