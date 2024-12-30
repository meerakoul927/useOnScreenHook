import React , {useRef} from 'react'
import useOnScreenHook from '../useOnScreenHook/useOnScreenHook';

function Element(props) {
    const {value , key} = props;
    const ref = useRef(null);
    const isVisible = useOnScreenHook(ref);
    console.log("@@@ value inside the ref",ref);

  return (
    <>
            <div ref={ref} className='box'>
             {value}
             <p></p>
             {isVisible ? 'Element is visible in viewport' : 'Element is not visible in viewport'}
            </div>

    </>
    )
}

export default Element